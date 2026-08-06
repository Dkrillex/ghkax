<script setup lang="ts">
import login2 from '../assets/login2.png'
</script>

<template>
  <footer class="site-footer">
    <div class="footer-main">
      <div class="container footer-main-inner">
        <div class="footer-brand">
          <div class="footer-logo">
            <img :src="login2" alt="HKAX 全通資產交易" class="fl-img" />
          </div>
          <p class="footer-tagline">
            聚焦產品門類、機構數量與線上客戶規模，打造覆蓋零售客戶、PI 專業投資者與金融機構的綜合型資產交易平台。
          </p>
          <div class="footer-contact">
            <div class="fc-item">
              <span class="fc-label">電話</span>
              <a href="tel:+85237976308">+852 3797 6308</a>
            </div>
            <div class="fc-item">
              <span class="fc-label">地址</span>
              <span>香港 九龍灣 企業廣場三期 41 樓</span>
            </div>
            <div class="fc-item">
              <span class="fc-label">監管</span>
              <span>香港證監會（SFC）持牌證券商</span>
            </div>
          </div>
        </div>

        <div class="footer-nav-col">
          <h4 class="fn-title">平台介紹</h4>
          <ul class="fn-list">
            <li><RouterLink to="/about">公司概述</RouterLink></li>
            <li><RouterLink to="/ecosystem">平台生態</RouterLink></li>
            <li><RouterLink to="/platform-features">平台功能</RouterLink></li>
          </ul>
        </div>

        <div class="footer-nav-col">
          <h4 class="fn-title">平台服務</h4>
          <ul class="fn-list">
            <li><RouterLink to="/advantages">核心優勢</RouterLink></li>
            <li><RouterLink to="/cooperation">合作價值</RouterLink></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-risk">
      <div class="container">
        <p>
          ⚠️ 本網站內容僅供參考，不構成投資建議。投資涉及風險，過往表現並不代表未來表現。投資者在作出任何投資決定前應審慎考慮自身情況及諮詢獨立專業意見。
        </p>
      </div>
    </div>

    <div class="footer-copyright">
      <div class="container footer-copyright-inner">
        <div class="fc-left">
          <span>© 2026 全通資產交易平台（HKAX）版權所有</span>
          <span class="fc-dot">·</span>
          <a href="#">投資者須知</a>
          <span class="fc-dot">·</span>
          <a href="#">風險揭示</a>
          <span class="fc-dot">·</span>
          <RouterLink to="/account-deletion">刪除帳戶</RouterLink>
          <span class="fc-dot">·</span>
          <RouterLink to="/privacy-policy">隱私政策</RouterLink>
        </div>
        <div class="fc-right">
          <span>香港證監會（SFC）持牌證券商</span>
        </div>
      </div>
    </div>
  </footer>
</template>
