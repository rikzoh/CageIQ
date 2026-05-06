/**
 * Polymarket API utility
 *
 * Polymarket exposes public CLOB and Gamma APIs:
 *   - Gamma:  https://gamma-api.polymarket.com (markets metadata)
 *   - CLOB:   https://clob.polymarket.com (orderbook + prices)
 *
 * For UFC, we want the active markets where each fight has its own market
 * with two outcomes (Fighter A vs Fighter B).
 *
 * Usage:
 *   const odds = await fetchUFCOdds();
 *   // returns: [{ event, fighterA, fighterB, probA, probB, volume }, ...]
 */

const GAMMA_BASE = 'https://gamma-api.polymarket.com';

// Search Polymarket for active UFC markets
export async function fetchUFCMarkets() {
  try {
    const res = await fetch(
      `${GAMMA_BASE}/markets?closed=false&active=true&category=Sports&tag_slug=ufc&limit=50`,
      { next: { revalidate: 300 } } // cache for 5 mins
    );
    if (!res.ok) throw new Error(`Polymarket API ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('Polymarket fetch failed:', err);
    return [];
  }
}

// Get odds for a specific fight by fighter names
export async function fetchFightOdds(fighterA, fighterB) {
  const markets = await fetchUFCMarkets();
  const match = markets.find((m) => {
    const q = m.question?.toLowerCase() || '';
    return q.includes(fighterA.toLowerCase()) && q.includes(fighterB.toLowerCase());
  });
  if (!match) return null;

  const outcomes = JSON.parse(match.outcomePrices || '[]');
  const tokens = JSON.parse(match.outcomes || '[]');
  return {
    fighterA: tokens[0],
    fighterB: tokens[1],
    probA: Math.round(parseFloat(outcomes[0]) * 100),
    probB: Math.round(parseFloat(outcomes[1]) * 100),
    volume: match.volume,
    liquidity: match.liquidity,
    url: `https://polymarket.com/event/${match.slug}`,
  };
}
