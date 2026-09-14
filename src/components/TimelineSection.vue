<script setup lang="ts">
defineOptions({ inheritAttrs: false })
const props = defineProps<{ id?: string }>()

const items = [
  { year: 'ghkax', tag: '', title: 'Licensing & Compliance', points: ['Hong Kong SFC: Type 1 licence (securities brokerage)', 'Hong Kong Customs: gold reporting'] },
  {
    year: 'Licence Upgrade',
    tag: '(In Progress)',
    title: 'Extended Licences & Asset Support',
    points: ['VASP: digital asset services (in progress)', 'Asset-backed digital credentials (RWA)', 'Automated bond trading (Type 7 licence)'],
  },
  {
    year: 'Product Lines',
    tag: '',
    title: 'Diversified Product Suite',
    points: [
      'iStock (HK / US / A-shares)',
      'Smart Wallet (CDs · demand)',
      'i-Gold (physical / retail)',
      'Bond Trading (real-time)',
      'Fund Trading (unit real-time)',
    ],
  },
  {
    year: '2026',
    tag: 'Target',
    title: 'Platform Participants & Active Users (Target)',
    points: ['Financial institutions 60+', 'Retail clients 1.4M+', 'PI professional clients 12K+'],
  },
  {
    year: '2027',
    tag: 'Target',
    title: 'Scale Targets (Expected)',
    points: ['Financial institutions 250+', 'Retail clients 4.46M+', 'PI professional clients 38K+'],
  },
  {
    year: 'Upcoming',
    tag: '',
    title: 'Planned Projects (Go-live in 2027)',
    points: ['HomeEasy (electronic trading of residential assets)', 'PolicyEasy (electronic trading of savings policies)'],
  },
]
</script>

<template>
  <section :id="props.id" class="section section-soft reveal-section" v-bind="$attrs">
    <div class="container">
      <div class="section-header center">
        <div class="title-line" style="margin: 0 auto 16px" />
        <p class="section-sub">Development History</p>
        <h2 class="section-title">Development History</h2>
        <p class="section-desc">From a licensed securities broker to a multi-asset trading platform, ghkax continues to expand its service boundaries</p>
      </div>
      <div class="timeline-container">
        <div class="timeline-line" />
        <div
          v-for="(item, idx) in items"
          :key="item.year"
          class="timeline-item"
          :class="{ right: idx % 2 === 1 }"
        >
          <div class="timeline-node">
            <span class="timeline-year">{{ item.year }}</span>
          </div>
          <div class="timeline-card">
            <div class="tc-dot" />
            <div v-if="item.tag" class="tc-tag">{{ item.tag }}</div>
            <h4 class="tc-title">{{ item.title }}</h4>
            <ul class="tc-list">
              <li v-for="p in item.points" :key="p">{{ p }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped src="../styles/timeline.css"></style>
