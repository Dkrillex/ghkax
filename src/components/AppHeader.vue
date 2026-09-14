<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import brandLogo from '../assets/ghkax-logo.png'

const mobileOpen = ref(false)
const scrolled = ref(false)
/** Trade login / trading platform entry — temporarily hidden */
const showTradeEntry = false
const tradeBase = computed(() => 'https://trade.ghkax.com/')
const tradeUrl = computed(() => `${tradeBase.value}tradesite`)

function openTrade() {
  window.open(tradeUrl.value, '_blank')
}

function onScroll() {
  scrolled.value = window.scrollY > 30
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header class="site-header" :class="{ scrolled }">
    <div class="top-bar">
      <div class="container top-inner">
        <div class="top-left">
          <RouterLink to="/contact" class="top-link">Contact Us</RouterLink>
          <span class="top-divider">|</span>
          <span class="top-hotline">☎ &nbsp;+852 3120 8846</span>
        </div>
      </div>
    </div>

    <div class="main-nav-wrap">
      <div class="container main-nav-inner">
        <RouterLink to="/" class="logo-wrap" aria-label="ghkax Home">
          <img :src="brandLogo" alt="ghkax" class="logo-img" />
        </RouterLink>

        <nav class="nav-menu" role="navigation" aria-label="Main navigation">
          <RouterLink to="/" class="nav-item">Home</RouterLink>
          <div class="nav-item has-dropdown">
            <span>About the Platform <i class="arrow-down">▾</i></span>
            <div class="dropdown">
              <RouterLink to="/about" class="dropdown-item">
                <strong>Company Overview</strong>
                <small>ghkax background and core positioning</small>
              </RouterLink>
              <RouterLink to="/platform-features" class="dropdown-item">
                <strong>Platform Features</strong>
                <small>Trading, clearing, and custody end to end</small>
              </RouterLink>
            </div>
          </div>
          <RouterLink to="/ecosystem" class="nav-item">Ecosystem</RouterLink>
          <RouterLink to="/advantages" class="nav-item">Core Advantages</RouterLink>
          <RouterLink to="/products" class="nav-item">Products</RouterLink>
          <RouterLink to="/cooperation" class="nav-item">Partnership Value</RouterLink>
          <RouterLink to="/contact" class="nav-item">Contact Us</RouterLink>
        </nav>

        <div v-if="showTradeEntry" class="header-actions">
          <span class="mobile-link primary-btn btn-sm" @click="openTrade">Trade Login</span>
        </div>

        <button class="hamburger" aria-label="Toggle menu" @click="mobileOpen = !mobileOpen">
          <span class="bar" :class="{ 'rotate-45': mobileOpen }" />
          <span class="bar" :class="{ 'opacity-0': mobileOpen }" />
          <span class="bar" :class="{ 'rotate-n45': mobileOpen }" />
        </button>
      </div>
    </div>

    <Transition name="mobile-slide">
      <div v-if="mobileOpen" class="mobile-nav">
        <div class="mobile-nav-inner">
          <div class="mobile-section">
            <RouterLink to="/" class="mobile-link" @click="mobileOpen = false">Home</RouterLink>
            <RouterLink to="/about" class="mobile-link" @click="mobileOpen = false">Company Overview</RouterLink>
            <RouterLink to="/ecosystem" class="mobile-link" @click="mobileOpen = false">Ecosystem</RouterLink>
            <RouterLink to="/platform-features" class="mobile-link" @click="mobileOpen = false">Platform Features</RouterLink>
            <RouterLink to="/advantages" class="mobile-link" @click="mobileOpen = false">Core Advantages</RouterLink>
            <RouterLink to="/products" class="mobile-link" @click="mobileOpen = false">Products</RouterLink>
            <RouterLink to="/cooperation" class="mobile-link" @click="mobileOpen = false">Partnership Value</RouterLink>
            <RouterLink to="/contact" class="mobile-link" @click="mobileOpen = false">Contact Us</RouterLink>
          </div>
          <div class="mobile-footer">
            <a
              v-if="showTradeEntry"
              :href="tradeUrl"
              target="_blank"
              rel="noopener"
              class="mobile-link"
              @click="mobileOpen = false"
            >Trading Platform</a>
            <RouterLink
              to="/contact"
              class="primary-btn"
              style="width: 100%; justify-content: center"
              @click="mobileOpen = false"
            >Book a Meeting</RouterLink>
            <p class="mobile-tel">☎ +852 3120 8846</p>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>
