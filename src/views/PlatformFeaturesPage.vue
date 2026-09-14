<script setup lang="ts">
import pfRetail from '../assets/pf-cuser-market.png'
import pfMaker from '../assets/pf-cuser-market-c.png'
import pfBroker from '../assets/pf-broker.png'

const products = [
  {
    icon: '💰',
    name: 'Smart Wallet',
    en: 'CDs · Flexible Savings',
    desc: 'Certificates of deposit with flexible access and multiple rate options',
    tags: ['Demand', 'Term', 'CDs'],
  },
  {
    icon: '📈',
    name: 'iStock',
    en: 'HK / US / A-shares',
    desc: 'Hong Kong, US and A-shares with AH premium index and real-time quotes',
    tags: ['HK Stocks', 'US Stocks', 'A-shares'],
  },
  {
    icon: '🪙',
    name: 'i-Gold',
    en: 'Physical Gold',
    desc: 'Physical gold retail covering HK gold, international gold and Shanghai gold',
    tags: ['HK Gold', 'International', 'Shanghai'],
  },
  {
    icon: '📜',
    name: 'Bond Trading',
    en: 'EasyBond',
    desc: 'Real-time bond trading for corporate, financial and ABS products',
    tags: ['Corporate', 'Financial', 'ABS'],
  },
  {
    icon: '📊',
    name: 'Fund Trading',
    en: 'EasyFund',
    desc: 'Real-time trading of public and private fund units',
    tags: ['Public Funds', 'Private Funds', 'Real-time'],
  },
]

const guards = [
  {
    icon: '🛡️',
    title: 'AML / KYC Compliance',
    desc: 'Strict adherence to anti-money laundering and customer identification regulations to ensure secure and compliant trading',
  },
  {
    icon: '📊',
    title: 'Equities (HK / US / A-shares)',
    desc: 'Interoperability across HK, US, and A-shares with direct market making and trading',
  },
  {
    icon: '⚡',
    title: 'Market Maker Obligations',
    desc: 'Continuous two-way quotes to ensure market depth and liquidity with efficient matching',
  },
  {
    icon: '🔒',
    title: 'Instant Settlement',
    desc: 'T+0 real-time clearing and settlement, direct CMU bank custody connectivity, and fund safety',
  },
  {
    icon: '🧠',
    title: 'Risk Management',
    desc: 'Intelligent risk control and real-time monitoring with dynamic mark-to-market financing ratios',
  },
  {
    icon: '🌐',
    title: 'End-to-End Services',
    desc: 'HTTPS/JSON APIs + H5/API access for direct market entry and instant trading',
  },
]

const techs = [
  {
    icon: '🔐',
    title: 'OAUTH 2.0 + JWT Security Auth',
    desc: 'Standardized secure authentication protocols protecting user identity and trading data — 100% accurate with zero missed orders',
  },
  {
    icon: '📋',
    title: 'Online Onboarding KYC/AML',
    desc: 'Automated customer identity verification and compliance screening with efficient batch processing',
  },
  {
    icon: '🧮',
    title: 'Smart Risk Scoring',
    desc: 'AI-driven intelligent risk scoring engine with real-time assessment and dynamic adjustment',
  },
  {
    icon: '💼',
    title: 'Procurement & Product Distribution',
    desc: 'One-stop product procurement and distribution management with multi-channel configuration',
  },
  {
    icon: '⚙️',
    title: 'Automated Distribution Setup',
    desc: 'Fully automated product listing, distribution rules, and fee configuration to reduce operating costs',
  },
  {
    icon: '✅',
    title: 'Direct Link · 100% Accurate',
    desc: 'Fully direct-connected trade processing ensuring every order executes precisely — zero missed orders, zero errors',
  },
]
</script>

<template>
  <div class="platform-features page">
    <section class="pf-hero">
      <div class="container">
        <div class="pf-hero-en">Platform Features</div>
        <h1 class="pf-hero-title">Platform Features</h1>
        <div class="pf-hero-underline"></div>
        <p class="pf-hero-desc">
          ghkax provides differentiated access and services for three user types—retail users via brokers, market makers with direct access, and brokers trading on behalf of clients.
        </p>
      </div>
    </section>

    <section class="pf-section">
      <div class="container">
        <div class="pf-sec-header">
          <span class="pf-sec-num">01</span>
          <div class="pf-sec-text">
            <h2 class="pf-sec-title">Retail Users (Access via Broker)</h2>
            <p class="pf-sec-sub">Retail Users · Access via Broker</p>
          </div>
          <div class="pf-sec-line"></div>
        </div>
        <div class="pf-flow">
          <div class="pf-flow-node pf-flow-app">
            <div class="pf-flow-icon">📱</div>
            <h4>Third-Party APP</h4>
            <p>Broker’s branded APP</p>
          </div>
          <div class="pf-flow-arrow">→</div>
          <div class="pf-flow-node pf-flow-broker">
            <div class="pf-flow-icon">🏦</div>
            <h4>Broker</h4>
            <p>Securities firm / Bank</p>
          </div>
          <div class="pf-flow-arrow">→</div>
          <div class="pf-flow-node pf-flow-platform">
            <div class="pf-flow-icon">🔷</div>
            <h4>Trading Platform</h4>
            <p>ghkax</p>
          </div>
          <div class="pf-flow-arrow">→</div>
          <div class="pf-flow-node pf-flow-products">
            <div class="pf-flow-icon">📦</div>
            <h4>Multi-Asset Products</h4>
            <p>One-stop investing</p>
          </div>
        </div>
        <div class="pf-products-grid">
          <div v-for="p in products" :key="p.name" class="pf-product-card">
            <div class="ppc-icon">{{ p.icon }}</div>
            <div class="ppc-badge">{{ p.en }}</div>
            <h4 class="ppc-name">{{ p.name }}</h4>
            <p class="ppc-desc">{{ p.desc }}</p>
            <div class="ppc-tags">
              <span v-for="tag in p.tags" :key="tag" class="ppc-tag">{{ tag }}</span>
            </div>
          </div>
        </div>
        <div class="pf-screenshot-row">
          <div class="pf-ss-wrap">
            <img :src="pfRetail" alt="Retail user platform interface" class="pf-ss-img" />
          </div>
        </div>
      </div>
    </section>

    <section class="pf-section pf-alt">
      <div class="container">
        <div class="pf-sec-header">
          <span class="pf-sec-num">02</span>
          <div class="pf-sec-text">
            <h2 class="pf-sec-title">Market Makers (Direct Platform Access)</h2>
            <p class="pf-sec-sub">Market Maker · Direct Access</p>
          </div>
          <div class="pf-sec-line"></div>
        </div>
        <div class="pf-access-row">
          <div class="pf-access-card">
            <div class="pa-icon">🖥️</div>
            <h4>Market-Making Desk / Direct Participation</h4>
            <p>Market makers connect directly to the platform with continuous two-way quotes to ensure market liquidity depth</p>
          </div>
          <div class="pf-access-card">
            <div class="pa-icon">🔗</div>
            <h4>End-to-End Access</h4>
            <p>HTTPS/JSON APIs · H5/API access · Direct market entry · Instant trading</p>
          </div>
        </div>
        <div class="pf-features-grid">
          <div v-for="g in guards" :key="g.title" class="pf-feat-card">
            <div class="pfc-icon-wrap">
              <span class="pfc-icon">{{ g.icon }}</span>
            </div>
            <h4 class="pfc-title">{{ g.title }}</h4>
            <p class="pfc-desc">{{ g.desc }}</p>
          </div>
        </div>
        <div class="pf-screenshot-row">
          <div class="pf-ss-wrap">
            <img :src="pfMaker" alt="Market maker direct access interface" class="pf-ss-img" />
          </div>
        </div>
      </div>
    </section>

    <section class="pf-section">
      <div class="container">
        <div class="pf-sec-header">
          <span class="pf-sec-num">03</span>
          <div class="pf-sec-text">
            <h2 class="pf-sec-title">Brokers (Securities Firms / Banks; Agent Access for Retail Users)</h2>
            <p class="pf-sec-sub">Broker · Agent Access</p>
          </div>
          <div class="pf-sec-line"></div>
        </div>
        <div class="pf-api-flow">
          <div class="pf-api-node pf-api-broker-app">
            <div class="pf-api-icon">📱</div>
            <h4>Broker APP</h4>
          </div>
          <div class="pf-api-connector">
            <div class="pf-api-line"></div>
            <div class="pf-api-labels">
              <span class="pf-api-tag">API</span>
              <span class="pf-api-tag">H5</span>
              <span class="pf-api-tag">OAUTH 2.0</span>
              <span class="pf-api-tag">JWT Token</span>
            </div>
          </div>
          <div class="pf-api-node pf-api-platform">
            <div class="pf-api-icon">🔷</div>
            <h4>ghkax</h4>
          </div>
        </div>
        <div class="pf-broker-grid">
          <div v-for="g in techs" :key="g.title" class="pf-broker-card">
            <div class="pbc-icon">{{ g.icon }}</div>
            <h4 class="pbc-title">{{ g.title }}</h4>
            <p class="pbc-desc">{{ g.desc }}</p>
          </div>
        </div>
        <div class="pf-screenshot-row">
          <div class="pf-ss-wrap">
            <img :src="pfBroker" alt="Broker platform access interface" class="pf-ss-img" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped src="../styles/platform-features.css"></style>
