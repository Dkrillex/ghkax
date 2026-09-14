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
  alert(`Submitted successfully!\nName: ${form.name}\nContact: ${form.contact}\nWe will get back to you shortly.`)
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
        <div class="ph-breadcrumb">Home / Contact</div>
        <h1 class="ph-title">Contact Us</h1>
        <p class="ph-desc">Book a consultation or leave a message online — we will get back to you shortly to explore partnership opportunities.</p>
      </div>
    </section>

    <section class="section section-white">
      <div class="container contact-layout">
        <div class="contact-info-panel">
          <div class="section-header">
            <div class="title-line" />
            <p class="section-sub">Contact Info</p>
            <h2 class="section-title">Contact Details</h2>
          </div>
          <div class="info-items">
            <div class="info-item">
              <div class="ii-icon">📞</div>
              <div>
                <div class="ii-label">Phone</div>
                <a href="tel:+85237976308" class="ii-val">+852 3797 6308</a>
              </div>
            </div>
            <div class="info-item">
              <div class="ii-icon">📍</div>
              <div>
                <div class="ii-label">Address</div>
                <span class="ii-val">
                  41/F, Enterprise Square Three, 39 Wang Chiu Road, Kowloon Bay, Kowloon, Hong Kong
                </span>
              </div>
            </div>
            <div class="info-item">
              <div class="ii-icon">🏛️</div>
              <div>
                <div class="ii-label">Regulation</div>
                <span class="ii-val">SFC (Hong Kong) licensed securities dealer</span>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-form-panel card">
          <h3 class="form-title">Online Inquiry</h3>
          <p class="form-sub">Fill in the form below and our business team will reply within 1 business day.</p>
          <form class="contact-form" @submit.prevent="submit">
            <div class="form-row">
              <div class="form-field">
                <label>Name <em>*</em></label>
                <input v-model="form.name" type="text" required placeholder="Enter your name" />
              </div>
              <div class="form-field">
                <label>Company</label>
                <input v-model="form.company" type="text" placeholder="Enter company name" />
              </div>
            </div>
            <div class="form-field">
              <label>Contact <em>*</em></label>
              <input v-model="form.contact" type="text" required placeholder="Phone or email" />
            </div>
            <div class="form-field">
              <label>Partnership Intent</label>
              <select v-model="form.intent">
                <option value="">Select partnership type</option>
                <option>Institutional partnership (Bank / Broker)</option>
                <option>DCM bond underwriting</option>
                <option>Asset management (family office)</option>
                <option>Proprietary investment / market making</option>
                <option>Other inquiry</option>
              </select>
            </div>
            <div class="form-field">
              <label>Message <em>*</em></label>
              <textarea
                v-model="form.message"
                rows="5"
                required
                placeholder="Describe your needs or questions..."
              />
            </div>
            <button type="submit" class="primary-btn submit-btn">Submit Inquiry →</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped src="../styles/contact.css"></style>
