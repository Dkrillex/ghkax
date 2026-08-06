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
  { id: 'overview', label: '公司概述' },
  { id: 'history', label: '發展歷史' },
  { id: 'features', label: '平臺特色' },
  { id: 'cooperation', label: '合作價值' },
]

const values = [
  { zh: '通達合規', en: 'Connectivity & Accessibility', desc: '連接全球資產與投資者的橋梁，實現股票、債券等穩健資產配置，通過高效便捷' },
  { zh: '誠信基礎', en: 'Integrity & Trust', desc: '誠信是交易的基石，我們以嚴謹的道德準則、透明運作和堅實可靠的交易保障' },
  { zh: '創新敏捷', en: 'Innovation & Agility', desc: '勇於進取，不斷突破技術與準則，將數字化產品適應性強，靈活應對投資者需求' },
  { zh: '穩健合規', en: 'Stability & Compliance', desc: '追求穩健和高效同時，將風險管控和合規運營放在首位，以確保資產安全交易穩健' },
]

const dataCards = [
  { num: '60+', label: '合作金融機構', sub: '目標 2027 年達 250+' },
  { num: '140萬+', label: '線上零售客戶', sub: '目標 2027 年達 446萬+' },
  { num: '1.2萬+', label: 'PI 專業客戶', sub: '目標 2027 年達 3.8萬+' },
  { num: '7', label: '資產類別覆蓋', sub: '股票·債券·基金·黃金·RWA 等' },
]

const whyCards = [
  { icon: '📦', title: '產品全', desc: '公私募全品類：公司債、私人債、證券交易定位股票，門類齊全' },
  { icon: '👥', title: '客戶多', desc: '更多服務客戶端資產及客戶端服務，接入客戶端資產賦能' },
  { icon: '💰', title: '成本低', desc: '系統開發/維護成本低於自建，資產流通成本降低，客服運營成本壓縮' },
  { icon: '⚡', title: '效率高', desc: '直接入市、即時交易、做市匹配、即時結算，全通路服務' },
]

const features = [
  {
    icon: '🛡️',
    title: '以風控為基礎的投資理念',
    desc: '在充分控制流動性風險、信用風險與利率風險的前提下，為機構提供專業、穩健的資產服務。',
    points: ['嚴格把控三大核心風險', '獨立風控體系，持續監控', '多重合規審查機制'],
  },
  {
    icon: '📈',
    title: '豐富的市場經驗',
    desc: '深耕香港資本市場，積累多輪市場週期的實戰經驗，為機構客戶提供深度、及時的市場洞察。',
    points: ['SFC 持牌專業團隊', '多資產類別全覆蓋經驗', '跨境市場流通渠道'],
  },
  {
    icon: '🗂️',
    title: '完備的產品線',
    desc: '差異化產品設計，覆蓋股票、債券、基金、黃金、RWA 等多元資產，滿足不同機構需求。',
    points: ['股票 · 債券 · 基金 · 黃金', 'RWA 現實資產代幣化', 'Smart Wallet 智能錢包'],
  },
  {
    icon: '💻',
    title: '自主研發交易管理系統',
    desc: '自主開發的全棧交易系統，持續迭代升級，支持 H5、API 及定製化白標接入。',
    points: ['H5 / API / 定製白標', 'T+0/T+1 清結算能力', '銀證直連，CMU 中央託管'],
  },
]

const featureStats = [
  { value: '60+', label: '合作金融機構' },
  { value: '140萬+', label: '線上零售客戶' },
  { value: '1.2萬+', label: 'PI 專業客戶' },
  { value: '7+', label: '資產品類' },
]

const coopCards = [
  {
    num: '01',
    title: '產品全',
    desc: '依託平臺豐富的產品體系，讓合作機構快速獲得完整的資產配置能力，強化客戶服務競爭力。',
    points: ['公私募全品類：公司債、私人債、證券等', '覆蓋不同風險偏好的定製化產品', '平臺提供完整合規支持與技術接入'],
  },
  {
    num: '02',
    title: '客戶多',
    desc: '藉助平臺現有零售、PI 及機構客戶基礎，快速豐富客戶來源，提升 AUM 規模與客戶留存價值。',
    points: ['零售 / PI / 機構三層客羣資源共享', '客戶引流成本大幅降低', '平臺系統賦能，提升客戶管理效率'],
  },
  {
    num: '03',
    title: '成本低',
    desc: '系統開發/維護成本遠低於自建，資產流通成本顯著降低，客服與中後臺運營成本大幅壓縮。',
    points: ['系統接入成本極低，快速上線', '資產流通與託管綜合成本下降', '減少冗餘中間商環節的運營費用'],
  },
  {
    num: '04',
    title: '賺更多',
    desc: '通過 DCM 債券承銷分發、FICC 做市、AUM 增長及投融資業務擴展，開闢多元盈利渠道。',
    points: ['DCM 債券承銷、分發手續費', 'FICC 產品做市收益擴張', 'AUM 增長驅動管理費與分成收益'],
  },
]

const partnerTypes = [
  { icon: '🏦', label: '商業銀行' },
  { icon: '📋', label: '證券公司' },
  { icon: '💼', label: '資產管理公司' },
  { icon: '🏢', label: '家族辦公室' },
  { icon: '🌐', label: '國際券商' },
  { icon: '📊', label: 'Market Maker' },
]

const modules = [
  { to: '/about', icon: '🏢', title: '平臺介紹', desc: 'HKAX 背景、核心定位與合規資質' },
  { to: '/ecosystem', icon: '🌐', title: '平臺生態', desc: '經紀商、金融機構與終端客戶共同參與' },
  { to: '/platform-features', icon: '⚙️', title: '平臺功能', desc: '交易、做市、清結算與資產管理' },
  { to: '/advantages', icon: '🚀', title: '核心優勢', desc: '門類齊全、成本低、效率高、合規保障' },
  { to: '/cooperation', icon: '🤝', title: '合作價值', desc: '賦能金融機構的產品供給、分銷與客戶維護' },
  { to: '/contact', icon: '📞', title: '聯繫我們', desc: '聯繫方式、地址與合作諮詢' },
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
            全通資產交易平臺
            <br />
            <span class="hero-title-en">HKAX · Embracing Future</span>
          </h1>
          <p class="hero-desc">
            HKAX 持牌於香港證監會（SFC），為機構客戶及散戶客戶提供全方位智能化交易平臺服務，以穩健高效、推動金融科技進步，覆蓋股票、債券、基金、黃金及存款證等多資產一站式交易、託管與清結算服務。
          </p>
          <div class="hero-actions">
            <RouterLink to="/contact" class="primary-btn">預約洽談</RouterLink>
            <RouterLink to="/about" class="ghost-btn">瞭解平臺</RouterLink>
          </div>
          <div class="hero-stats">
            <div class="stat-item">
              <strong>60<span class="stat-unit">+</span></strong>
              <span>金融機構</span>
            </div>
            <div class="stat-divider" />
            <div class="stat-item">
              <strong>140<span class="stat-unit">萬+</span></strong>
              <span>線上零售客戶</span>
            </div>
            <div class="stat-divider" />
            <div class="stat-item">
              <strong>1.2<span class="stat-unit">萬+</span></strong>
              <span>PI 專業客戶</span>
            </div>
          </div>
        </div>
        <div class="hero-right reveal reveal-delay">
          <div class="hero-card-grid">
            <div class="hero-feature-card primary-card">
              <div class="fc-icon">📊</div>
              <h4>多資產覆蓋</h4>
              <p>股票、債券、基金、黃金、RWA 等全品類</p>
            </div>
            <div class="hero-feature-card">
              <div class="fc-icon">⚡</div>
              <h4>即時交易</h4>
              <p>T+0/T+1 清結算，銀證直連</p>
            </div>
            <div class="hero-feature-card">
              <div class="fc-icon">🔐</div>
              <h4>安全託管</h4>
              <p>CMU 中央託管，合規保障</p>
            </div>
            <div class="hero-feature-card">
              <div class="fc-icon">🔗</div>
              <h4>靈活接入</h4>
              <p>H5 / API / 定製化白標接入</p>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-hint">
        <span>向下探索</span>
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
            <h2 class="section-title">公司概述</h2>
            <p class="overview-para">
              全通資產交易（香港）有限公司（簡稱全通資產/HKAX）是 SFC 持牌一類牌照券商，以「穩健高效、推動金融科技進步」為使命，為機構客戶及散戶客戶提供全方位智能化交易平臺服務。
            </p>
            <p class="overview-para">
              HKAX 秉持嚴謹、高效、公平、創新、穩健、合規的核心價值觀，提供股票、債券、基金、黃金及穩健證券等綜合服務，通過資產發行、證券交易、投資管理、實時理財等全金融服務發行。
            </p>
            <div class="overview-tags">
              <span class="tag">📋 SFC 持牌</span>
              <span class="tag">🌏 穩健高效</span>
              <span class="tag">💹 多資產覆蓋</span>
              <span class="tag">🔒 合規保障</span>
            </div>
            <RouterLink to="/about" class="primary-btn mt-6 inline-btn">詳細介紹</RouterLink>
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
          <h2 class="section-title">平臺特色</h2>
          <p class="section-desc">HKAX 以四大核心能力，構建高效、合規、低成本的資產交易生態</p>
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
          <h2 class="section-title">合作價值</h2>
          <p class="section-desc">為合作金融機構提供全方位賦能，共同把握增長機遇</p>
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
          <h3 class="partners-title">合作機構類型</h3>
          <div class="partner-types">
            <div v-for="p in partnerTypes" :key="p.label" class="pt-card">
              <span class="pt-icon">{{ p.icon }}</span>
              <span class="pt-label">{{ p.label }}</span>
            </div>
          </div>
        </div>
        <div class="coop-cta">
          <RouterLink to="/contact" class="primary-btn">立即申請合作</RouterLink>
          <RouterLink to="/cooperation" class="ghost-btn">查看詳細方案</RouterLink>
        </div>
      </div>
    </section>

    <section class="section section-dark data-section reveal-section">
      <div class="container">
        <div class="section-header center">
          <p class="section-sub" style="color: var(--gold)">Platform Data</p>
          <h2 class="section-title" style="color: #fff">平臺核心數據</h2>
        </div>
        <div class="data-grid">
          <div v-for="d in dataCards" :key="d.label" class="data-card">
            <div class="data-num">{{ d.num }}</div>
            <div class="data-label">{{ d.label }}</div>
            <div class="data-sub">{{ d.sub }}</div>
          </div>
        </div>
        <div class="data-cta">
          <RouterLink to="/contact" class="gold-btn">立即洽談合作 →</RouterLink>
        </div>
      </div>
    </section>

    <section class="section section-white reveal-section">
      <div class="container">
        <div class="section-header center">
          <div class="title-line" style="margin: 0 auto 16px" />
          <p class="section-sub">Business Value</p>
          <h2 class="section-title">為什麼選擇 HKAX</h2>
          <p class="section-desc">為機構合作方提供產品全、成本低、效率高的一站式平臺賦能</p>
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
          <h2 class="section-title">探索平臺全貌</h2>
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
