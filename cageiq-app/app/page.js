'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

const CAGEIQ_HTML = `
<header>
  <div class="logo" onclick="switchTab('home',document.querySelectorAll('.tab')[0])">
    <div class="logo-icon">
      <svg viewBox="0 0 24 24"><path d="M12 2L3 7v10l9 5 9-5V7L12 2zm0 2.5L19 8.5v7L12 19.5 5 15.5v-7L12 4.5z"/></svg>
    </div>
    <div class="logo-text">CAGE<span>IQ</span></div>
  </div>
  <div class="header-right">
    <div class="live-badge"><div class="live-dot"></div>LIVE</div>
    <button class="toggle-btn" onclick="toggleTheme()" id="themeBtn">☀ Light</button>
  </div>
</header>

<nav>
  <div class="tab active" onclick="switchTab('home',this)">Home</div>
  <div class="tab" onclick="switchTab('events',this)">Events</div>
  <div class="tab" onclick="switchTab('news',this)">News</div>
  <div class="tab" onclick="switchTab('champions',this)">Champions</div>
  <div class="tab" onclick="switchTab('rankings',this)">Rankings</div>
  <div class="tab" onclick="switchTab('matchup',this)">Matchup</div>
  <div class="tab" onclick="switchTab('fighter',this)">Fighter Search</div>
</nav>

<main>

<div class="tab-content active" id="tab-home">
  <div id="ticker-container"></div>
  <div id="hero-container"></div>
  <div class="dash-stats" id="dash-stats"></div>

  <div class="section-label" style="margin-top:8px">Pound-for-Pound Top 10</div>
  <div class="p4p-grid" id="p4p-grid"></div>

  <div class="section-label" style="margin-top:24px">Quick Access</div>
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px;margin-bottom:24px">
    <div class="card jump-card" style="animation-delay:0ms" onclick="switchTab('events',document.querySelectorAll('.tab')[1])">
      <div class="jump-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg></div>
      <div class="display jump-title">Events</div>
      <div class="jump-sub">Upcoming + results</div>
    </div>
    <div class="card jump-card" style="animation-delay:60ms" onclick="switchTab('news',document.querySelectorAll('.tab')[2])">
      <div class="jump-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="3" y="4" width="18" height="16" rx="1"/><path d="M7 9h10M7 13h10M7 17h6"/></svg></div>
      <div class="display jump-title">News</div>
      <div class="jump-sub">Latest updates</div>
    </div>
    <div class="card jump-card" style="animation-delay:120ms" onclick="switchTab('champions',document.querySelectorAll('.tab')[3])">
      <div class="jump-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0V4z"/><path d="M7 7H4v2a3 3 0 003 3M17 7h3v2a3 3 0 01-3 3"/></svg></div>
      <div class="display jump-title">Champions</div>
      <div class="jump-sub">All belt holders</div>
    </div>
    <div class="card jump-card" style="animation-delay:180ms" onclick="switchTab('rankings',document.querySelectorAll('.tab')[4])">
      <div class="jump-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 6h12M4 12h8M4 18h4"/><path d="M18 4l3 3-3 3M18 16l3 3-3 3"/></svg></div>
      <div class="display jump-title">Rankings</div>
      <div class="jump-sub">All divisions</div>
    </div>
    <div class="card jump-card" style="animation-delay:240ms" onclick="switchTab('matchup',document.querySelectorAll('.tab')[5])">
      <div class="jump-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 5l5-2-2 5M10 19l-5 2 2-5M19 3L5 17M5 7l4 4M19 17l-4-4"/></svg></div>
      <div class="display jump-title">Matchup</div>
      <div class="jump-sub">Edge analyzer</div>
    </div>
    <div class="card jump-card" style="animation-delay:300ms" onclick="switchTab('fighter',document.querySelectorAll('.tab')[6])">
      <div class="jump-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="6"/><path d="M21 21l-5-5"/></svg></div>
      <div class="display jump-title">Fighters</div>
      <div class="jump-sub">220+ tracked</div>
    </div>
  </div>
</div>

<div class="tab-content" id="tab-events">
  <div class="section-label">Upcoming Events</div>
  <div id="events-container"></div>
  <div class="section-label" style="margin-top:24px">Recent Results</div>
  <div id="results-container"></div>
</div>

<div class="tab-content" id="tab-news">
  <div class="section-label">Latest News</div>
  <div id="news-container"></div>
</div>

<div class="tab-content" id="tab-champions">
  <div class="section-label">Reigning Champions</div>
  <div class="champs-grid" id="champs-grid"></div>
  <div class="section-label" style="margin-top:24px">Fighters by Country</div>
  <div id="country-board"></div>
</div>

<div class="tab-content" id="tab-rankings">
  <div class="section-label">Browse by Division</div>
  <div class="div-tabs" id="div-tabs"></div>
  <div id="rankings-container"></div>
</div>

<div class="tab-content" id="tab-matchup">
  <div class="card">
    <div class="section-label" style="margin-bottom:14px">Custom Analyzer</div>
    <div style="font-size:13px;color:var(--text2);margin-bottom:14px;line-height:1.6">Pick any two fighters to see live Polymarket odds, edge analysis, and a stat-by-stat breakdown.</div>
    <div class="matchup-grid">
      <div class="input-group">
        <label>Fighter A</label>
        <input type="text" id="f1" placeholder="Type a name..." autocomplete="off" oninput="showAutocomplete('f1',this.value)" onfocus="showAutocomplete('f1',this.value)" />
        <div class="autocomplete" id="ac-f1"></div>
      </div>
      <div class="vs-divider">VS</div>
      <div class="input-group">
        <label>Fighter B</label>
        <input type="text" id="f2" placeholder="Type a name..." autocomplete="off" oninput="showAutocomplete('f2',this.value)" onfocus="showAutocomplete('f2',this.value)" />
        <div class="autocomplete" id="ac-f2"></div>
      </div>
    </div>
    <button class="analyze-btn" onclick="analyzeMatchup()">ANALYZE MATCHUP →</button>
  </div>
  <div id="matchup-result"></div>
</div>

<div class="tab-content" id="tab-fighter">
  <div class="section-label">Fighter Intelligence</div>
  <div class="search-row">
    <div class="input-group">
      <label>Search 220+ fighters</label>
      <input type="text" id="fighter-search" placeholder="Type to search..." autocomplete="off" oninput="showAutocomplete('fighter-search',this.value)" onfocus="showAutocomplete('fighter-search',this.value)" onkeydown="if(event.key==='Enter')searchFighter()" />
      <div class="autocomplete" id="ac-fighter-search"></div>
    </div>
    <button class="search-btn" onclick="searchFighter()">Search →</button>
  </div>
  <div id="fighter-result">
    <div class="empty-state">
      <div class="empty-icon"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" style="width:48px;height:48px"><circle cx="24" cy="14" r="6"/><path d="M12 42v-6a12 12 0 0124 0v6"/></svg></div>
      <div class="empty-text">Type any UFC fighter to see full stats,<br>recent fights, news, and style breakdown.</div>
    </div>
  </div>
</div>

</main>

`;

export default function Home() {
  const containerRef = useRef(null);
  const initRef = useRef(false);

  useEffect(() => {
    if (initRef.current) return;
    initRef.current = true;
    // The /cageiq.js script auto-initializes once DOM is in place.
  }, []);

  return (
    <>
      <div ref={containerRef} dangerouslySetInnerHTML={{ __html: CAGEIQ_HTML }} />
      <Script src="/cageiq.js" strategy="afterInteractive" />
    </>
  );
}
