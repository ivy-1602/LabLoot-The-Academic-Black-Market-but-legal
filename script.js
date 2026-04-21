/* ══════════════════════════════════════════════════
   LABLOOT — MOBILE-FIRST STYLESHEET
   Newspaper/editorial aesthetic preserved
   Base styles: mobile (320px+)
   md: 640px+ | lg: 1000px+ | xl: 1280px+
══════════════════════════════════════════════════ */

:root {
  --ink:        #0a0a0a;
  --paper:      #f5f0e8;
  --paper2:     #ede8d8;
  --paper3:     #e4dece;
  --red:        #c0392b;
  --red2:       #e74c3c;
  --gold:       #c9973a;
  --gray:       #9b9690;
  --lightgray:  #d4cfc5;
  --green:      #1a6b3c;
  --blue:       #1a3a7a;
}

/* ── RESET & BASE ── */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

html {
  scroll-behavior: smooth;
  font-size: 15px; /* mobile base */
  -webkit-text-size-adjust: 100%;
}

@media (min-width: 640px)  { html { font-size: 16px; } }
@media (min-width: 1000px) { html { font-size: 17px; } }

body {
  font-family: 'Courier Prime', monospace;
  background: var(--paper);
  color: var(--ink);
  overflow-x: hidden;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

/* paper grain overlay */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 9999;
  opacity: .3;
}

::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: var(--paper2); }
::-webkit-scrollbar-thumb { background: var(--red); }

/* ────────────────────────────────────────────
   NAVBAR — mobile first
──────────────────────────────────────────── */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  background: var(--ink);
  border-bottom: 3px solid var(--red);
  height: 56px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .5rem;
}

@media (min-width: 1000px) {
  .navbar { height: 64px; padding: 0 2rem; }
}

.nav-logo {
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: 1.4rem;
  color: var(--paper);
  letter-spacing: -1px;
  cursor: pointer;
  line-height: 1;
  flex-shrink: 0;
}
.nav-logo span { color: var(--red); }
.nav-logo small {
  display: block;
  font-family: 'Oswald', sans-serif;
  font-size: .48rem;
  letter-spacing: 2.5px;
  color: #555;
  font-weight: 400;
  text-transform: uppercase;
  margin-top: 2px;
}

@media (min-width: 1000px) {
  .nav-logo { font-size: 1.7rem; }
  .nav-logo small { font-size: .55rem; letter-spacing: 3px; }
}

/* nav links — hidden on mobile */
.nav-links {
  display: none;
  list-style: none;
}

@media (min-width: 1000px) {
  .nav-links { display: flex; }
  .nav-links li a {
    display: block;
    padding: 0 1.2rem;
    height: 64px;
    line-height: 64px;
    font-family: 'Oswald', sans-serif;
    font-size: .82rem;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--lightgray);
    text-decoration: none;
    transition: all .18s;
    border-right: 1px solid #1a1a1a;
  }
  .nav-links li a:hover { color: #fff; background: var(--red); }
}

/* search — always visible, second row on mobile */
.nav-search-wrap {
  display: flex;
  position: relative;
  align-items: center;
  /* on mobile: full-width second row below navbar */
  position: fixed;
  top: 56px;
  left: 0; right: 0;
  z-index: 999;
  margin: 0;
  flex: unset;
  border-bottom: 2px solid #1a1a1a;
}

@media (min-width: 768px) {
  .nav-search-wrap {
    /* back to inline in navbar */
    position: static;
    flex: 0 1 200px;
    border-bottom: none;
  }
}

@media (min-width: 1000px) {
  .nav-search-wrap {
    flex: 0 1 280px;
    margin: 0 .75rem;
  }
}

.nav-search-input {
  width: 100%;
  background: #111;
  border: none; /* border handled by wrap on mobile */
  border-left: 3px solid var(--red);
  color: var(--paper);
  padding: .55rem 2.2rem .55rem 2rem;
  font-family: 'Courier Prime', monospace;
  font-size: .82rem;
  outline: none;
  transition: border-color .18s, background .18s;
  letter-spacing: .5px;
}

@media (min-width: 768px) {
  .nav-search-input {
    border: 1px solid #2a2a2a;
    border-left: 3px solid var(--red);
    padding: .45rem 2.2rem .45rem 2rem;
  }
}
.nav-search-input::placeholder { color: #444; }
.nav-search-input:focus { border-color: var(--red); background: #161616; }
.nav-search-icon {
  position: absolute;
  left: .6rem;
  color: #444;
  font-size: 1.1rem;
  pointer-events: none;
  line-height: 1;
}
.nav-search-clear {
  position: absolute;
  right: .5rem;
  background: none;
  border: none;
  color: #444;
  cursor: pointer;
  font-size: .75rem;
  line-height: 1;
  padding: 2px 4px;
  display: none;
  transition: color .18s;
}
.nav-search-clear:hover { color: var(--red); }
.nav-search-clear.visible { display: block; }

/* nav right */
.nav-right {
  display: flex;
  align-items: center;
  gap: .4rem;
  flex-shrink: 0;
}

.nav-login-btn {
  display: none; /* hidden on mobile */
  background: transparent;
  color: var(--lightgray);
  border: 1px solid #333;
  padding: .45rem .85rem;
  font-family: 'Oswald', sans-serif;
  font-size: .75rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all .18s;
  white-space: nowrap;
}
.nav-login-btn:hover { border-color: var(--red); color: var(--red); }

@media (min-width: 640px) {
  .nav-login-btn { display: block; }
}

.nav-cart {
  display: flex;
  align-items: center;
  gap: .4rem;
  background: var(--red);
  color: #fff;
  border: none;
  padding: .45rem .75rem;
  font-family: 'Oswald', sans-serif;
  font-size: .75rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background .18s;
  white-space: nowrap;
}
.nav-cart:hover { background: var(--red2); }

.cart-count {
  background: var(--gold);
  color: var(--ink);
  border-radius: 50%;
  width: 18px; height: 18px;
  font-size: .6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

/* ────────────────────────────────────────────
   TICKER
──────────────────────────────────────────── */
.ticker {
  background: var(--red);
  color: #fff;
  padding: .4rem 0;
  margin-top: calc(56px + 38px); /* navbar + search bar on mobile */
  overflow: hidden;
  white-space: nowrap;
  border-bottom: 2px solid var(--ink);
  position: relative;
}

@media (min-width: 768px) {
  .ticker { margin-top: 56px; } /* search is inline in navbar */
}

@media (min-width: 1000px) {
  .ticker { margin-top: 64px; padding: .45rem 0; }
}

.ticker-label {
  position: absolute;
  left: 0; top: 0; bottom: 0;
  background: var(--ink);
  color: var(--gold);
  padding: 0 .8rem;
  font-family: 'Oswald', sans-serif;
  font-size: .7rem;
  font-weight: 700;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  z-index: 2;
}

@media (min-width: 640px) {
  .ticker-label { padding: 0 1.1rem; font-size: .78rem; letter-spacing: 3px; }
}

.ticker-track {
  display: inline-block;
  animation: ticker 38s linear infinite;
  font-family: 'Oswald', sans-serif;
  font-size: .72rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding-left: 110px;
}

@media (min-width: 640px) {
  .ticker-track { font-size: .78rem; padding-left: 140px; letter-spacing: 2px; }
}

@keyframes ticker {
  from { transform: translateX(100vw); }
  to   { transform: translateX(-100%); }
}

/* ────────────────────────────────────────────
   HERO — mobile first
──────────────────────────────────────────── */
.hero {
  background: var(--paper);
  padding: 1.5rem 1rem 0;
  border-bottom: 4px double var(--ink);
}

@media (min-width: 640px) { .hero { padding: 2rem 1.5rem 0; } }
@media (min-width: 1000px) { .hero { padding: 2.5rem 2rem 0; } }

/* masthead */
.hero-masthead {
  text-align: center;
  border-bottom: 3px solid var(--ink);
  padding-bottom: .5rem;
  margin-bottom: .5rem;
}

.hero-dateline {
  font-family: 'Courier Prime', monospace;
  font-size: .65rem;
  color: var(--gray);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  gap: .2rem;
  align-items: center;
  margin-bottom: .4rem;
}

@media (min-width: 640px) {
  .hero-dateline {
    flex-direction: row;
    justify-content: space-between;
    font-size: .75rem;
    letter-spacing: 2px;
  }
}

@media (min-width: 1000px) {
  .hero-dateline { font-size: .8rem; }
}

.hero-name {
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: clamp(2.6rem, 14vw, 6.5rem);
  line-height: .88;
  letter-spacing: -2px;
  color: var(--ink);
  text-transform: uppercase;
}
.hero-name .red    { color: var(--red); }
.hero-name .italic { font-style: italic; }

.hero-tagline-strip {
  font-family: 'Oswald', sans-serif;
  font-size: clamp(.65rem, 2vw, .92rem);
  font-weight: 300;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gray);
  margin-top: .4rem;
}

/* hero columns */
.hero-cols {
  display: grid;
  grid-template-columns: 1fr;
  border-top: 3px solid var(--ink);
}

@media (min-width: 1000px) {
  .hero-cols { grid-template-columns: 1fr 2.2fr 1fr; }
}

.hero-col {
  padding: 1.25rem 1rem;
  border-bottom: 1px solid var(--ink);
}

@media (min-width: 640px) { .hero-col { padding: 1.5rem; } }

@media (min-width: 1000px) {
  .hero-col { padding: 1.75rem; border-bottom: none; border-right: 1px solid var(--ink); }
  .hero-col:last-child { border-right: none; }
}

.col-hed {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: .9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-bottom: 2px solid var(--ink);
  padding-bottom: .4rem;
  margin-bottom: .65rem;
}

@media (min-width: 1000px) { .col-hed { font-size: 1rem; } }

.col-body {
  font-family: 'Courier Prime', monospace;
  font-size: .88rem;
  line-height: 1.8;
  color: var(--gray);
  text-align: justify;
}
.col-body strong { color: var(--ink); }

/* hero center */
.hero-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.75rem 1.25rem;
  border-bottom: 1px solid var(--ink);
  position: relative;
}

@media (min-width: 640px) { .hero-center { padding: 2rem; } }

@media (min-width: 1000px) {
  .hero-center { padding: 2.25rem; border-bottom: none; border-right: 1px solid var(--ink); }
}

.hero-stamp {
  position: absolute;
  top: .75rem;
  right: 1rem;
  border: 3px solid var(--red);
  color: var(--red);
  padding: .4rem .5rem;
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  font-size: .65rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  transform: rotate(12deg);
  opacity: .85;
}

@media (min-width: 640px) {
  .hero-stamp { font-size: .76rem; padding: .5rem .7rem; border-width: 4px; }
}

.hero-headline {
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: clamp(1.5rem, 6vw, 3.1rem);
  line-height: 1.05;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: -1px;
  margin-bottom: .65rem;
}
.hero-headline .ul {
  text-decoration: underline;
  text-decoration-color: var(--red);
  text-underline-offset: 5px;
}

.hero-sub {
  font-family: 'Courier Prime', monospace;
  font-size: .9rem;
  color: var(--gray);
  text-align: center;
  line-height: 1.7;
  max-width: 420px;
  margin-bottom: 1.25rem;
}

.hero-cta {
  display: flex;
  gap: .6rem;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.btn-primary {
  background: var(--ink);
  color: var(--paper);
  border: 2px solid var(--ink);
  padding: .75rem 1.5rem;
  font-family: 'Oswald', sans-serif;
  font-size: .8rem;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all .2s;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  flex: 1;
  min-width: 130px;
}
.btn-primary:hover { background: var(--red); border-color: var(--red); }

.btn-outline {
  background: transparent;
  color: var(--ink);
  border: 2px solid var(--ink);
  padding: .75rem 1.5rem;
  font-family: 'Oswald', sans-serif;
  font-size: .8rem;
  font-weight: 600;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all .2s;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  flex: 1;
  min-width: 130px;
}
.btn-outline:hover { background: var(--ink); color: var(--paper); }

@media (min-width: 640px) {
  .btn-primary, .btn-outline {
    flex: 0 1 auto;
    padding: .8rem 1.9rem;
    font-size: .84rem;
    letter-spacing: 3px;
  }
}

.hero-fine {
  font-family: 'Courier Prime', monospace;
  font-size: .68rem;
  color: var(--gray);
  margin-top: .85rem;
  font-style: italic;
  text-align: center;
  line-height: 1.5;
}

/* stats strip */
.hero-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: var(--ink);
}

@media (min-width: 640px) {
  .hero-stats { grid-template-columns: repeat(4, 1fr); }
}

.stat {
  padding: .85rem .5rem;
  text-align: center;
  border-right: 1px solid #1e1e1e;
  border-bottom: 1px solid #1e1e1e;
}

@media (min-width: 640px) {
  .stat { padding: 1rem; border-bottom: none; }
  .stat:last-child { border-right: none; }
}

.stat-num {
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: 1.6rem;
  color: var(--red);
  display: block;
}

@media (min-width: 640px) { .stat-num { font-size: 2rem; } }

.stat-lbl {
  font-family: 'Oswald', sans-serif;
  font-size: .68rem;
  font-weight: 300;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--lightgray);
  margin-top: .2rem;
  display: block;
}

/* ────────────────────────────────────────────
   BRANCHES
──────────────────────────────────────────── */
.branches-bg {
  background: var(--ink);
  border-top: 4px solid var(--red);
  border-bottom: 4px solid var(--red);
  padding: 2.5rem 1rem;
}

@media (min-width: 640px) { .branches-bg { padding: 3rem 1.5rem; } }
@media (min-width: 1000px) { .branches-bg { padding: 4rem 2rem; } }

.branches-inner { max-width: 1400px; margin: 0 auto; }

.branches-head {
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #222;
  padding-bottom: .75rem;
}

.branches-title {
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: clamp(1.5rem, 5vw, 2.2rem);
  text-transform: uppercase;
  color: var(--paper);
  letter-spacing: -1px;
  display: block;
}

.branches-sub {
  font-family: 'Courier Prime', monospace;
  font-size: .82rem;
  color: var(--gray);
  letter-spacing: 1px;
  display: block;
  margin-top: .25rem;
}

.branch-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3px;
  background: #111;
}

@media (min-width: 640px) {
  .branch-grid { grid-template-columns: 1fr 1fr; }
}

.branch-card {
  background: var(--paper2);
  padding: 1.75rem 1.5rem;
  cursor: pointer;
  transition: background .25s, transform .2s, box-shadow .25s;
  border: 3px solid transparent;
  position: relative;
  overflow: hidden;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  -webkit-tap-highlight-color: transparent;
}

@media (min-width: 640px) { .branch-card { padding: 2rem; min-height: 230px; } }
@media (min-width: 1000px) { .branch-card { padding: 2.75rem 2.5rem; min-height: 260px; } }

.branch-card::after {
  content: attr(data-letter);
  position: absolute;
  right: -0.1em;
  bottom: -0.25em;
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: 9rem;
  line-height: 1;
  color: rgba(0,0,0,.04);
  pointer-events: none;
  transition: color .3s, transform .3s;
  user-select: none;
}

@media (min-width: 1000px) { .branch-card::after { font-size: 14rem; } }

.branch-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 7px; height: 100%;
  background: var(--red);
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform .3s cubic-bezier(.4,0,.2,1);
}

.branch-card:hover::before,
.branch-card.active::before { transform: scaleY(1); }

.branch-card:hover,
.branch-card.active {
  background: var(--paper);
  border-color: var(--red);
  box-shadow: 0 12px 40px rgba(192,57,43,.2);
}

@media (min-width: 1000px) {
  .branch-card:hover,
  .branch-card.active {
    transform: translateY(-4px);
    box-shadow: 0 20px 60px rgba(192,57,43,.25);
  }
}

.branch-card:hover::after,
.branch-card.active::after {
  color: rgba(192,57,43,.07);
}

.branch-code {
  font-family: 'Oswald', sans-serif;
  font-size: .75rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--red);
  margin-bottom: .45rem;
  display: flex;
  align-items: center;
  gap: .5rem;
}

.branch-code-dot {
  width: 7px; height: 7px;
  background: var(--red);
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}

.branch-name {
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: clamp(1.4rem, 4vw, 2rem);
  line-height: 1.05;
  margin-bottom: .65rem;
  color: var(--ink);
  letter-spacing: -1px;
}

.branch-desc {
  font-family: 'Courier Prime', monospace;
  font-size: .88rem;
  color: var(--gray);
  line-height: 1.65;
  margin-bottom: 1rem;
  max-width: 420px;
}

.branch-card-bottom {
  display: flex;
  align-items: center;
  gap: .5rem;
  flex-wrap: wrap;
}

.branch-pill {
  font-family: 'Oswald', sans-serif;
  font-size: .68rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--ink);
  background: var(--paper3);
  border: 1px solid var(--lightgray);
  padding: .25rem .6rem;
  transition: all .2s;
}

.branch-card:hover .branch-pill,
.branch-card.active .branch-pill {
  border-color: var(--red);
  color: var(--red);
  background: transparent;
}

.branch-cta {
  margin-left: auto;
  font-family: 'Oswald', sans-serif;
  font-size: .76rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--red);
  display: flex;
  align-items: center;
  gap: .4rem;
  transition: gap .2s;
}
.branch-card:hover .branch-cta { gap: .75rem; }
.branch-cta-arrow { font-size: 1.1rem; transition: transform .2s; }
.branch-card:hover .branch-cta-arrow { transform: translateX(3px); }

/* ────────────────────────────────────────────
   SHOP
──────────────────────────────────────────── */
.shop-bg {
  background: var(--paper2);
  border-top: 4px double var(--ink);
  border-bottom: 4px double var(--ink);
  padding: 2.5rem 1rem;
}

@media (min-width: 640px) { .shop-bg { padding: 3rem 1.5rem; } }
@media (min-width: 1000px) { .shop-bg { padding: 4rem 2rem; } }

.shop-inner { max-width: 1400px; margin: 0 auto; }

.section-head {
  display: flex;
  align-items: baseline;
  gap: .75rem;
  margin-bottom: 1.5rem;
  border-bottom: 3px solid var(--ink);
  padding-bottom: .65rem;
}

@media (min-width: 640px) { .section-head { gap: 1.2rem; margin-bottom: 2rem; } }

.section-num {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--lightgray);
  line-height: 1;
  flex-shrink: 0;
}

@media (min-width: 640px) { .section-num { font-size: 3.5rem; } }

.section-title {
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: -1px;
  line-height: 1;
}

@media (min-width: 640px) { .section-title { font-size: 2rem; } }

.section-sub {
  font-family: 'Courier Prime', monospace;
  font-size: .82rem;
  color: var(--gray);
  letter-spacing: 1px;
  text-transform: uppercase;
}

/* Context banner */
.shop-context {
  background: var(--ink);
  padding: .75rem 1rem;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: .5rem;
  flex-wrap: wrap;
  border-left: 5px solid var(--red);
}

@media (min-width: 640px) { .shop-context { padding: .9rem 1.25rem; gap: .75rem; } }

.ctx-branch {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: .95rem;
  color: var(--paper);
}

@media (min-width: 640px) { .ctx-branch { font-size: 1.05rem; } }

.ctx-sep {
  font-family: 'Oswald', sans-serif;
  font-size: .9rem;
  color: #333;
}

.ctx-sem {
  font-family: 'Oswald', sans-serif;
  font-size: .82rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gold);
}

.ctx-cat {
  font-family: 'Oswald', sans-serif;
  font-size: .76rem;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--lightgray);
}

.ctx-count {
  margin-left: auto;
  font-family: 'Courier Prime', monospace;
  font-size: .76rem;
  color: var(--gray);
  border: 1px solid #222;
  padding: .15rem .5rem;
}

.shop-context.search-active { border-left-color: var(--gold); }

.ctx-search-query {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 700;
  font-size: .95rem;
  color: var(--gold);
}

@media (min-width: 640px) { .ctx-search-query { font-size: 1.05rem; } }

/* Sem tabs */
.sem-tabs {
  display: flex;
  margin-bottom: 1rem;
  overflow-x: auto;
  overflow-y: visible;
  -webkit-overflow-scrolling: touch;
  border: 2px solid var(--ink);
  width: 100%;
  scrollbar-width: none;
}
.sem-tabs::-webkit-scrollbar { display: none; }

@media (min-width: 640px) { .sem-tabs { width: fit-content; overflow: visible; } }

.sem-tab {
  background: transparent;
  border: none;
  border-right: 1px solid var(--ink);
  padding: .65rem 1.1rem;
  font-family: 'Oswald', sans-serif;
  font-size: .78rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  cursor: pointer;
  color: var(--gray);
  transition: all .18s;
  white-space: nowrap;
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
  min-height: 44px;
}
.sem-tab:last-child { border-right: none; }
.sem-tab:hover { background: rgba(0,0,0,.06); color: var(--ink); }
.sem-tab.active { background: var(--ink); color: var(--paper); }

@media (min-width: 640px) {
  .sem-tab { padding: .65rem 1.5rem; font-size: .84rem; letter-spacing: 2px; }
}

/* Cat filter */
.cat-filter {
  display: flex;
  margin-bottom: 1.75rem;
  border: 2px solid var(--ink);
  width: 100%;
  overflow-x: auto;
  overflow-y: visible;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}
.cat-filter::-webkit-scrollbar { display: none; }

@media (min-width: 640px) { .cat-filter { width: fit-content; overflow: visible; } }

.cat-btn {
  background: transparent;
  border: none;
  border-right: 1px solid var(--ink);
  padding: .65rem 1rem;
  font-family: 'Oswald', sans-serif;
  font-size: .76rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  color: var(--gray);
  transition: all .18s;
  white-space: nowrap;
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
  min-height: 44px;
}
.cat-btn:last-child { border-right: none; }
.cat-btn:hover { background: rgba(0,0,0,.06); color: var(--ink); }
.cat-btn.active { background: var(--ink); color: var(--paper); }

@media (min-width: 640px) {
  .cat-btn { padding: .65rem 1.5rem; font-size: .84rem; letter-spacing: 2px; }
}

/* Products grid */
.products-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2px;
  background: var(--lightgray);
}

@media (min-width: 540px) {
  .products-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1100px) {
  .products-grid { grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); }
}

/* ────────────────────────────────────────────
   PRODUCT CARD
──────────────────────────────────────────── */
.product-card {
  background: var(--paper);
  cursor: pointer;
  transition: all .25s;
  position: relative;
  display: flex;
  flex-direction: column;
  border: 2px solid transparent;
  animation: fadeUp .4s ease both;
  -webkit-tap-highlight-color: transparent;
}

.product-card:hover {
  z-index: 2;
  box-shadow: 0 10px 35px rgba(0,0,0,.14);
}

@media (min-width: 640px) {
  .product-card:hover {
    box-shadow: 0 12px 45px rgba(0,0,0,.16);
    transform: translateY(-4px);
  }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* card header */
.card-tab {
  padding: .6rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--ink);
}
.card-tab.notes-tab  { background: #0d1f5c; }
.card-tab.lab-tab    { background: #0a2a18; }
.card-tab.combo-tab  { background: #1a0f00; border-bottom: 2px solid var(--gold); }

@media (min-width: 640px) { .card-tab { padding: .7rem 1.2rem; } }

.tab-subject {
  font-family: 'Oswald', sans-serif;
  font-size: .7rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--lightgray);
}
.tab-subject.notes-col { color: #a8b8f0; }
.tab-subject.lab-col   { color: #7fcca0; }
.tab-subject.combo-col { color: var(--gold); }

@media (min-width: 640px) {
  .tab-subject { font-size: .78rem; letter-spacing: 2px; }
}

.tab-badge {
  font-family: 'Oswald', sans-serif;
  font-size: .6rem;
  padding: .18rem .45rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
}
.badge-hot     { background: var(--red);   color: #fff; }
.badge-new     { background: #1a6b3c;      color: #fff; }
.badge-trending{ background: #1a3a7a;      color: #fff; }
.badge-combo   { background: var(--gold);  color: var(--ink); }

.card-deco {
  height: 3px;
  background: repeating-linear-gradient(90deg, var(--paper2) 0, var(--paper2) 8px, var(--lightgray) 8px, var(--lightgray) 9px);
}
.card-deco.combo-deco {
  background: repeating-linear-gradient(90deg, var(--paper2) 0, var(--paper2) 8px, var(--gold) 8px, var(--gold) 9px);
}

.card-body {
  padding: 1.1rem 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

@media (min-width: 640px) { .card-body { padding: 1.4rem; } }

.card-code {
  font-family: 'Courier Prime', monospace;
  font-size: .72rem;
  color: var(--gray);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: .35rem;
}
.card-name {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 1.05rem;
  line-height: 1.25;
  margin-bottom: .45rem;
  color: var(--ink);
}

@media (min-width: 640px) { .card-name { font-size: 1.2rem; } }

.card-tagline {
  font-family: 'Courier Prime', monospace;
  font-size: .84rem;
  color: var(--gray);
  font-style: italic;
  margin-bottom: .85rem;
  line-height: 1.6;
  flex: 1;
}
.card-includes-box {
  background: var(--paper2);
  border: 1px solid var(--lightgray);
  padding: .65rem .75rem;
  margin-bottom: .85rem;
}
.includes-title {
  font-family: 'Oswald', sans-serif;
  font-size: .66rem;
  font-weight: 600;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--gray);
  margin-bottom: .4rem;
}
.includes-tags {
  display: flex;
  flex-wrap: wrap;
  gap: .25rem;
}
.itag {
  font-family: 'Courier Prime', monospace;
  font-size: .7rem;
  background: var(--paper);
  border: 1px solid var(--lightgray);
  padding: .12rem .4rem;
  color: var(--gray);
  display: flex;
  align-items: center;
  gap: .2rem;
}
.itag::before { content: '✓'; color: var(--red); font-size: .55rem; }

.card-footer {
  padding: .85rem 1rem;
  border-top: 1px solid var(--lightgray);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .5rem;
}

@media (min-width: 640px) { .card-footer { padding: 1rem 1.4rem; } }

.card-price .price-main {
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: 1.5rem;
  color: var(--ink);
  line-height: 1;
}

@media (min-width: 640px) { .card-price .price-main { font-size: 1.7rem; } }

.card-price .price-mrp {
  font-family: 'Courier Prime', monospace;
  font-size: .72rem;
  color: var(--gray);
  text-decoration: line-through;
}
.card-price .price-save {
  font-family: 'Courier Prime', monospace;
  font-size: .7rem;
  color: var(--green);
  font-weight: 700;
}

.btn-add {
  background: var(--ink);
  color: var(--paper);
  border: none;
  padding: .6rem .85rem;
  font-family: 'Oswald', sans-serif;
  font-size: .72rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background .18s;
  white-space: nowrap;
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
  min-height: 44px; /* touch target */
}
.btn-add:hover  { background: var(--red); }
.btn-add.in-cart { background: var(--green); }

@media (min-width: 640px) {
  .btn-add { padding: .65rem 1.1rem; font-size: .78rem; letter-spacing: 2px; }
}

/* card type colors */
.product-card.is-notes .card-code  { color: #1a3a7a; }
.product-card.is-notes .btn-add    { background: #1a3a7a; }
.product-card.is-notes .btn-add:hover { background: var(--red); }
.product-card.is-notes:hover { border-color: #1a3a7a; }
.product-card.is-lab .card-code    { color: #0a5c28; }
.product-card.is-lab .btn-add      { background: #0a5c28; }
.product-card.is-lab .btn-add:hover { background: var(--red); }
.product-card.is-lab:hover { border-color: #0a5c28; }
.product-card.is-combo .card-code  { color: var(--gold); }
.product-card.is-combo .btn-add    { background: var(--gold); color: var(--ink); }
.product-card.is-combo .btn-add:hover { background: var(--red); color: #fff; }
.product-card.is-combo:hover { border-color: var(--gold); }
.product-card.is-combo .price-main { color: var(--red); }

.empty-state {
  grid-column: 1 / -1;
  text-align: center;
  padding: 3.5rem 1.5rem;
  background: var(--paper);
  border: 2px dashed var(--lightgray);
}
.empty-state p {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 1.1rem;
  color: var(--gray);
}

/* search highlight */
.search-highlight {
  background: rgba(201,151,58,.22);
  color: var(--ink);
  padding: 0 2px;
}
.search-mode .sem-tabs,
.search-mode .cat-filter { opacity: .35; pointer-events: none; }

/* ────────────────────────────────────────────
   REVIEWS
──────────────────────────────────────────── */
.reviews-bg {
  background: var(--ink);
  border-top: 4px double var(--red);
  border-bottom: 4px double var(--red);
  padding: 2.5rem 1rem;
}

@media (min-width: 640px) { .reviews-bg { padding: 3rem 1.5rem; } }
@media (min-width: 1000px) { .reviews-bg { padding: 4rem 2rem; } }

.reviews-inner { max-width: 1400px; margin: 0 auto; }

.reviews-head {
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #222;
  padding-bottom: .65rem;
}

.reviews-title {
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: clamp(1.4rem, 5vw, 2.2rem);
  text-transform: uppercase;
  color: var(--paper);
  letter-spacing: -1px;
  display: block;
}

.reviews-sub {
  font-family: 'Courier Prime', monospace;
  font-size: .82rem;
  color: var(--gray);
  margin-top: .2rem;
  display: block;
}

.reviews-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2px;
  background: #1a1a1a;
}

@media (min-width: 768px) {
  .reviews-grid { grid-template-columns: repeat(3, 1fr); }
}

.review-card {
  background: var(--ink);
  padding: 1.5rem 1.25rem;
  transition: background .2s;
}
.review-card:hover { background: #0e0e0e; }

@media (min-width: 640px) { .review-card { padding: 2.25rem; } }

.review-q {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: var(--red);
  line-height: .5;
  margin-bottom: .65rem;
  font-style: italic;
}

.review-text {
  font-family: 'Courier Prime', monospace;
  font-size: .88rem;
  color: var(--lightgray);
  line-height: 1.8;
  font-style: italic;
  margin-bottom: .85rem;
}

.review-author {
  font-family: 'Oswald', sans-serif;
  font-size: .72rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gold);
}

.review-role {
  font-family: 'Courier Prime', monospace;
  font-size: .68rem;
  color: var(--gray);
  margin-top: .15rem;
}

/* ────────────────────────────────────────────
   PRODUCT MODAL
──────────────────────────────────────────── */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(10,10,10,.88);
  z-index: 2000;
  display: none;
  align-items: flex-start;
  justify-content: center;
  padding: 0;
  backdrop-filter: blur(3px);
  overflow-y: auto;
}
.modal-overlay.open { display: flex; }

@media (min-width: 640px) {
  .modal-overlay {
    align-items: center;
    padding: 1rem;
  }
}

.modal {
  background: var(--paper);
  width: 100%;
  max-width: 820px;
  min-height: 100%;
  border: none;
  position: relative;
  animation: modalIn .25s ease;
}

@media (min-width: 640px) {
  .modal {
    min-height: unset;
    max-height: 90vh;
    overflow-y: auto;
    border: 3px solid var(--ink);
  }
}

@keyframes modalIn {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

.modal-header {
  background: var(--ink);
  padding: 1rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 10;
}

.modal-header-title {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 1rem;
  color: var(--paper);
  text-transform: uppercase;
  line-height: 1.2;
  padding-right: .5rem;
}

@media (min-width: 640px) {
  .modal-header { padding: 1.25rem 1.6rem; }
  .modal-header-title { font-size: 1.15rem; }
}

.modal-close-btn {
  background: var(--red);
  border: none;
  color: #fff;
  width: 38px; height: 38px;
  min-width: 38px;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  transition: background .18s;
  -webkit-tap-highlight-color: transparent;
}
.modal-close-btn:hover { background: var(--red2); }

.modal-body {
  padding: 1.25rem 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .modal-body { padding: 2rem; grid-template-columns: 1.1fr 1fr; gap: 2.25rem; }
}

.modal-type-tag {
  font-family: 'Courier Prime', monospace;
  font-size: .76rem;
  color: var(--red);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: .35rem;
}
.modal-name {
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: 1.35rem;
  line-height: 1.1;
  margin-bottom: .45rem;
}

@media (min-width: 640px) { .modal-name { font-size: 1.65rem; } }

.modal-tagline {
  font-family: 'Courier Prime', monospace;
  font-size: .86rem;
  color: var(--gray);
  font-style: italic;
  margin-bottom: 1.1rem;
  line-height: 1.65;
}
.modal-includes-title {
  font-family: 'Oswald', sans-serif;
  font-size: .68rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  border-bottom: 2px solid var(--ink);
  padding-bottom: .35rem;
  margin-bottom: .65rem;
}
.modal-includes-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: .3rem;
}
.modal-includes-list li {
  font-family: 'Courier Prime', monospace;
  font-size: .83rem;
  color: var(--ink);
  display: flex;
  align-items: flex-start;
  gap: .45rem;
  padding: .35rem 0;
  border-bottom: 1px dashed var(--lightgray);
  line-height: 1.5;
}
.modal-includes-list li:last-child { border-bottom: none; }
.modal-includes-list li::before { content: '📄'; font-size: .7rem; flex-shrink: 0; margin-top: 2px; }

.modal-right { display: flex; flex-direction: column; gap: 1rem; }

.price-box {
  background: var(--ink);
  padding: 1.25rem;
  text-align: center;
}

@media (min-width: 640px) { .price-box { padding: 1.5rem; } }

.price-box-main {
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: 2.4rem;
  color: var(--red);
  display: block;
  line-height: 1;
}

@media (min-width: 640px) { .price-box-main { font-size: 2.8rem; } }

.price-box-mrp {
  font-family: 'Courier Prime', monospace;
  font-size: .8rem;
  color: var(--gray);
  text-decoration: line-through;
  display: block;
  margin-top: .25rem;
}
.price-box-save {
  font-family: 'Courier Prime', monospace;
  font-size: .74rem;
  color: #3fc87a;
  margin-top: .25rem;
  display: block;
  margin-bottom: 1.1rem;
}
.modal-btn-cart {
  background: var(--red);
  color: #fff;
  border: none;
  padding: 1rem;
  width: 100%;
  font-family: 'Oswald', sans-serif;
  font-size: .84rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background .18s;
  min-height: 48px;
}
.modal-btn-cart:hover { background: var(--red2); }

.modal-btn-preview {
  background: transparent;
  color: var(--lightgray);
  border: 1px solid #444;
  padding: .75rem;
  width: 100%;
  font-family: 'Oswald', sans-serif;
  font-size: .76rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: .45rem;
  transition: all .18s;
  min-height: 44px;
}
.modal-btn-preview:hover { border-color: var(--gold); color: var(--gold); }

.modal-note {
  font-family: 'Courier Prime', monospace;
  font-size: .65rem;
  color: var(--gray);
  text-align: center;
  line-height: 1.5;
  font-style: italic;
  margin-top: .45rem;
}
.exam-box {
  background: var(--paper2);
  border: 1px solid var(--lightgray);
  padding: .9rem;
}
.exam-box-title {
  font-family: 'Oswald', sans-serif;
  font-size: .66rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gray);
  margin-bottom: .6rem;
}
.exam-grid { display: grid; grid-template-columns: 1fr 1fr; gap: .5rem; }
.exam-item {
  text-align: center;
  background: var(--paper);
  border: 1px solid var(--lightgray);
  padding: .55rem .4rem;
}
.exam-item span {
  display: block;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--red);
  line-height: 1;
}
.exam-item small {
  font-family: 'Courier Prime', monospace;
  font-size: .62rem;
  color: var(--gray);
  letter-spacing: 1px;
  text-transform: uppercase;
}
.modal-disclaimer-box {
  background: var(--paper2);
  border: 1px dashed var(--lightgray);
  padding: .75rem;
  font-family: 'Courier Prime', monospace;
  font-size: .68rem;
  color: var(--gray);
  line-height: 1.65;
}

/* ────────────────────────────────────────────
   CART DRAWER
──────────────────────────────────────────── */
.cart-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.5);
  z-index: 2998;
  display: none;
  backdrop-filter: blur(2px);
}
.cart-overlay.open { display: block; }

.cart-drawer {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  background: var(--paper);
  z-index: 2999;
  border-left: none;
  transition: right .3s cubic-bezier(.4,0,.2,1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

@media (min-width: 480px) {
  .cart-drawer {
    width: 420px;
    right: -420px;
    border-left: 3px solid var(--ink);
  }
}

@media (min-width: 640px) {
  .cart-drawer { width: 440px; right: -440px; }
}

.cart-drawer.open { right: 0; }

.cart-head {
  background: var(--ink);
  padding: 1.1rem 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}
.cart-head-title {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--paper);
  text-transform: uppercase;
}

.cart-body { flex: 1; overflow-y: auto; padding: 1.25rem 1.4rem; -webkit-overflow-scrolling: touch; }

.cart-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  text-align: center;
  gap: .6rem;
}
.cart-empty-icon { font-size: 2.5rem; }
.cart-empty-text {
  font-family: 'Courier Prime', monospace;
  font-size: .85rem;
  color: var(--gray);
  font-style: italic;
  line-height: 1.65;
}

.cart-item {
  display: flex;
  align-items: flex-start;
  gap: .85rem;
  padding: .9rem 0;
  border-bottom: 1px solid var(--lightgray);
}
.cart-item-info { flex: 1; min-width: 0; }
.cart-item-name {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: .9rem;
  color: var(--ink);
  line-height: 1.3;
  margin-bottom: .2rem;
  word-break: break-word;
}
.cart-item-meta {
  font-family: 'Courier Prime', monospace;
  font-size: .72rem;
  color: var(--gray);
}
.cart-item-price {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 1rem;
  color: var(--red);
  flex-shrink: 0;
}
.cart-item-remove {
  background: none;
  border: none;
  color: var(--lightgray);
  cursor: pointer;
  font-size: 1rem;
  transition: color .18s;
  padding: 4px;
  min-width: 32px;
  min-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
}
.cart-item-remove:hover { color: var(--red); }

.cart-foot {
  padding: 1.25rem 1.4rem;
  border-top: 3px solid var(--ink);
  background: var(--paper2);
  flex-shrink: 0;
}
.cart-total-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: .9rem;
}
.cart-total-label {
  font-family: 'Oswald', sans-serif;
  font-size: .78rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.cart-total-price {
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: 1.75rem;
  color: var(--red);
}
.btn-checkout {
  background: var(--ink);
  color: var(--paper);
  border: none;
  padding: 1rem;
  width: 100%;
  font-family: 'Oswald', sans-serif;
  font-size: .84rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background .18s;
  margin-bottom: .55rem;
  min-height: 50px;
  -webkit-tap-highlight-color: transparent;
}
.btn-checkout:hover { background: var(--red); }
.cart-note {
  font-family: 'Courier Prime', monospace;
  font-size: .68rem;
  color: var(--gray);
  text-align: center;
  font-style: italic;
  line-height: 1.5;
}

/* ────────────────────────────────────────────
   LOGIN MODAL
──────────────────────────────────────────── */
.login-overlay {
  position: fixed;
  inset: 0;
  background: rgba(10,10,10,.93);
  z-index: 4000;
  display: none;
  align-items: flex-end;
  justify-content: center;
  padding: 0;
}
.login-overlay.open { display: flex; }

@media (min-width: 640px) {
  .login-overlay { align-items: center; padding: 1rem; }
}

.login-modal {
  background: var(--paper);
  width: 100%;
  max-width: 460px;
  border: none;
  border-top: 3px solid var(--ink);
  position: relative;
  animation: slideUp .3s cubic-bezier(.4,0,.2,1);
  max-height: 94vh;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

@keyframes slideUp {
  from { transform: translateY(40px); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
}

@media (min-width: 640px) {
  .login-modal { border: 3px solid var(--ink); animation: modalIn .25s ease; max-height: 90vh; }
}

.login-tabs-bar { display: flex; border-bottom: 3px solid var(--ink); }
.login-tab-btn {
  flex: 1;
  background: var(--paper2);
  border: none;
  padding: .85rem;
  font-family: 'Oswald', sans-serif;
  font-size: .76rem;
  font-weight: 600;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  cursor: pointer;
  color: var(--gray);
  transition: all .18s;
  border-right: 1px solid var(--lightgray);
  min-height: 50px;
  -webkit-tap-highlight-color: transparent;
}
.login-tab-btn:last-child { border-right: none; }
.login-tab-btn.active { background: var(--ink); color: var(--paper); }

.login-panel { padding: 1.75rem 1.25rem; display: none; }
.login-panel.active { display: block; }

@media (min-width: 640px) { .login-panel { padding: 2.25rem; } }

.login-panel-hed {
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: 1.45rem;
  margin-bottom: .2rem;
  line-height: 1.1;
}

@media (min-width: 640px) { .login-panel-hed { font-size: 1.65rem; } }

.login-panel-sub {
  font-family: 'Courier Prime', monospace;
  font-size: .8rem;
  color: var(--gray);
  font-style: italic;
  margin-bottom: 1.25rem;
  line-height: 1.6;
}

.form-group { margin-bottom: .85rem; }
.form-label {
  display: block;
  font-family: 'Oswald', sans-serif;
  font-size: .68rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gray);
  margin-bottom: .35rem;
}
.form-input {
  width: 100%;
  background: var(--paper2);
  border: 2px solid var(--lightgray);
  padding: .75rem .85rem;
  font-family: 'Courier Prime', monospace;
  font-size: .9rem;
  color: var(--ink);
  outline: none;
  transition: border-color .18s;
  -webkit-appearance: none;
  appearance: none;
  border-radius: 0;
  font-size: 16px; /* prevents iOS zoom */
}
.form-input:focus { border-color: var(--ink); }

.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: .65rem; }

.btn-submit {
  background: var(--ink);
  color: var(--paper);
  border: none;
  padding: .9rem;
  width: 100%;
  font-family: 'Oswald', sans-serif;
  font-size: .82rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: .2rem;
  transition: background .18s;
  min-height: 50px;
  -webkit-tap-highlight-color: transparent;
}
.btn-submit:hover { background: var(--red); }

.login-disclaimer {
  font-family: 'Courier Prime', monospace;
  font-size: .65rem;
  color: var(--gray);
  text-align: center;
  font-style: italic;
  margin-top: .65rem;
  line-height: 1.5;
}

.login-close-btn {
  position: absolute;
  top: .65rem; right: .8rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--gray);
  cursor: pointer;
  line-height: 1;
  transition: color .18s;
  padding: 6px;
  min-width: 38px; min-height: 38px;
  display: flex; align-items: center; justify-content: center;
  -webkit-tap-highlight-color: transparent;
}
.login-close-btn:hover { color: var(--red); }

/* security */
.captcha-box {
  background: var(--paper2);
  border: 1px solid var(--lightgray);
  padding: .65rem .85rem .45rem;
}
.captcha-box .form-label { color: var(--ink); font-weight: 700; }
.password-strength-bar { height: 5px; background: var(--lightgray); margin-top: .35rem; overflow: hidden; }
#strength-fill { height: 100%; width: 0; transition: width .3s, background .3s; }
.strength-label { font-family: 'Courier Prime', monospace; font-size: .68rem; margin-top: .3rem; font-style: italic; }
.form-error { font-family: 'Courier Prime', monospace; font-size: .74rem; color: var(--red); margin-bottom: .5rem; min-height: 1rem; font-style: italic; }

/* ────────────────────────────────────────────
   FOOTER
──────────────────────────────────────────── */
footer {
  background: var(--ink);
  padding: 2.5rem 1rem 0;
  border-top: 4px solid var(--red);
}

@media (min-width: 640px) { footer { padding: 3rem 1.5rem 0; } }
@media (min-width: 1000px) { footer { padding: 4rem 2rem 0; } }

.footer-inner { max-width: 1400px; margin: 0 auto; }

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #1a1a1a;
  margin-bottom: 1.5rem;
}

@media (min-width: 540px) {
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
}

@media (min-width: 1000px) {
  .footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr; gap: 3rem; padding-bottom: 2.75rem; }
}

.footer-brand-name {
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: 1.9rem;
  color: var(--paper);
  letter-spacing: -1px;
  margin-bottom: .3rem;
}
.footer-brand-name span { color: var(--red); }

.footer-tagline {
  font-family: 'Courier Prime', monospace;
  font-size: .84rem;
  color: var(--gray);
  font-style: italic;
  line-height: 1.7;
  margin-bottom: .85rem;
}

.footer-sppu-pill {
  font-family: 'Oswald', sans-serif;
  font-size: .62rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gold);
  border: 1px solid #333;
  padding: .35rem .65rem;
  display: inline-block;
  margin-bottom: .85rem;
}

.footer-col-title {
  font-family: 'Oswald', sans-serif;
  font-size: .68rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--paper);
  border-bottom: 1px solid #222;
  padding-bottom: .45rem;
  margin-bottom: .85rem;
}

.footer-links { list-style: none; display: flex; flex-direction: column; gap: .55rem; }
.footer-links a {
  font-family: 'Courier Prime', monospace;
  font-size: .82rem;
  color: var(--gray);
  text-decoration: none;
  transition: color .18s;
  display: flex;
  align-items: center;
  gap: .35rem;
  min-height: 36px;
}
.footer-links a::before { content: '→'; font-size: .62rem; color: var(--red); flex-shrink: 0; }
.footer-links a:hover { color: var(--paper); }

.maker-strip {
  border-top: 1px solid #1a1a1a;
  padding: 1.5rem 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-legal {
  font-family: 'Courier Prime', monospace;
  font-size: .72rem;
  color: var(--gray);
  line-height: 1.65;
}
.footer-legal a { color: var(--red); text-decoration: none; }

.footer-stamp {
  border: 2px solid var(--red);
  padding: .35rem .6rem;
  font-family: 'Oswald', sans-serif;
  font-size: .62rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--red);
  transform: rotate(-2deg);
  display: inline-block;
  margin-top: .6rem;
}

.made-by { display: flex; flex-direction: column; align-items: flex-end; gap: .15rem; }
.made-by-label {
  font-family: 'Oswald', sans-serif;
  font-size: .58rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #333;
}
.made-by-uss {
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: 1.4rem;
  letter-spacing: -1px;
  color: var(--paper);
  display: flex;
  align-items: center;
  gap: .3rem;
}
.made-by-uss span { color: var(--red); }
.made-by-tagline {
  font-family: 'Courier Prime', monospace;
  font-size: .68rem;
  color: var(--gray);
  font-style: italic;
  text-align: right;
}

/* ────────────────────────────────────────────
   TOAST
──────────────────────────────────────────── */
.toast {
  position: fixed;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%) translateY(80px);
  background: var(--ink);
  color: var(--paper);
  padding: .85rem 1.5rem;
  font-family: 'Oswald', sans-serif;
  font-size: .76rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-left: 4px solid var(--red);
  z-index: 9000;
  transition: transform .3s cubic-bezier(.4,0,.2,1);
  white-space: nowrap;
  box-shadow: 0 8px 32px rgba(0,0,0,.35);
  max-width: calc(100vw - 2rem);
  text-overflow: ellipsis;
  overflow: hidden;
}
.toast.show { transform: translateX(-50%) translateY(0); }

/* ────────────────────────────────────────────
   MAILCHIMP BANNER
──────────────────────────────────────────── */
.mc-banner {
  position: fixed;
  bottom: -300px; /* enough to fully hide */
  left: 0; right: 0;
  z-index: 3000;
  background: var(--ink);
  border-top: 3px solid var(--red);
  padding: 2.5rem 1rem 1rem; /* top padding to clear the close btn */
  transition: bottom .4s cubic-bezier(.4,0,.2,1);
  box-shadow: 0 -8px 40px rgba(0,0,0,.45);
}
.mc-banner.visible { bottom: 0; }

@media (min-width: 640px) {
  .mc-banner { padding: 1.25rem 3rem 1.25rem 2rem; } /* right padding for close btn */
}

.mc-banner-inner {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex-wrap: wrap;
}

.mc-banner-left { flex: 1; min-width: 180px; }
.mc-banner-hed {
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: 1rem;
  color: var(--paper);
  letter-spacing: -.5px;
  margin-bottom: .15rem;
}

@media (min-width: 640px) { .mc-banner-hed { font-size: 1.15rem; } }

.mc-banner-sub {
  font-family: 'Courier Prime', monospace;
  font-size: .76rem;
  color: var(--gray);
  line-height: 1.5;
}

.mc-banner-form { flex: 0 1 480px; width: 100%; }

.mc-fields { display: flex; gap: .45rem; margin-bottom: .35rem; }

.mc-input {
  flex: 1;
  background: #111;
  border: 1px solid #2a2a2a;
  border-left: 3px solid var(--red);
  color: var(--paper);
  padding: .6rem .85rem;
  font-family: 'Courier Prime', monospace;
  font-size: 16px;
  outline: none;
  transition: border-color .18s;
  min-width: 0;
  -webkit-appearance: none;
}
.mc-input::placeholder { color: #444; }
.mc-input:focus { border-color: var(--red); background: #161616; }

.mc-submit-btn {
  background: var(--red);
  color: #fff;
  border: none;
  padding: .6rem 1rem;
  font-family: 'Oswald', sans-serif;
  font-size: .78rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background .18s;
  white-space: nowrap;
  flex-shrink: 0;
  min-height: 44px;
  -webkit-tap-highlight-color: transparent;
}
.mc-submit-btn:hover { background: var(--red2); }
.mc-submit-btn:disabled { background: #333; cursor: not-allowed; }

@media (max-width: 480px) {
  .mc-fields { flex-direction: column; }
  .mc-submit-btn { width: 100%; }
}

.mc-response { font-family: 'Courier Prime', monospace; font-size: .76rem; min-height: 1rem; margin-bottom: .2rem; }
.mc-response.success { color: #3fc87a; }
.mc-response.error   { color: var(--red2); }
.mc-fine { font-family: 'Courier Prime', monospace; font-size: .65rem; color: #333; font-style: italic; }
.mc-fine strong { color: #555; }

.mc-close {
  position: absolute;
  top: .6rem;
  right: .6rem;
  background: #1a1a1a;
  border: 1px solid #333;
  color: #888;
  font-size: 1rem;
  cursor: pointer;
  transition: all .18s;
  width: 36px; height: 36px;
  min-width: 36px; min-height: 36px;
  display: flex; align-items: center; justify-content: center;
  -webkit-tap-highlight-color: transparent;
  line-height: 1;
  z-index: 1;
}
.mc-close:hover,
.mc-close:active { color: #fff; background: var(--red); border-color: var(--red); }
