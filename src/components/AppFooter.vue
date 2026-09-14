<script setup lang="ts">
import brandLogo from '../assets/ghkax-logo.png'
</script>

<template>
  <footer class="site-footer">
    <div class="footer-main">
      <div class="container footer-main-inner">
        <div class="footer-brand">
          <div class="footer-logo">
            <img :src="brandLogo" alt="ghkax" class="fl-img" />
          </div>
          <p class="footer-tagline">
            Focused on product coverage, institutional reach, and online client scale — building a comprehensive asset trading platform for retail clients, professional investors (PI), and financial institutions.
          </p>
          <div class="footer-contact">
            <div class="fc-item">
              <span class="fc-label">Regulation</span>
              <span>Hong Kong SFC licensed securities broker</span>
            </div>
          </div>
        </div>

        <div class="footer-nav-col">
          <h4 class="fn-title">About the Platform</h4>
          <ul class="fn-list">
            <li><RouterLink to="/about">Company Overview</RouterLink></li>
            <li><RouterLink to="/ecosystem">Ecosystem</RouterLink></li>
            <li><RouterLink to="/platform-features">Platform Features</RouterLink></li>
          </ul>
        </div>

        <div class="footer-nav-col">
          <h4 class="fn-title">Platform Services</h4>
          <ul class="fn-list">
            <li><RouterLink to="/advantages">Core Advantages</RouterLink></li>
            <li><RouterLink to="/cooperation">Partnership Value</RouterLink></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-risk">
      <div class="container">
        <p>
          ⚠️ Content on this website is for reference only and does not constitute investment advice. Investment involves risk, and past performance is not indicative of future results. Investors should carefully consider their own circumstances and seek independent professional advice before making any investment decision.
        </p>
      </div>
    </div>

    <div class="footer-copyright">
      <div class="container footer-copyright-inner">
        <div class="fc-left">
          <span>© 2026 ghkax. All rights reserved.</span>
          <span class="fc-dot">·</span>
          <a href="#">Investor Notice</a>
          <span class="fc-dot">·</span>
          <a href="#">Risk Disclosure</a>
          <span class="fc-dot">·</span>
          <RouterLink to="/account-deletion">Delete Account</RouterLink>
          <span class="fc-dot">·</span>
          <RouterLink to="/privacy-policy">Privacy Policy</RouterLink>
        </div>
        <div class="fc-right">
          <span>Hong Kong SFC licensed securities broker</span>
        </div>
      </div>
    </div>
  </footer>
</template>
