<script setup lang="ts">
import smartwallet from '../assets/smartwallet-visual.png'
import igold from '../assets/igold-visual.png'
import bonds from '../assets/bonds-visual.png'
import funds from '../assets/funds-visual.png'
</script>

<template>
  <div class="page">
    <section class="page-hero">
      <div class="container page-hero-inner">
        <div class="ph-breadcrumb">首頁 / 平臺產品</div>
        <h1 class="ph-title">平臺產品</h1>
        <p class="ph-desc">
          HKAX 提供多元化資產交易產品，涵蓋存款證、實物黃金、債券及基金，滿足不同客戶的投資需求。
        </p>
      </div>
    </section>

    <section class="section section-white" id="smartwallet">
      <div class="container">
        <div class="section-header">
          <div class="title-line" />
          <p class="section-sub">Smart Wallet</p>
          <h2 class="section-title"><span class="product-num"></span> 活利得 Smart Wallet</h2>
        </div>
        <div class="product-grid">
          <div class="product-info">
            <div class="info-block">
              <h4 class="info-title">核心功能</h4>
              <ul class="feature-list">
                <li>
                  <span class="icon">📋</span>
                  <div>
                    <strong>交易標的</strong>
                    <p>Bills（國債、存款證等，零售產品）。</p>
                  </div>
                </li>
                <li>
                  <span class="icon">⏱️</span>
                  <div>
                    <strong>即時交易</strong>
                    <p>支持 PI 及零售用戶隨時進出。</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="info-block">
              <h4 class="info-title">做市商義務</h4>
              <ul class="feature-list">
                <li>
                  <span class="icon">💧</span>
                  <div>
                    <strong>流動性</strong>
                    <p>做市商對賣出（發行）總額提供 100% 做市報價。</p>
                  </div>
                </li>
                <li>
                  <span class="icon">🔄</span>
                  <div>
                    <strong>持續性</strong>
                    <p>持續提供雙向報價，確保市場深度。</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="product-visual">
            <img :src="smartwallet" alt="活利得 Smart Wallet" class="visual-img" />
          </div>
        </div>
      </div>
    </section>

    <section class="section section-soft" id="igold">
      <div class="container">
        <div class="section-header">
          <div class="title-line" />
          <p class="section-sub">i-Gold</p>
          <h2 class="section-title"><span class="product-num"></span> 愛黃金 i-Gold</h2>
        </div>
        <div class="product-grid reverse">
          <div class="product-visual">
            <img :src="igold" alt="愛黃金 i-Gold" class="visual-img" />
          </div>
          <div class="product-info">
            <div class="info-block">
              <h4 class="info-title">核心功能</h4>
              <ul class="feature-list">
                <li>
                  <span class="icon">⚖️</span>
                  <div>
                    <strong>交易單位</strong>
                    <p>1 克起買。</p>
                  </div>
                </li>
                <li>
                  <span class="icon">📐</span>
                  <div>
                    <strong>規格定製</strong>
                    <p>專設現貨金條（50g / 100g / 1kg）。</p>
                  </div>
                </li>
                <li>
                  <span class="icon">📦</span>
                  <div>
                    <strong>實物交割</strong>
                    <p>獨特的 T+1 實物提貨預約功能，打通線上交易與線下交收。</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="info-block">
              <h4 class="info-title">做市商義務</h4>
              <ul class="feature-list">
                <li>
                  <span class="icon">🏅</span>
                  <div>
                    <strong>金條供應商</strong>
                    <p>由美泰樂（Metalor）或翠綠黃金等提供做市服務。</p>
                  </div>
                </li>
                <li>
                  <span class="icon">🔄</span>
                  <div>
                    <strong>持續雙向</strong>
                    <p>做市商必須提供持續的雙向報價，保證流動性無斷檔。</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-white" id="bonds">
      <div class="container">
        <div class="section-header">
          <div class="title-line" />
          <p class="section-sub">Bond Trading</p>
          <h2 class="section-title"><span class="product-num"></span> 債券易</h2>
        </div>
        <div class="product-grid">
          <div class="product-info">
            <div class="info-block">
              <h4 class="info-title">核心功能</h4>
              <ul class="feature-list">
                <li>
                  <span class="icon">💰</span>
                  <div>
                    <strong>交易單位</strong>
                    <p>以 1000 元起購。</p>
                  </div>
                </li>
                <li>
                  <span class="icon">📊</span>
                  <div>
                    <strong>價格切換</strong>
                    <p>債券價格與到期收益率，隨時切換、專業清晰。</p>
                  </div>
                </li>
                <li>
                  <span class="icon">🏛️</span>
                  <div>
                    <strong>ABS 專區</strong>
                    <p>特別設立資產支持證券（ABS）交易板塊。即時交易，T+0 清算。</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="info-block">
              <h4 class="info-title">做市商義務</h4>
              <ul class="feature-list">
                <li>
                  <span class="icon">🤝</span>
                  <div>
                    <strong>非強制</strong>
                    <p>鼓勵做市商雙向報價。</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="product-visual">
            <img :src="bonds" alt="債券易" class="visual-img" />
          </div>
        </div>
      </div>
    </section>

    <section class="section section-soft" id="funds">
      <div class="container">
        <div class="section-header">
          <div class="title-line" />
          <p class="section-sub">Fund Trading</p>
          <h2 class="section-title"><span class="product-num"></span> 基金易</h2>
        </div>
        <div class="product-grid reverse">
          <div class="product-visual">
            <img :src="funds" alt="基金易" class="visual-img" />
          </div>
          <div class="product-info">
            <div class="info-block">
              <h4 class="info-title">核心功能</h4>
              <ul class="feature-list">
                <li>
                  <span class="icon">✅</span>
                  <div>
                    <strong>資質嚴選</strong>
                    <p>展示平臺對管理人資質的審查結果。</p>
                  </div>
                </li>
                <li>
                  <span class="icon">🔄</span>
                  <div>
                    <strong>靈活申贖</strong>
                    <p>份額以 1000 元微交易基礎，自由交易。支持公募與私募基金份額的統一交易介面。</p>
                  </div>
                </li>
                <li>
                  <span class="icon">📈</span>
                  <div>
                    <strong>淨值更新</strong>
                    <p>即時或定時更新，以 100 為基準的浮動淨值。</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="info-block">
              <h4 class="info-title">做市商義務</h4>
              <ul class="feature-list">
                <li>
                  <span class="icon">💧</span>
                  <div>
                    <strong>部分強制性</strong>
                    <p>提供不低於發行總額 10% 的買盤報價。</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped src="../styles/products.css"></style>
