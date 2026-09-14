<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import TimelineSection from '../components/TimelineSection.vue'
import { useReveal } from '../composables/useReveal'

useReveal()

const anchorNav = ref<HTMLElement | null>(null)
const sticky = ref(false)
const activeTab = ref('overview')
let anchorOffset = 0

const tabs = [
  { id: 'overview', label: 'Company Overview' },
  { id: 'history', label: 'Development History' },
  { id: 'features', label: 'Platform Highlights' },
  { id: 'cooperation', label: 'Partnership Value' },
]

const values = [
  { zh: 'Connectivity & Accessibility', en: 'Connectivity & Accessibility', desc: 'A bridge connecting global assets and investors — enabling resilient allocation across equities, bonds, and more through efficient, accessible channels.' },
  { zh: 'Integrity & Trust', en: 'Integrity & Trust', desc: 'Integrity is the foundation of trading. We uphold rigorous ethics, transparent operations, and reliable transaction safeguards.' },
  { zh: 'Innovation & Agility', en: 'Innovation & Agility', desc: 'We push forward, continually advancing technology and standards so digital products stay adaptive and responsive to investor needs.' },
  { zh: 'Stability & Compliance', en: 'Stability & Compliance', desc: 'Alongside stability and efficiency, we put risk control and compliant operations first to keep assets secure and trading resilient.' },
]

const dataCards = [
  { num: '60+', label: 'Partner Financial Institutions', sub: 'Target 250+ by 2027' },
  { num: '1.4M+', label: 'Online Retail Clients', sub: 'Target 4.46M+ by 2027' },
  { num: '12K+', label: 'PI Professional Clients', sub: 'Target 38K+ by 2027' },
  { num: '7', label: 'Asset Classes Covered', sub: 'Equities · Bonds · Funds · Gold · RWA & more' },
]

const whyCards = [
  { icon: '📦', title: 'Full Product Range', desc: 'Public and private markets across the board: corporate bonds, private credit, securities trading — complete coverage.' },
  { icon: '👥', title: 'Broad Client Base', desc: 'More client-side assets and services, with client asset onboarding that strengthens platform empowerment.' },
  { icon: '💰', title: 'Lower Cost', desc: 'System build/maintenance costs below in-house builds; lower asset circulation costs and leaner customer operations.' },
  { icon: '⚡', title: 'Higher Efficiency', desc: 'Direct market access, real-time trading, market-making matching, and instant settlement — end-to-end service.' },
]

const features = [
  {
    icon: '🛡️',
    title: 'Risk-First Investment Philosophy',
    desc: 'With liquidity, credit, and interest-rate risks firmly under control, we deliver professional, resilient asset services for institutions.',
    points: ['Strict control of three core risks', 'Independent risk framework with continuous monitoring', 'Multi-layer compliance review'],
  },
  {
    icon: '📈',
    title: 'Deep Market Experience',
    desc: 'Rooted in Hong Kong capital markets with hands-on experience across market cycles, delivering timely, in-depth insights for institutional clients.',
    points: ['SFC-licensed professional team', 'Multi-asset coverage experience', 'Cross-border market channels'],
  },
  {
    icon: '🗂️',
    title: 'Complete Product Line',
    desc: 'Differentiated product design covering equities, bonds, funds, gold, RWA, and more to meet diverse institutional needs.',
    points: ['Equities · Bonds · Funds · Gold', 'RWA real-world asset tokenization', 'Smart Wallet'],
  },
  {
    icon: '💻',
    title: 'In-House Trading Management System',
    desc: 'Self-developed full-stack trading system, continuously upgraded, supporting H5, API, and customized white-label access.',
    points: ['H5 / API / custom white-label', 'T+0 / T+1 clearing & settlement', 'Bank-securities linkage; CMU central custody'],
  },
]

const featureStats = [
  { value: '60+', label: 'Partner Financial Institutions' },
  { value: '1.4M+', label: 'Online Retail Clients' },
  { value: '12K+', label: 'PI Professional Clients' },
  { value: '7+', label: 'Asset Categories' },
]

const coopCards = [
  {
    num: '01',
    title: 'Full Product Range',
    desc: 'Leverage the platform’s rich product suite so partners quickly gain complete asset allocation capability and stronger client-service competitiveness.',
    points: ['Public & private markets: corporate bonds, private credit, securities, and more', 'Customized products for different risk preferences', 'Full compliance support and technical onboarding'],
  },
  {
    num: '02',
    title: 'Broad Client Base',
    desc: 'Tap existing retail, PI, and institutional client foundations to expand sources of clients, grow AUM, and improve retention value.',
    points: ['Shared retail / PI / institutional client resources', 'Much lower client acquisition cost', 'Platform systems that improve client management efficiency'],
  },
  {
    num: '03',
    title: 'Lower Cost',
    desc: 'System build/maintenance costs far below in-house builds; asset circulation costs drop significantly; front- and middle/back-office operating costs are compressed.',
    points: ['Very low integration cost with fast go-live', 'Lower all-in circulation and custody costs', 'Fewer redundant middleman operating expenses'],
  },
  {
    num: '04',
    title: 'Earn More',
    desc: 'Open diversified revenue through DCM bond underwriting and distribution, FICC market-making, AUM growth, and expanded investment & financing businesses.',
    points: ['DCM bond underwriting and distribution fees', 'Expanded FICC market-making revenue', 'AUM growth driving management fees and revenue share'],
  },
]

const partnerTypes = [
  { icon: '🏦', label: 'Commercial Banks' },
  { icon: '📋', label: 'Securities Firms' },
  { icon: '💼', label: 'Asset Management Firms' },
  { icon: '🏢', label: 'Family Offices' },
  { icon: '🌐', label: 'International Brokers' },
  { icon: '📊', label: 'Market Maker' },
]

const modules = [
  { to: '/about', icon: '🏢', title: 'About the Platform', desc: 'ghkax background, core positioning, and compliance credentials' },
  { to: '/ecosystem', icon: '🌐', title: 'Ecosystem', desc: 'Brokers, financial institutions, and end clients participating together' },
  { to: '/platform-features', icon: '⚙️', title: 'Platform Features', desc: 'Trading, market-making, clearing & settlement, and asset management' },
  { to: '/advantages', icon: '🚀', title: 'Core Advantages', desc: 'Full coverage, lower cost, higher efficiency, and compliance assurance' },
  { to: '/cooperation', icon: '🤝', title: 'Partnership Value', desc: 'Empowering institutions with product supply, distribution, and client retention' },
  { to: '/contact', icon: '📞', title: 'Contact Us', desc: 'Contact details, address, and partnership inquiries' },
]

function sectionTop(el: HTMLElement) {
  return el.getBoundingClientRect().top + window.scrollY
}

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  // clear fixed header (98) + sticky anchor bar (~58)
  window.scrollTo({ top: sectionTop(el) - 160, behavior: 'smooth' })
}

function measureAnchorOffset() {
  if (!anchorNav.value) return
  anchorOffset = sectionTop(anchorNav.value)
}

function onScroll() {
  if (anchorNav.value) sticky.value = window.scrollY > anchorOffset
  for (const tab of [...tabs].reverse()) {
    const el = document.getElementById(tab.id)
    if (el && window.scrollY >= sectionTop(el) - 160) {
      activeTab.value = tab.id
      break
    }
  }
}

onMounted(() => {
  measureAnchorOffset()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', measureAnchorOffset, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', measureAnchorOffset)
})
</script>

<template>
  <div class="page">
    <section class="hero-section">
      <div class="hero-bg-overlay" />
      <div class="container hero-inner">
        <div class="hero-left reveal">
          <h1 class="hero-title">
            Asset Trading Platform
            <br />
            <span class="hero-title-en">ghkax · Embracing Future</span>
          </h1>
          <p class="hero-desc">
            ghkax is licensed by the Hong Kong Securities and Futures Commission (SFC), providing institutional and retail clients with a comprehensive intelligent trading platform. With a focus on stability, efficiency, and advancing fintech, we deliver one-stop multi-asset trading, custody, and clearing & settlement across equities, bonds, funds, gold, certificates of deposit, and more.
          </p>
          <div class="hero-actions">
            <RouterLink to="/contact" class="primary-btn">Book a Meeting</RouterLink>
            <RouterLink to="/about" class="ghost-btn">Explore the Platform</RouterLink>
          </div>
          <div class="hero-stats">
            <div class="stat-item">
              <strong>60<span class="stat-unit">+</span></strong>
              <span>Financial Institutions</span>
            </div>
            <div class="stat-divider" />
            <div class="stat-item">
              <strong>1.4<span class="stat-unit">M+</span></strong>
              <span>Online Retail Clients</span>
            </div>
            <div class="stat-divider" />
            <div class="stat-item">
              <strong>12<span class="stat-unit">K+</span></strong>
              <span>PI Professional Clients</span>
            </div>
          </div>
        </div>
        <div class="hero-right reveal reveal-delay">
          <div class="hero-card-grid">
            <div class="hero-feature-card primary-card">
              <div class="fc-icon">📊</div>
              <h4>Multi-Asset Coverage</h4>
              <p>Equities, bonds, funds, gold, RWA, and more</p>
            </div>
            <div class="hero-feature-card">
              <div class="fc-icon">⚡</div>
              <h4>Real-Time Trading</h4>
              <p>T+0 / T+1 clearing; bank-securities linkage</p>
            </div>
            <div class="hero-feature-card">
              <div class="fc-icon">🔐</div>
              <h4>Secure Custody</h4>
              <p>CMU central custody with compliance assurance</p>
            </div>
            <div class="hero-feature-card">
              <div class="fc-icon">🔗</div>
              <h4>Flexible Access</h4>
              <p>H5 / API / customized white-label access</p>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-hint">
        <span>Scroll to explore</span>
        <div class="scroll-arrow">↓</div>
      </div>
    </section>

    <nav ref="anchorNav" class="anchor-nav" :class="{ sticky }">
      <div class="container anchor-nav-inner">
        <a
          v-for="tab in tabs"
          :key="tab.id"
          :href="'#' + tab.id"
          class="anchor-tab"
          :class="{ active: activeTab === tab.id }"
          @click.prevent="scrollTo(tab.id)"
        >{{ tab.label }}</a>
      </div>
    </nav>

    <section id="overview" class="section section-white reveal-section">
      <div class="container">
        <div class="overview-layout">
          <div class="overview-text">
            <div class="title-line" />
            <p class="section-sub">Corporate Overview</p>
            <h2 class="section-title">Company Overview</h2>
            <p class="overview-para">
              ghkax Limited (ghkax) is an SFC Type 1 licensed broker. Guided by the mission of “stable, efficient, and advancing fintech,” we provide institutional and retail clients with a full-spectrum intelligent trading platform.
            </p>
            <p class="overview-para">
              ghkax upholds core values of rigor, efficiency, fairness, innovation, stability, and compliance. We offer integrated services across equities, bonds, funds, gold, and other resilient securities — spanning asset issuance, securities trading, investment management, and real-time wealth solutions.
            </p>
            <div class="overview-tags">
              <span class="tag">📋 SFC Licensed</span>
              <span class="tag">🌏 Stable & Efficient</span>
              <span class="tag">💹 Multi-Asset Coverage</span>
              <span class="tag">🔒 Compliance Assured</span>
            </div>
            <RouterLink to="/about" class="primary-btn mt-6 inline-btn">Learn More</RouterLink>
          </div>
          <div class="overview-visual">
            <div class="overview-value-cards">
              <div v-for="v in values" :key="v.en" class="value-card">
                <div class="vc-dot" />
                <div>
                  <h4>{{ v.zh }}</h4>
                  <p class="vc-en">{{ v.en }}</p>
                  <p class="vc-desc">{{ v.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <TimelineSection id="history" />

    <section id="features" class="section section-white reveal-section">
      <div class="container">
        <div class="section-header center">
          <div class="title-line" style="margin: 0 auto 16px" />
          <p class="section-sub">Platform Features</p>
          <h2 class="section-title">Platform Highlights</h2>
          <p class="section-desc">ghkax builds an efficient, compliant, low-cost asset trading ecosystem on four core capabilities</p>
        </div>
        <div class="features-grid">
          <div v-for="(f, idx) in features" :key="f.title" class="feature-card">
            <div class="fc-number">{{ String(idx + 1).padStart(2, '0') }}</div>
            <div class="fc-icon-wrap"><span class="fc-icon">{{ f.icon }}</span></div>
            <h3 class="fc-title">{{ f.title }}</h3>
            <p class="fc-desc">{{ f.desc }}</p>
            <ul class="fc-points">
              <li v-for="p in f.points" :key="p">{{ p }}</li>
            </ul>
          </div>
        </div>
        <div class="features-footer">
          <div v-for="s in featureStats" :key="s.label" class="ff-item">
            <strong>{{ s.value }}</strong>
            <span>{{ s.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <section id="cooperation" class="section section-soft reveal-section">
      <div class="container">
        <div class="section-header center">
          <div class="title-line" style="margin: 0 auto 16px" />
          <p class="section-sub">Win-Win Cooperation</p>
          <h2 class="section-title">Partnership Value</h2>
          <p class="section-desc">End-to-end empowerment for partner financial institutions to capture growth together</p>
        </div>
        <div class="coop-grid">
          <div v-for="c in coopCards" :key="c.num" class="coop-card">
            <div class="cc-header">
              <span class="cc-num">{{ c.num }}</span>
              <h3 class="cc-title">{{ c.title }}</h3>
            </div>
            <p class="cc-desc">{{ c.desc }}</p>
            <ul class="cc-list">
              <li v-for="p in c.points" :key="p">{{ p }}</li>
            </ul>
          </div>
        </div>
        <div class="partners-section">
          <h3 class="partners-title">Partner Institution Types</h3>
          <div class="partner-types">
            <div v-for="p in partnerTypes" :key="p.label" class="pt-card">
              <span class="pt-icon">{{ p.icon }}</span>
              <span class="pt-label">{{ p.label }}</span>
            </div>
          </div>
        </div>
        <div class="coop-cta">
          <RouterLink to="/contact" class="primary-btn">Apply to Partner</RouterLink>
          <RouterLink to="/cooperation" class="ghost-btn">View Detailed Plans</RouterLink>
        </div>
      </div>
    </section>

    <section class="section section-dark data-section reveal-section">
      <div class="container">
        <div class="section-header center">
          <p class="section-sub" style="color: var(--gold)">Platform Data</p>
          <h2 class="section-title" style="color: #fff">Platform Key Metrics</h2>
        </div>
        <div class="data-grid">
          <div v-for="d in dataCards" :key="d.label" class="data-card">
            <div class="data-num">{{ d.num }}</div>
            <div class="data-label">{{ d.label }}</div>
            <div class="data-sub">{{ d.sub }}</div>
          </div>
        </div>
        <div class="data-cta">
          <RouterLink to="/contact" class="gold-btn">Talk Partnership Now →</RouterLink>
        </div>
      </div>
    </section>

    <section class="section section-white reveal-section">
      <div class="container">
        <div class="section-header center">
          <div class="title-line" style="margin: 0 auto 16px" />
          <p class="section-sub">Business Value</p>
          <h2 class="section-title">Why Choose ghkax</h2>
          <p class="section-desc">One-stop platform empowerment for institutional partners — full products, lower cost, higher efficiency</p>
        </div>
        <div class="grid grid-4">
          <div v-for="w in whyCards" :key="w.title" class="card why-card">
            <div class="why-icon">{{ w.icon }}</div>
            <h3 class="why-title">{{ w.title }}</h3>
            <p class="why-desc">{{ w.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-soft reveal-section">
      <div class="container">
        <div class="section-header center">
          <p class="section-sub">Explore More</p>
          <h2 class="section-title">Explore the Full Platform</h2>
        </div>
        <div class="grid grid-3 module-grid">
          <RouterLink v-for="m in modules" :key="m.to" :to="m.to" class="module-card">
            <div class="mc-icon">{{ m.icon }}</div>
            <h3>{{ m.title }}</h3>
            <p>{{ m.desc }}</p>
            <span class="mc-arrow">→</span>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped src="../styles/home.css"></style>
