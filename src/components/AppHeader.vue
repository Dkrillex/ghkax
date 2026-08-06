<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import loginLogo from '../assets/login.png'

const mobileOpen = ref(false)
const scrolled = ref(false)
const tradeBase = computed(() => 'https://trade.hkax.com.hk/')
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
          <RouterLink to="/contact" class="top-link">聯繫我們</RouterLink>
          <span class="top-divider">|</span>
          <span class="top-hotline">☎ &nbsp;+852 3797 6308</span>
        </div>
      </div>
    </div>

    <div class="main-nav-wrap">
      <div class="container main-nav-inner">
        <RouterLink to="/" class="logo-wrap" aria-label="首頁">
          <img :src="loginLogo" alt="HKAX" class="logo-img" />
        </RouterLink>

        <nav class="nav-menu" role="navigation" aria-label="主導航">
          <RouterLink to="/" class="nav-item">首頁</RouterLink>
          <div class="nav-item has-dropdown">
            <span>平臺介紹 <i class="arrow-down">▾</i></span>
            <div class="dropdown">
              <RouterLink to="/about" class="dropdown-item">
                <strong>公司概述</strong>
                <small>HKAX 背景與核心定位</small>
              </RouterLink>
              <RouterLink to="/platform-features" class="dropdown-item">
                <strong>平臺功能</strong>
                <small>交易、清算、託管全鏈路</small>
              </RouterLink>
            </div>
          </div>
          <RouterLink to="/ecosystem" class="nav-item">平臺生態</RouterLink>
          <RouterLink to="/advantages" class="nav-item">核心優勢</RouterLink>
          <RouterLink to="/products" class="nav-item">平臺產品</RouterLink>
          <RouterLink to="/cooperation" class="nav-item">合作價值</RouterLink>
          <RouterLink to="/contact" class="nav-item">聯繫我們</RouterLink>
        </nav>

        <div class="header-actions">
          <span class="mobile-link primary-btn btn-sm" @click="openTrade">交易登錄</span>
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
            <RouterLink to="/" class="mobile-link" @click="mobileOpen = false">首頁</RouterLink>
            <RouterLink to="/about" class="mobile-link" @click="mobileOpen = false">公司概述</RouterLink>
            <RouterLink to="/ecosystem" class="mobile-link" @click="mobileOpen = false">平臺生態</RouterLink>
            <RouterLink to="/platform-features" class="mobile-link" @click="mobileOpen = false">平臺功能</RouterLink>
            <RouterLink to="/advantages" class="mobile-link" @click="mobileOpen = false">核心優勢</RouterLink>
            <RouterLink to="/products" class="mobile-link" @click="mobileOpen = false">平臺產品</RouterLink>
            <RouterLink to="/cooperation" class="mobile-link" @click="mobileOpen = false">合作價值</RouterLink>
            <RouterLink to="/contact" class="mobile-link" @click="mobileOpen = false">聯繫我們</RouterLink>
          </div>
          <div class="mobile-footer">
            <a
              :href="tradeUrl"
              target="_blank"
              rel="noopener"
              class="mobile-link"
              @click="mobileOpen = false"
            >交易平臺</a>
            <RouterLink
              to="/contact"
              class="primary-btn"
              style="width: 100%; justify-content: center"
              @click="mobileOpen = false"
            >預約洽談</RouterLink>
            <p class="mobile-tel">☎ +852 3797 6308</p>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>
