<script setup lang="ts">
import TimelineSection from '../components/TimelineSection.vue'

const values = [
  { icon: '🌐', zh: 'Boundless Connectivity', en: 'Connectivity & Accessibility', desc: 'Break down barriers across asset classes and markets, enabling free circulation and efficient allocation of equities, bonds, gold, and more.' },
  { icon: '🤝', zh: 'Integrity First', en: 'Integrity & Trust', desc: 'As the cornerstone of financial trading, we uphold the highest ethical standards to ensure transparent transactions, authentic data, and reliable settlement.' },
  { icon: '💡', zh: 'Innovation Driven', en: 'Innovation & Agility', desc: 'With a progressive mindset, we continuously iterate trading technology and financial products to meet rapidly evolving market needs.' },
  { icon: '🛡️', zh: 'Stable & Enduring', en: 'Stability & Compliance', desc: 'While pursuing convenience and efficiency, we put risk management and compliant operations first to ensure secure custody, settlement, and long-term stability.' },
]
</script>

<template>
  <div class="page">
    <section class="page-hero">
      <div class="container page-hero-inner">
        <div class="ph-breadcrumb">Home / About</div>
        <h1 class="ph-title">About the Platform</h1>
        <p class="ph-desc">
          ghkax Limited (ghkax) is an SFC Type 1 licensed broker, with a mission of “stable efficiency and advancing financial technology,” providing comprehensive intelligent trading platform services for institutional and retail clients.
        </p>
      </div>
    </section>

    <section class="section section-white">
      <div class="container">
        <div class="section-header">
          <div class="title-line" />
          <p class="section-sub">Corporate Overview</p>
          <h2 class="section-title">Company Overview</h2>
        </div>
        <div class="grid grid-2">
          <div class="card about-card">
            <div class="ac-icon">🏛️</div>
            <h3>Company Background</h3>
            <p>
              ghkax Limited (ghkax) is an SFC Type 1 licensed broker, with a mission of “stable efficiency and advancing financial technology,” providing comprehensive intelligent trading platform services for institutional and retail clients. Guided by rigorous, efficient, fair, innovative, stable, and compliant core values, we are committed to building a full-spectrum asset trading platform.
            </p>
          </div>
          <div class="card about-card">
            <div class="ac-icon">🎯</div>
            <h3>Platform Positioning</h3>
            <p>
              We offer comprehensive services across equities, bonds, funds, gold, and stable securities, spanning asset issuance, securities trading, and investment management—serving retail clients, PI professional investors, and financial institutions.
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
          <h2 class="section-title">Core Values</h2>
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
