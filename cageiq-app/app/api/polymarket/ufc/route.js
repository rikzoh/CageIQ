// Server-side API route - fetches live UFC odds from Polymarket
// Strategy: hit /events endpoint, filter events whose title/slug mentions UFC,
// then for each event extract head-to-head winner markets and probabilities.
// URL: /api/polymarket/ufc

const POLYMARKET_API = 'https://gamma-api.polymarket.com';

export const revalidate = 60;

function safeParse(x) {
  if (!x) return null;
  if (typeof x !== 'string') return x;
  try { return JSON.parse(x); } catch { return null; }
}

// Try to extract fighter names from a market question.
// Common patterns:
//   "Will Khamzat Chimaev defeat Sean Strickland at UFC 328?"
//   "Khamzat Chimaev vs. Sean Strickland - Who wins?"
function extractFighters(question) {
  if (!question) return null;
  const q = question.replace(/[?.!]/g, '');
  // pattern A: "X vs Y"
  let m = q.match(/^(.+?)\s+vs\.?\s+(.+?)(?:\s*[-–]|$)/i);
  if (m) return { a: m[1].trim(), b: m[2].trim() };
  // pattern B: "Will X defeat/beat Y"
  m = q.match(/will\s+(.+?)\s+(?:defeat|beat|win\s+against)\s+(.+?)(?:\s+at\s+|\s+in\s+|$)/i);
  if (m) return { a: m[1].trim(), b: m[2].trim() };
  return null;
}

function isUFCEvent(ev) {
  const blob = `${ev.title || ''} ${ev.slug || ''} ${ev.description || ''}`.toLowerCase();
  return /\bufc\b|\bmma\b/.test(blob);
}

export async function GET() {
  try {
    // Fetch high-volume active events. 200 is enough to find all UFC ones.
    const url = `${POLYMARKET_API}/events?active=true&closed=false&limit=200&order=volume24hr&ascending=false`;
    const res = await fetch(url, {
      next: { revalidate: 60 },
      headers: { 'User-Agent': 'CageIQ/1.0' },
    });

    if (!res.ok) {
      return Response.json({ error: `Polymarket ${res.status}`, markets: [] });
    }

    const events = await res.json();
    if (!Array.isArray(events)) {
      return Response.json({ error: 'unexpected response', markets: [] });
    }

    const ufcEvents = events.filter(isUFCEvent);
    const fights = [];

    for (const ev of ufcEvents) {
      const evMarkets = ev.markets || [];
      for (const m of evMarkets) {
        if (m.closed || !m.active) continue;
        const outcomes = safeParse(m.outcomes);
        const prices = safeParse(m.outcomePrices);
        if (!outcomes || outcomes.length !== 2 || !prices) continue;

        let fighterA, fighterB, probA, probB;

        const o0Lower = (outcomes[0] || '').toLowerCase();
        const o1Lower = (outcomes[1] || '').toLowerCase();
        const isYesNo = (o0Lower === 'yes' && o1Lower === 'no') || (o0Lower === 'no' && o1Lower === 'yes');

        if (!isYesNo) {
          fighterA = outcomes[0];
          fighterB = outcomes[1];
          probA = Math.round(parseFloat(prices[0]) * 100);
          probB = Math.round(parseFloat(prices[1]) * 100);
        } else {
          // yes/no - parse the question
          const extracted = extractFighters(m.question);
          if (!extracted) continue;
          fighterA = extracted.a;
          fighterB = extracted.b;
          const yesIdx = o0Lower === 'yes' ? 0 : 1;
          const yesPrice = parseFloat(prices[yesIdx]);
          probA = Math.round(yesPrice * 100);
          probB = 100 - probA;
        }

        if (!fighterA || !fighterB) continue;

        fights.push({
          event: ev.title,
          eventSlug: ev.slug,
          question: m.question,
          fighterA,
          fighterB,
          probA,
          probB,
          volume: m.volume ? `$${Math.round(parseFloat(m.volume) / 1000)}K` : null,
          liquidity: m.liquidity ? parseFloat(m.liquidity) : 0,
          endDate: m.endDate || ev.endDate,
          url: `https://polymarket.com/event/${ev.slug}`,
        });
      }
    }

    return Response.json({
      updatedAt: new Date().toISOString(),
      ufcEventCount: ufcEvents.length,
      count: fights.length,
      markets: fights,
    });
  } catch (err) {
    return Response.json({ error: err.message, markets: [] });
  }
}
