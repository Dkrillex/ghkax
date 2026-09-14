<script setup lang="ts">
const winwinTop = [
  {
    num: '01',
    title: 'Full Product Range',
    points: [
      'Complete categories: equities + bonds; public & private funds; securitized and digitized notes',
      'More choices: diverse issuers, tenors, return-risk profiles, and demand/term flexibility.',
      'Built-in platform liquidity.',
      'Financial institutions joining the platform gain strong empowerment in product supply and secondary-market liquidity!',
    ],
  },
  {
    num: '02',
    title: 'More Clients',
    points: [
      'Activate existing clients (reduce account closures)',
      'Attract new clients and improve client experience.',
      'Shared client resources: platform clients create value for partners.',
    ],
  },
]

const winwinBottom = [
  {
    num: '03',
    title: 'Lower Costs',
    points: [
      'Significantly lower system development / operations costs',
      'Lower asset issuance costs',
      'Lower client acquisition costs',
      'Lower client service costs',
      'Lower compliance and trade monitoring costs',
      'Significantly lower marketing and promotion costs',
    ],
  },
  {
    num: '04',
    title: 'Earn More',
    points: [
      'Substantial growth in DCM fixed-income underwriting revenue',
      'Substantial growth in FICC brokerage commission revenue',
      'Based on strong growth in active clients and AUM, financing / custody / trading revenue grows substantially',
      'Substantial growth in investment banking / asset management businesses',
    ],
  },
]

const dcmPoints = [
  {
    num: '01',
    title: 'Easier Deal Origination',
    points: [
      'Standardized major project models, such as green finance / ABS, suited for large-scale introduction with transparent issuance standards',
      'Lower communication costs and higher success rates',
      'Platform issuance and online sales for high efficiency',
    ],
  },
  {
    num: '02',
    title: 'More Referral Sources',
    points: [
      'Platform product innovation attracts substantial issuance demand for DCM underwriting',
      '50+ DCM origination projects across Hong Kong can be co-issued and sold via the platform — low communication cost, high collaboration efficiency',
    ],
  },
  {
    num: '03',
    title: 'Easier Issuance, Lower Cost',
    points: [
      'Standardized issuance documentation',
      'Unified procurement of third-party professional services',
      'Higher issuance efficiency and substantially lower issuance costs',
    ],
  },
  {
    num: '04',
    title: 'Easier Circulation, Better Sales',
    points: [
      'Investor holdings listed on the platform enable efficient secondary-market circulation',
      'Platform holdings carry built-in liquidity, lowering return requirements',
      'Market makers and structured issuance substantially increase secondary-market liquidity',
    ],
  },
]

const investPoints = [
  {
    num: '01',
    title: 'Low-Cost Funding',
    points: [
      'Use fixed-income financial bonds as the underlying, issue demand products on the platform, and raise low-cost funds',
      'Assets are term/high-yield; liabilities are demand/low-cost',
    ],
  },
  {
    num: '02',
    title: 'Wholesale-to-Retail Spread',
    points: [
      'Buy financial bonds / government bonds in bulk and sell retail on the platform — wholesale to retail, capturing the spread',
      'Risk-free arbitrage on proprietary holdings',
    ],
  },
  {
    num: '03',
    title: 'Standardized Products, Low-Risk Financing',
    points: [
      'Platform provides product portfolio financing solutions with dynamic mark-to-market financing ratios, helping brokers manage financing risk effectively',
      'With standardized platform products, brokers can acquire clients in bulk at very low cost',
    ],
  },
  {
    num: '04',
    title: 'More Products, Lower Organizer Fees',
    points: [
      'The platform aggregates products across issuers, credit ratings, and terms — more choices, lower financing thresholds',
      'No fees on the buy side; high organizer efficiency and low fees',
    ],
  },
]

const partnerBenefits = [
  {
    num: '01',
    title: 'Stable Product & Trading Services',
    desc: 'Continuous product connectivity lets partners quickly access a complete product supply for stable retail trading.',
  },
  {
    num: '02',
    title: 'Comprehensive Asset Side',
    desc: 'Full retail access pathways, T+0 bond trading, instant retail trading, and one-click / one-page connectivity.',
  },
  {
    num: '03',
    title: 'Long-Term Efficient Control',
    desc: 'Global risk-control processes for stable growth — real-time calculation, real-time trading, and efficient long-term oversight.',
  },
  {
    num: '04',
    title: 'Lower Operating Costs',
    desc: 'More retail institutions under stable system controls; recommended investors need not integrate control systems — lower costs.',
  },
  {
    num: '05',
    title: 'One-Stop Trading Service Platform',
    desc: 'Instant retail trading services with full coverage — one-click, one-page, real-time connectivity for retail investors.',
  },
]
</script>

<template>
  <div class="page">
    <section class="page-hero">
      <div class="container page-hero-inner">
        <div class="ph-breadcrumb">Home / Cooperation</div>
        <h1 class="ph-title">Cooperation Value</h1>
        <p class="ph-desc">
          Providing product supply, system output, and distribution capabilities for banks, brokers, and channel partners to achieve mutual success.
        </p>
      </div>
    </section>

    <section class="section section-white">
      <div class="container">
        <div class="winwin-header">
          <div class="winwin-en">win-win<br />Cooperation</div>
          <div class="winwin-divider"></div>
          <div class="winwin-zh">
            <div class="winwin-subtitle">Financial Institutions (Banks / Brokers)</div>
            <h2 class="winwin-title">Win-Win Cooperation</h2>
            <div class="winwin-underline"></div>
          </div>
        </div>
        <div class="winwin-row">
          <div
            v-for="item in winwinTop"
            :key="item.num"
            class="winwin-card winwin-card-top"
          >
            <div class="wc-num">{{ item.num }}</div>
            <h3 class="wc-title">
              {{ item.title }}
              <span class="wc-line"></span>
            </h3>
            <ul class="wc-list">
              <li v-for="p in item.points" :key="p">{{ p }}</li>
            </ul>
          </div>
        </div>
        <div class="winwin-row">
          <div v-for="item in winwinBottom" :key="item.num" class="winwin-card">
            <div class="wc-num">{{ item.num }}</div>
            <h3 class="wc-title">
              {{ item.title }}
              <span class="wc-line"></span>
            </h3>
            <ul class="wc-list">
              <li v-for="p in item.points" :key="p">{{ p }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-soft">
      <div class="container">
        <div class="dcm-header">
          <div class="dcm-header-sub">Financial Institutions</div>
          <h2 class="dcm-header-title">DCM Bond Underwriting</h2>
          <div class="dcm-header-underline"></div>
        </div>
        <div class="dcm-mode-wrap">
          <div class="dcm-mode-label">DCM Business Model Has Changed</div>
          <div class="dcm-mode-flow">
            <div class="dcm-mode-old">
              <div class="dcm-mode-old-label">Previous Model</div>
              <div class="dcm-mode-old-steps">
                <div class="dcm-step">Origination</div>
                <span class="dcm-plus">+</span>
                <div class="dcm-step">Execution</div>
                <span class="dcm-plus">+</span>
                <div class="dcm-step">Underwriting</div>
              </div>
            </div>
            <div class="dcm-arrow">→</div>
            <div class="dcm-mode-new">
              <div class="dcm-mode-new-label">Now Only Need</div>
              <div class="dcm-step dcm-step-active">Origination •</div>
            </div>
          </div>
        </div>
        <div class="dcm-points-grid">
          <div v-for="item in dcmPoints" :key="item.num" class="dcm-point-card">
            <div class="dpc-num-title">
              <span class="dpc-num">{{ item.num }}</span>
              <h4 class="dpc-title">
                {{ item.title }}
                <span class="dpc-line"></span>
              </h4>
            </div>
            <ul class="dpc-list">
              <li v-for="p in item.points" :key="p">{{ p }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-white">
      <div class="container">
        <div class="invest-header">
          <div class="invest-header-sub">Financial Institutions</div>
          <h2 class="invest-header-title">Proprietary Investment / Market Making</h2>
          <div class="invest-header-en">HOUSE A/C INVESTMENT/MARKET MAKING</div>
          <div class="invest-header-underline"></div>
        </div>
        <div class="invest-points-grid">
          <div v-for="item in investPoints" :key="item.num" class="invest-point-card">
            <div class="ipc-num-title">
              <span class="ipc-num">{{ item.num }}</span>
              <h4 class="ipc-title">
                {{ item.title }}
                <span class="ipc-line"></span>
              </h4>
            </div>
            <ul class="ipc-list">
              <li v-for="p in item.points" :key="p">{{ p }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-white">
      <div class="container">
        <div class="partner-header">
          <div class="partner-header-sub">Retail Institutions</div>
          <h2 class="partner-header-title">Partner (Retail Institution) Value</h2>
          <div class="partner-header-en">PARTNER BENEFITS</div>
          <div class="partner-header-underline"></div>
        </div>
        <div class="partner-benefit-grid">
          <div v-for="item in partnerBenefits" :key="item.num" class="pb-card">
            <div class="pb-num-title">
              <span class="pb-num">{{ item.num }}</span>
              <h4 class="pb-title">
                {{ item.title }}
                <span class="pb-line"></span>
              </h4>
            </div>
            <p class="pb-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped src="../styles/cooperation.css"></style>
