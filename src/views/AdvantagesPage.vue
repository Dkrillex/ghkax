<script setup lang="ts">
const left = [
  { title: 'Rich Products, One-Stop Access', descs: ['Full range, more choices', 'Covering the needs of all client types'] },
  { title: 'Low Fees — Waive Where Possible', descs: ['No intermediary / no spread · commission rebate', 'No account opening / custody / service fees'] },
  { title: 'Friendly UI, Efficient Integration', descs: ['HTTPS/JSON integration', 'Optional H5 or custom API development'] },
]

const right = [
  { title: 'Unprecedented Client Experience', descs: ['Client self-directed trading', 'Low barrier / high efficiency / strong liquidity'] },
  { title: 'Shared License Pathways', descs: ['Cross-border quotas · Cross-boundary Wealth Management Connect', 'Asset-side / funding-side license pathway sharing'] },
  { title: 'Tech Empowerment, Win-Win Partnership', descs: ['System outsourcing, development & maintenance', 'Tools / outsourcing only — no access to client data'] },
]

const digitalTags = [
  [
    { label: 'Direct', desc: 'Online visibility · Direct trading' },
    { label: 'Convenient', desc: 'Anytime, anywhere, as you wish' },
    { label: 'Smart', desc: 'Auto-match · Best price' },
  ],
  [
    { label: 'Efficient', desc: 'Self-trading · Instant settlement' },
    { label: 'Friendly', desc: 'Clear UI · What you see is what you get' },
    { label: 'Secure', desc: 'Bank custody · Asset safety' },
  ],
]

const inclusiveTags = [
  [
    { label: 'No Barrier', desc: 'End clients · From HKD 1,000' },
    { label: 'Break Monopoly', desc: 'Retail group-buy · Wholesale pricing' },
    { label: 'Tech Access', desc: 'Smart analysis · System matching' },
  ],
  [
    { label: 'Truly Convenient', desc: 'Skip the middle · Instant settlement' },
    { label: 'Low Cost', desc: 'No spread · No fees · No commission' },
    { label: 'Stay Secure', desc: 'Leading tech · End-to-end safety' },
  ],
]
</script>

<template>
  <div class="page">
    <section class="page-hero">
      <div class="container page-hero-inner">
        <div class="ph-breadcrumb">Home / Advantages</div>
        <h1 class="ph-title">
          Platform Advantages<br>
          <span class="ph-title-zh">Platform Advantages</span>
        </h1>
        <p class="ph-tagline">ghkax · Embracing Future</p>
      </div>
    </section>

    <section class="adv-section">
      <div class="container">
        <div class="adv-grid">
          <div class="adv-card">
            <div class="adv-icon-wrap">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="adv-svg-icon">
                <path d="M32 8C28 14 22 18 16 20C18 26 24 30 32 34C40 30 46 26 48 20C42 18 36 14 32 8Z" stroke="#fff" stroke-width="2" fill="none" />
                <circle cx="32" cy="24" r="3" fill="#fff" />
                <line x1="32" y1="27" x2="32" y2="38" stroke="#fff" stroke-width="2" />
                <ellipse cx="32" cy="44" rx="12" ry="5" stroke="#fff" stroke-width="1.5" fill="none" />
              </svg>
            </div>
            <h3>Rooted in Hong Kong</h3>
            <p>Leveraging Hong Kong’s institutional and market strengths as an international financial center, with a full product range, we build a trading platform that is user-friendly, comprehensive, efficient, and low-cost.</p>
          </div>
          <div class="adv-card">
            <div class="adv-icon-wrap">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="adv-svg-icon">
                <rect x="10" y="38" width="8" height="16" rx="1" fill="#fff" />
                <rect x="22" y="28" width="8" height="26" rx="1" fill="#fff" />
                <rect x="34" y="18" width="8" height="36" rx="1" fill="#fff" />
                <rect x="46" y="12" width="8" height="42" rx="1" fill="#fff" />
                <polyline points="8,44 20,34 32,24 44,14 56,8" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" />
                <polygon points="56,8 52,12 54,6" fill="#fff" />
              </svg>
            </div>
            <h3>Digital Finance</h3>
            <p>Tech-driven smart trading—direct connectivity and intelligent best-price matching; central custody and instant settlement; full product range with a unified account.</p>
          </div>
          <div class="adv-card">
            <div class="adv-icon-wrap">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="adv-svg-icon">
                <ellipse cx="32" cy="22" rx="18" ry="7" stroke="#fff" stroke-width="2" fill="none" />
                <rect x="14" y="22" width="36" height="4" rx="2" fill="#fff" />
                <ellipse cx="32" cy="30" rx="18" ry="7" stroke="#fff" stroke-width="2" fill="none" />
                <rect x="14" y="30" width="36" height="4" rx="2" fill="#fff" />
                <ellipse cx="32" cy="38" rx="18" ry="7" stroke="#fff" stroke-width="2" fill="none" />
                <circle cx="45" cy="33" r="9" stroke="#fff" stroke-width="2" fill="none" />
                <text x="41" y="37" font-size="11" font-weight="700" fill="#fff">$</text>
              </svg>
            </div>
            <h3>Inclusive Finance</h3>
            <p>Breaking barriers and monopolies—retail clients from HKD 1,000; retail group-buy at wholesale prices; smart system analysis, fewer intermediaries, low-cost trading, and tech-backed end-to-end security.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="compare-section section-soft">
      <div class="container">
        <div class="compare-layout">
          <div class="compare-left">
            <div v-for="item in left" :key="item.title" class="compare-item">
              <h4>{{ item.title }}</h4>
              <p v-for="d in item.descs" :key="d">{{ d }}</p>
            </div>
          </div>
          <div class="compare-center">
            <div class="compare-circle">
              <div class="cc-num">6</div>
              <div class="cc-label">Peer Comparison</div>
            </div>
          </div>
          <div class="compare-right">
            <div v-for="item in right" :key="item.title" class="compare-item">
              <h4>{{ item.title }}</h4>
              <p v-for="d in item.descs" :key="d">{{ d }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="tag-section section-white">
      <div class="container">
        <h2 class="tag-section-title">Digital Finance</h2>
        <div class="tag-rows">
          <div v-for="row in digitalTags" :key="row[0].label" class="tag-row">
            <div v-for="tag in row" :key="tag.label" class="tag-item">
              <span class="tag-key">{{ tag.label }}</span>
              <span class="tag-val">{{ tag.desc }}</span>
            </div>
          </div>
        </div>
        <h2 class="tag-section-title mt-section">Inclusive Finance</h2>
        <div class="tag-rows">
          <div v-for="row in inclusiveTags" :key="row[0].label" class="tag-row">
            <div v-for="tag in row" :key="tag.label" class="tag-item">
              <span class="tag-key">{{ tag.label }}</span>
              <span class="tag-val">{{ tag.desc }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped src="../styles/advantages.css"></style>
