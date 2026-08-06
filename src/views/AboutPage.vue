<script setup lang="ts">
import TimelineSection from '../components/TimelineSection.vue'

const values = [
  { icon: '🌐', zh: '通達無界', en: 'Connectivity & Accessibility', desc: '打破資產類別與市場區域的界限，實現股票、債券、黃金等多資產的自由流通與高效配置。' },
  { icon: '🤝', zh: '誠信為本', en: 'Integrity & Trust', desc: '作為金融交易的基石，我們堅持最高的道德標準，確保交易透明、數據真實、履約可靠。' },
  { icon: '💡', zh: '創新驅動', en: 'Innovation & Agility', desc: '以進取精神，不斷迭代交易技術與金融產品，以適應快速變化的市場需求。' },
  { icon: '🛡️', zh: '穩健致遠', en: 'Stability & Compliance', desc: '在追求便捷和高效的同時，將風險管理與合規運營置於首位，確保資產託管、交易結算安全、行穩致遠。' },
]
</script>

<template>
  <div class="page">
    <section class="page-hero">
      <div class="container page-hero-inner">
        <div class="ph-breadcrumb">首頁 / 平臺介紹</div>
        <h1 class="ph-title">平臺介紹</h1>
        <p class="ph-desc">
          全通資產交易（香港）有限公司（簡稱全通資產/HKAX）是 SFC 持牌一類牌照券商，以「穩健高效、推動金融科技進步」為使命，為機構客戶及散戶客戶提供全方位智能化交易平臺服務。
        </p>
      </div>
    </section>

    <section class="section section-white">
      <div class="container">
        <div class="section-header">
          <div class="title-line" />
          <p class="section-sub">Corporate Overview</p>
          <h2 class="section-title">公司概述</h2>
        </div>
        <div class="grid grid-2">
          <div class="card about-card">
            <div class="ac-icon">🏛️</div>
            <h3>公司背景</h3>
            <p>
              全通資產交易（香港）有限公司（簡稱全通資產/HKAX）是 SFC 持牌一類牌照券商，以「穩健高效、推動金融科技進步」為使命，為機構客戶及散戶客戶提供全方位智能化交易平臺服務。秉持嚴謹、高效、公平、創新、穩健、合規的核心價值觀，致力打造全方位資產交易平臺。
            </p>
          </div>
          <div class="card about-card">
            <div class="ac-icon">🎯</div>
            <h3>平臺定位</h3>
            <p>
              提供股票、債券、基金、黃金及穩健證券等綜合服務，通過資產發行、證券交易、投資管理等全金融服務發行，服務零售客戶、PI 專業投資者及金融機構三大客羣。
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-soft">
      <div class="container">
        <div class="section-header center">
          <div class="title-line" style="margin: 0 auto 16px" />
          <p class="section-sub">Core Values</p>
          <h2 class="section-title">核心價值</h2>
        </div>
        <div class="grid grid-4">
          <div v-for="v in values" :key="v.en" class="card value-card">
            <div class="vc-icon">{{ v.icon }}</div>
            <h4>{{ v.zh }}</h4>
            <p class="vc-en-text">{{ v.en }}</p>
            <p>{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <TimelineSection id="history" />
  </div>
</template>

<style scoped src="../styles/about.css"></style>
