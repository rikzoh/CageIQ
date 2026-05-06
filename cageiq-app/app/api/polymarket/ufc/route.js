// Server-side API route - fetches live UFC odds from Polymarket
// Cached for 60 seconds to avoid hammering their API
// URL: /api/polymarket/ufc

const POLYMARKET_API = 'https://gamma-api.polymarket.com';

export const revalidate = 60; // cache for 60s

// Normalize names for fuzzy matching (handle accents, case, etc.)
function normalize(s) {
  return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
}

// Try to match a market question to two fighter names
function matchFight(question, fighterA, fighterB) {
  const q = normalize(question);
  const a = normalize(fighterA);
  const b = normalize(fighterB);
  // Check both first and last name for each
  const aLast = a.split(' ').pop();
  const bLast = b.split(' ').pop();
  return q.includes(aLast) && q.includes(bLast);
}

export async function GET() {
  try {
    // Fetch all active UFC markets
    const url = `${POLYMARKET_API}/markets?closed=false&active=true&limit=100&tag_slug=ufc`;
    const res = await fetch(url, {
      next: { revalidate: 60 },
      headers: { 'User-Agent': 'CageIQ/1.0' },
    });

    if (!res.ok) {
      return Response.json({ error: `Polymarket API ${res.status}`, markets: [] }, { status: 200 });
    }

    const raw = await res.json();
    const markets = Array.isArray(raw) ? raw : [];

    // Process each market into a clean format
    const cleaned = markets
      .filter((m) => m.question && m.outcomes && m.outcomePrices)
      .map((m) => {
        let outcomes, prices;
        try {
          outcomes = typeof m.outcomes === 'string' ? JSON.parse(m.outcomes) : m.outcomes;
          prices = typeof m.outcomePrices === 'string' ? JSON.parse(m.outcomePrices) : m.outcomePrices;
        } catch {
          return null;
        }
        if (!outcomes || outcomes.length !== 2) return null;

        return {
          question: m.question,
          slug: m.slug,
          fighterA: outcomes[0],
          fighterB: outcomes[1],
          probA: Math.round(parseFloat(prices[0]) * 100),
          probB: Math.round(parseFloat(prices[1]) * 100),
          volume: m.volume ? `$${Math.round(parseFloat(m.volume) / 1000)}K` : null,
          liquidity: m.liquidity ? parseFloat(m.liquidity) : 0,
          endDate: m.endDate,
          url: `https://polymarket.com/market/${m.slug}`,
        };
      })
      .filter(Boolean);

    return Response.json({
      updatedAt: new Date().toISOString(),
      count: cleaned.length,
      markets: cleaned,
    });
  } catch (err) {
    return Response.json({ error: err.message, markets: [] }, { status: 200 });
  }
}
