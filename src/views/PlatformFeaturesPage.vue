<script setup lang="ts">
import pfRetail from '../assets/pf-cuser-market.png'
import pfMaker from '../assets/pf-cuser-market-c.png'
import pfBroker from '../assets/pf-broker.png'

const products = [
  {
    icon: '💰',
    name: '活利得',
    en: 'SmartWallet',
    desc: '存款證 · 活期理財，多種利率選擇，靈活存取',
    tags: ['活期', '定期', '存款證 CDs'],
  },
  {
    icon: '📈',
    name: 'iStock',
    en: 'iStock',
    desc: '港股 / 美股 / A股，AH溢價指數，實時行情',
    tags: ['港股', '美股', 'A股互通'],
  },
  {
    icon: '🪙',
    name: '愛黃金',
    en: 'iGold',
    desc: '實物黃金零售，港金 / 國際金 / 上海金',
    tags: ['港金', '國際金', '上海金'],
  },
  {
    icon: '📜',
    name: '債券易',
    en: 'EasyBond',
    desc: '債券即時交易，公司債 / 金融債 / ABS',
    tags: ['公司債', '金融債', 'ABS'],
  },
  {
    icon: '📊',
    name: '基金易',
    en: 'EasyFund',
    desc: '基金份額即時交易，公募 / 私募',
    tags: ['公募基金', '私募基金', '即時交易'],
  },
]

const guards = [
  {
    icon: '🛡️',
    title: 'AML / KYC 合規保障',
    desc: '嚴格遵循反洗錢及客戶身份識別法規，保障交易安全與合規',
  },
  {
    icon: '📊',
    title: '股票(港股/美/A股)',
    desc: '港股、美股、A股互通，直接入市做市交易',
  },
  {
    icon: '⚡',
    title: '做市商義務',
    desc: '持續雙向報價，保障市場深度與流動性，撮合效率高',
  },
  {
    icon: '🔒',
    title: '即時結算',
    desc: 'T+0 即時清結算，中央託管銀行 CMU 直連，資金安全',
  },
  {
    icon: '🧠',
    title: '風控管理',
    desc: '智能風控與實時監控，動態盯市調整融資比率',
  },
  {
    icon: '🌐',
    title: '全通路服務',
    desc: 'HTTPS/JSON 接口 + H5/API 接入，直接入市即時交易',
  },
]

const techs = [
  {
    icon: '🔐',
    title: 'OAUTH 2.0 + JWT 安全認證',
    desc: '標準化安全認證協議，保障用戶身份與交易數據安全，100% 精確不漏單',
  },
  {
    icon: '📋',
    title: '網絡戶籍系統 KYC/AML',
    desc: '自動化客戶身份核實與合規審查，批量高效處理',
  },
  {
    icon: '🧮',
    title: '智能評算 風控評分',
    desc: 'AI驅動智能風控評算引擎，實時風險評估與動態調整',
  },
  {
    icon: '💼',
    title: '採購財政服務 產品分銷',
    desc: '一站式產品採購與分銷管理，支持多渠道分銷配置',
  },
  {
    icon: '⚙️',
    title: '自動化分銷設置',
    desc: '產品上架、分銷規則、費用配置全自動化，降低運營成本',
  },
  {
    icon: '✅',
    title: '直連 100% 精確不漏單',
    desc: '全直連交易處理，確保每一筆訂單精確執行，零漏單零差錯',
  },
]
</script>

<template>
  <div class="platform-features page">
    <section class="pf-hero">
      <div class="container">
        <div class="pf-hero-en">Platform Features</div>
        <h1 class="pf-hero-title">平臺功能</h1>
        <div class="pf-hero-underline"></div>
        <p class="pf-hero-desc">
          HKAX 全通資產交易平臺為三類用戶提供差異化接入與服務——C端用戶通過經紀商接入，做市商直接接入，經紀商代客交易接入。
        </p>
      </div>
    </section>

    <section class="pf-section">
      <div class="container">
        <div class="pf-sec-header">
          <span class="pf-sec-num">01</span>
          <div class="pf-sec-text">
            <h2 class="pf-sec-title">C端用戶（通過經紀商接入平臺）</h2>
            <p class="pf-sec-sub">Retail Users · Access via Broker</p>
          </div>
          <div class="pf-sec-line"></div>
        </div>
        <div class="pf-flow">
          <div class="pf-flow-node pf-flow-app">
            <div class="pf-flow-icon">📱</div>
            <h4>第三方APP</h4>
            <p>經紀商自有品牌APP</p>
          </div>
          <div class="pf-flow-arrow">→</div>
          <div class="pf-flow-node pf-flow-broker">
            <div class="pf-flow-icon">🏦</div>
            <h4>經紀商</h4>
            <p>券商/銀行</p>
          </div>
          <div class="pf-flow-arrow">→</div>
          <div class="pf-flow-node pf-flow-platform">
            <div class="pf-flow-icon">🔷</div>
            <h4>全通資產交易平臺</h4>
            <p>HKAX</p>
          </div>
          <div class="pf-flow-arrow">→</div>
          <div class="pf-flow-node pf-flow-products">
            <div class="pf-flow-icon">📦</div>
            <h4>多資產產品</h4>
            <p>一站式投資</p>
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
            <img :src="pfRetail" alt="C端用戶平臺界面" class="pf-ss-img" />
          </div>
        </div>
      </div>
    </section>

    <section class="pf-section pf-alt">
      <div class="container">
        <div class="pf-sec-header">
          <span class="pf-sec-num">02</span>
          <div class="pf-sec-text">
            <h2 class="pf-sec-title">做市商（直接接入平臺）</h2>
            <p class="pf-sec-sub">Market Maker · Direct Access</p>
          </div>
          <div class="pf-sec-line"></div>
        </div>
        <div class="pf-access-row">
          <div class="pf-access-card">
            <div class="pa-icon">🖥️</div>
            <h4>做市端 / 直接參與</h4>
            <p>做市商直接接入平臺，持續雙向報價，保障市場流動性深度</p>
          </div>
          <div class="pf-access-card">
            <div class="pa-icon">🔗</div>
            <h4>全通路接入</h4>
            <p>HTTPS/JSON 接口 · H5/API 接入 · 直接入市 · 即時交易</p>
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
            <img :src="pfMaker" alt="做市商直接接入平臺界面" class="pf-ss-img" />
          </div>
        </div>
      </div>
    </section>

    <section class="pf-section">
      <div class="container">
        <div class="pf-sec-header">
          <span class="pf-sec-num">03</span>
          <div class="pf-sec-text">
            <h2 class="pf-sec-title">經紀商(券商/銀行；代C端用戶接入平臺)</h2>
            <p class="pf-sec-sub">Broker · Agent Access</p>
          </div>
          <div class="pf-sec-line"></div>
        </div>
        <div class="pf-api-flow">
          <div class="pf-api-node pf-api-broker-app">
            <div class="pf-api-icon">📱</div>
            <h4>經紀商 APP</h4>
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
            <h4>全通資產交易平臺</h4>
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
            <img :src="pfBroker" alt="經紀商接入平臺界面" class="pf-ss-img" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped src="../styles/platform-features.css"></style>
