<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  name: '',
  company: '',
  contact: '',
  intent: '',
  message: '',
})

function submit() {
  alert(`提交成功！\n姓名：${form.name}\n聯繫：${form.contact}\n我們將盡快與您聯繫。`)
  form.name = ''
  form.company = ''
  form.contact = ''
  form.intent = ''
  form.message = ''
}
</script>

<template>
  <div class="page">
    <section class="page-hero">
      <div class="container page-hero-inner">
        <div class="ph-breadcrumb">首頁 / 聯繫我們</div>
        <h1 class="ph-title">聯繫我們</h1>
        <p class="ph-desc">預約洽談或在線留言，我們將盡快與您聯繫，探討合作機遇。</p>
      </div>
    </section>

    <section class="section section-white">
      <div class="container contact-layout">
        <div class="contact-info-panel">
          <div class="section-header">
            <div class="title-line" />
            <p class="section-sub">Contact Info</p>
            <h2 class="section-title">聯繫方式</h2>
          </div>
          <div class="info-items">
            <div class="info-item">
              <div class="ii-icon">📞</div>
              <div>
                <div class="ii-label">電話</div>
                <a href="tel:+85237976308" class="ii-val">+852 3797 6308</a>
              </div>
            </div>
            <div class="info-item">
              <div class="ii-icon">📍</div>
              <div>
                <div class="ii-label">地址</div>
                <span class="ii-val">
                  香港九龍灣企業廣場3期41樓<br />
                  41/F,Enterprise Square Three, 39 Wang Chiu Road , Kowloon Bay,Kowloon ,Hong Kong
                </span>
              </div>
            </div>
            <div class="info-item">
              <div class="ii-icon">🏛️</div>
              <div>
                <div class="ii-label">監管</div>
                <span class="ii-val">香港證監會（SFC）持牌證券商</span>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-form-panel card">
          <h3 class="form-title">在線諮詢</h3>
          <p class="form-sub">填寫下方表單，我們的業務團隊將在 1 個工作日內回復。</p>
          <form class="contact-form" @submit.prevent="submit">
            <div class="form-row">
              <div class="form-field">
                <label>姓名 <em>*</em></label>
                <input v-model="form.name" type="text" required placeholder="請輸入您的姓名" />
              </div>
              <div class="form-field">
                <label>公司名稱</label>
                <input v-model="form.company" type="text" placeholder="請輸入公司名稱" />
              </div>
            </div>
            <div class="form-field">
              <label>聯繫方式 <em>*</em></label>
              <input v-model="form.contact" type="text" required placeholder="電話或郵箱" />
            </div>
            <div class="form-field">
              <label>合作意向</label>
              <select v-model="form.intent">
                <option value="">請選擇合作類型</option>
                <option>機構合作（銀行 / 券商）</option>
                <option>DCM 債券承銷</option>
                <option>資產管理（家族辦公室）</option>
                <option>自營投資 / 做市</option>
                <option>其他諮詢</option>
              </select>
            </div>
            <div class="form-field">
              <label>留言內容 <em>*</em></label>
              <textarea
                v-model="form.message"
                rows="5"
                required
                placeholder="請描述您的需求或問題..."
              />
            </div>
            <button type="submit" class="primary-btn submit-btn">提交諮詢 →</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped src="../styles/contact.css"></style>
