<script setup lang="ts">
defineOptions({ inheritAttrs: false })
const props = defineProps<{ id?: string }>()

const items = [
  { year: 'HKAX', tag: '', title: '持牌與合規', points: ['香港證監會：1 號牌（證券經紀）', '香港海關：黃金報備'] },
  {
    year: '牌照升級',
    tag: '(申請中)',
    title: '延伸牌照與資產支持',
    points: ['VASP：數字資產服務（申請中）', '資產支持數字憑證（RWA）', '債券自動化交易（7 號牌）'],
  },
  {
    year: '產品板塊',
    tag: '',
    title: '多元產品線',
    points: [
      'iStock（港、美、A 股）',
      '活利得（存款證 - 活期）',
      '愛黃金（實物 / 零售）',
      '債券易（債券 即時交易）',
      '基金易（份額 即時交易）',
    ],
  },
  {
    year: '2026',
    tag: '預期',
    title: '平臺參與者與活躍用戶（預期）',
    points: ['金融機構 60+', '零售客戶 140 萬+', 'PI 專業客戶 1.2 萬+'],
  },
  {
    year: '2027',
    tag: '預期',
    title: '規模目標（預期）',
    points: ['金融機構 250+', '零售客戶 446 萬+', 'PI 專業客戶 3.8 萬+'],
  },
  {
    year: '待投產',
    tag: '',
    title: '規劃中項目（2027 年投產）',
    points: ['住宅易（住宅資產電子化交易）', '保單易（儲蓄型保單電子化交易）'],
  },
]
</script>

<template>
  <section :id="props.id" class="section section-soft reveal-section" v-bind="$attrs">
    <div class="container">
      <div class="section-header center">
        <div class="title-line" style="margin: 0 auto 16px" />
        <p class="section-sub">Development History</p>
        <h2 class="section-title">發展歷史</h2>
        <p class="section-desc">從持牌証券商到多資產綜合交易平臺，HKAX 持續拓展服務邊界</p>
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
