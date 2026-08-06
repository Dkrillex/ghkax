<script setup lang="ts">
const winwinTop = [
  {
    num: '01',
    title: '產品全',
    points: [
      '門類齊：股+債；公募私募；證券化、數位化票據',
      '選擇多：各種發行主體、久期、收益風險組合、定活二便。',
      '平臺自帶流動性。',
      '金融機構接入平臺，即在産品供應及次級市場流動性方面，獲強大賦能！',
    ],
  },
  {
    num: '02',
    title: '客戶多',
    points: [
      '活躍現有客戶（避免銷戶）',
      '引流新增客戶，提升客戶體驗。',
      '共富客戶資源新概念：平臺客戶為我所用/為我創造價值。',
    ],
  },
]

const winwinBottom = [
  {
    num: '03',
    title: '成本低',
    points: [
      '系統開發/運維成本大幅度降低',
      '資産發行成本降低',
      '獲客成本降低',
      '客戶服務成本降低',
      '合規及交易監控成本降低',
      '行銷推廣成本大幅降低',
    ],
  },
  {
    num: '04',
    title: '賺到錢',
    points: [
      'DCM固收産品承銷收入會大幅度增長',
      'FICC産品經紀業務傭金收入大幅度增長',
      '基於活躍客戶數及AUM的大幅度增長，融資/託管/交易收入大幅度增長',
      '投行業務/資産管理業務大幅度增長',
    ],
  },
]

const dcmPoints = [
  {
    num: '01',
    title: '專案承攬易',
    points: [
      '標準化大類專案模式，如綠色金融/資產支持證券化，適合大規模推介發行標準透明',
      '降低溝通成本，提升成功率',
      '平臺發行，線上銷售，效率高',
    ],
  },
  {
    num: '02',
    title: '轉案來源多',
    points: [
      '平臺産品創新，吸引眾多的發行需求，供平臺DCM承銷',
      '全港50多家DCM承攬的專案，需要平臺各家共同發行、銷售平臺溝通成本低，合作效率高',
    ],
  },
  {
    num: '03',
    title: '發行易成本低',
    points: [
      '標準化發行檔案',
      '統一第三方專業機構服務採購',
      '發行效率高，發行成本大幅度下降',
    ],
  },
  {
    num: '04',
    title: '易流轉 促銷售',
    points: [
      '投資者持倉在平臺上架，次級市場流轉效率高',
      '平臺持倉自帶流動性，回報要求降低',
      '做市商及結構化發行，大幅增加次級市場流動性',
    ],
  },
]

const investPoints = [
  {
    num: '01',
    title: '低成本融入資金',
    points: [
      '固定收益金融債做底層，在平臺發活期産品，融入低成本資金',
      '資産為定期高息/負債為活期低息',
    ],
  },
  {
    num: '02',
    title: '批發轉零售賺差價',
    points: [
      '大手買入金融債券/國債，在平臺零售賣出，批發轉零售，賺差價',
      '自營持倉無風險套利',
    ],
  },
  {
    num: '03',
    title: '標準化產品 低風險配資',
    points: [
      '平臺提供産品組合融資方案，配合動態盯市調整融資比率，利於券商敞做融資業務有效管理風險',
      '平臺標準化産品，券商可極低成本，批量獲客',
    ],
  },
  {
    num: '04',
    title: '可選産品多 組織者費用低',
    points: [
      '平臺彙集各類發行主體、信用等級、産品條款的産品，可選産品多、配資門檻低',
      '平臺買方無任何費用，組織者效率高，費用低',
    ],
  },
]

const partnerBenefits = [
  {
    num: '01',
    title: '產品服務穩健交易',
    desc: '平臺產品持續性接入平臺可快速獲得完整產品供給，散戶及散戶全穩健交易。',
  },
  {
    num: '02',
    title: '資產端全面',
    desc: '散戶端全面接入通路，債券交易 T+0 交易，散戶端即時交易及散戶端一鍵通、一頁通。',
  },
  {
    num: '03',
    title: '長期管控高效',
    desc: '全球穩健增長管控風控流程，即時計算，即時交易，長期管控高效。',
  },
  {
    num: '04',
    title: '營運成本降低',
    desc: '更多散戶機構穩健系統管控，推薦投資者無需接入系統管控，成本降低。',
  },
  {
    num: '05',
    title: '一站式交易服務平臺',
    desc: '散戶端即時交易服務散戶端全面，一鍵通一頁通交易即時通達，服務散戶投資者。',
  },
]
</script>

<template>
  <div class="page">
    <section class="page-hero">
      <div class="container page-hero-inner">
        <div class="ph-breadcrumb">首頁 / 合作價值</div>
        <h1 class="ph-title">合作價值</h1>
        <p class="ph-desc">
          為銀行、券商與渠道夥伴提供產品供給、系統輸出與分銷能力，實現共贏。
        </p>
      </div>
    </section>

    <section class="section section-white">
      <div class="container">
        <div class="winwin-header">
          <div class="winwin-en">win-win<br />Cooperation</div>
          <div class="winwin-divider"></div>
          <div class="winwin-zh">
            <div class="winwin-subtitle">金融機構(銀行/券商)</div>
            <h2 class="winwin-title">合作共贏</h2>
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
          <div class="dcm-header-sub">金融機構</div>
          <h2 class="dcm-header-title">DCM債券承銷</h2>
          <div class="dcm-header-underline"></div>
        </div>
        <div class="dcm-mode-wrap">
          <div class="dcm-mode-label">DCM業務模式 發生變化</div>
          <div class="dcm-mode-flow">
            <div class="dcm-mode-old">
              <div class="dcm-mode-old-label">原業務模式</div>
              <div class="dcm-mode-old-steps">
                <div class="dcm-step">承攬</div>
                <span class="dcm-plus">+</span>
                <div class="dcm-step">承做</div>
                <span class="dcm-plus">+</span>
                <div class="dcm-step">承銷</div>
              </div>
            </div>
            <div class="dcm-arrow">→</div>
            <div class="dcm-mode-new">
              <div class="dcm-mode-new-label">現只需</div>
              <div class="dcm-step dcm-step-active">承攬 •</div>
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
          <div class="invest-header-sub">金融機構</div>
          <h2 class="invest-header-title">自營投資/做市</h2>
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
          <div class="partner-header-sub">散戶機構</div>
          <h2 class="partner-header-title">合作夥伴（散戶機構）價值</h2>
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
