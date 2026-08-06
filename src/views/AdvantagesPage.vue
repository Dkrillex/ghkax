<script setup lang="ts">
const left = [
  { title: '產品豐富，一站滿足', descs: ['門類全 選擇多', '涵蓋各種類型客戶的需求'] },
  { title: '收費低廉 能免皆免', descs: ['無中介／無差價 傭金返還', '免造戶費／免託管費／免服務費'] },
  { title: '友好界面 高效對接', descs: ['HTTPS/JSON對接', '可選H5或API定製化開發'] },
]

const right = [
  { title: '客戶體驗 前所未有', descs: ['客戶自主交易', '門檻低／效率高／流動性好'] },
  { title: '牌照通路 平臺共用', descs: ['跨境額度 跨境理財通', '資產端／資金端 牌照通路共用'] },
  { title: '科技賦能 合作共贏', descs: ['提供系統外包開發維護', '僅工具／外包不觸碰客戶資訊'] },
]

const digitalTags = [
  [
    { label: '直接', desc: '線上互見 直接交易' },
    { label: '便捷', desc: '隨時隨地 隨心所欲' },
    { label: '智能', desc: '自動匹配 最優價格' },
  ],
  [
    { label: '高效', desc: '自主交易 即時結算' },
    { label: '友好', desc: '介面清晰 所見所得' },
    { label: '安全', desc: '銀行託管 資產安全' },
  ],
]

const inclusiveTags = [
  [
    { label: '去門檻', desc: '終端客戶 千元起購' },
    { label: '破壟斷', desc: '散戶團購 享批發價' },
    { label: '享科技', desc: '智能分析 系統匹配' },
  ],
  [
    { label: '真便捷', desc: '省卻中間 即時交收' },
    { label: '低成本', desc: '無差價 免費用 免傭金' },
    { label: '保安全', desc: '科技領先 保障安全' },
  ],
]
</script>

<template>
  <div class="page">
    <section class="page-hero">
      <div class="container page-hero-inner">
        <div class="ph-breadcrumb">首頁 / 核心優勢</div>
        <h1 class="ph-title">
          Platform Advantages<br>
          <span class="ph-title-zh">平臺優勢</span>
        </h1>
        <p class="ph-tagline">HKAX，Embracing Future  |  全通資產 擁抱未來</p>
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
            <h3>根植香港</h3>
            <p>依託香港國際金融中心制度優勢，市場優勢，品種齊全，建設「用戶友好、品種齊全、高效低耗」的交易平臺。</p>
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
            <h3>數字金融</h3>
            <p>科技驅動、智能交易—直接對接、智能匹配最優價；中央託管、即時結算；品種齊全、綜合賬戶。</p>
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
            <h3>普惠金融</h3>
            <p>打破門檻與壟斷——零售客戶千元起購，散戶團購享批發價；系統智能分析，省去中間環節，低成本交易，科技保障全程安全。</p>
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
              <div class="cc-label">同業比較</div>
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
        <h2 class="tag-section-title">數字金融</h2>
        <div class="tag-rows">
          <div v-for="row in digitalTags" :key="row[0].label" class="tag-row">
            <div v-for="tag in row" :key="tag.label" class="tag-item">
              <span class="tag-key">{{ tag.label }}</span>
              <span class="tag-val">{{ tag.desc }}</span>
            </div>
          </div>
        </div>
        <h2 class="tag-section-title mt-section">普惠金融</h2>
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
