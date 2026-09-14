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
        <div class="ph-breadcrumb">Home / Products</div>
        <h1 class="ph-title">Platform Products</h1>
        <p class="ph-desc">
          ghkax offers a diversified suite of asset trading products covering certificates of deposit,
          physical gold, bonds, and funds to meet different investor needs.
        </p>
      </div>
    </section>

    <section class="section section-white" id="smartwallet">
      <div class="container">
        <div class="section-header">
          <div class="title-line" />
          <p class="section-sub">Smart Wallet</p>
          <h2 class="section-title"><span class="product-num"></span> Smart Wallet</h2>
        </div>
        <div class="product-grid">
          <div class="product-info">
            <div class="info-block">
              <h4 class="info-title">Core Features</h4>
              <ul class="feature-list">
                <li>
                  <span class="icon">📋</span>
                  <div>
                    <strong>Underlying Assets</strong>
                    <p>Bills (government bonds, certificates of deposit, and other retail products).</p>
                  </div>
                </li>
                <li>
                  <span class="icon">⏱️</span>
                  <div>
                    <strong>Real-time Trading</strong>
                    <p>PI and retail clients can enter and exit at any time.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="info-block">
              <h4 class="info-title">Market Maker Obligations</h4>
              <ul class="feature-list">
                <li>
                  <span class="icon">💧</span>
                  <div>
                    <strong>Liquidity</strong>
                    <p>Market makers provide quotes covering 100% of the total sell (issuance) amount.</p>
                  </div>
                </li>
                <li>
                  <span class="icon">🔄</span>
                  <div>
                    <strong>Continuity</strong>
                    <p>Continuous two-way quotes to maintain market depth.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="product-visual">
            <img :src="smartwallet" alt="Smart Wallet" class="visual-img" />
          </div>
        </div>
      </div>
    </section>

    <section class="section section-soft" id="igold">
      <div class="container">
        <div class="section-header">
          <div class="title-line" />
          <p class="section-sub">i-Gold</p>
          <h2 class="section-title"><span class="product-num"></span> i-Gold</h2>
        </div>
        <div class="product-grid reverse">
          <div class="product-visual">
            <img :src="igold" alt="i-Gold" class="visual-img" />
          </div>
          <div class="product-info">
            <div class="info-block">
              <h4 class="info-title">Core Features</h4>
              <ul class="feature-list">
                <li>
                  <span class="icon">⚖️</span>
                  <div>
                    <strong>Trading Unit</strong>
                    <p>Starting from 1 gram.</p>
                  </div>
                </li>
                <li>
                  <span class="icon">📐</span>
                  <div>
                    <strong>Custom Specs</strong>
                    <p>Dedicated physical gold bars (50g / 100g / 1kg).</p>
                  </div>
                </li>
                <li>
                  <span class="icon">📦</span>
                  <div>
                    <strong>Physical Delivery</strong>
                    <p>Unique T+1 physical pickup booking that connects online trading with offline settlement.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="info-block">
              <h4 class="info-title">Market Maker Obligations</h4>
              <ul class="feature-list">
                <li>
                  <span class="icon">🏅</span>
                  <div>
                    <strong>Gold Suppliers</strong>
                    <p>Market making provided by Metalor or equivalent gold suppliers.</p>
                  </div>
                </li>
                <li>
                  <span class="icon">🔄</span>
                  <div>
                    <strong>Continuous Two-way Quotes</strong>
                    <p>Market makers must provide continuous two-way quotes with no liquidity gaps.</p>
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
          <h2 class="section-title"><span class="product-num"></span> Bond Trading</h2>
        </div>
        <div class="product-grid">
          <div class="product-info">
            <div class="info-block">
              <h4 class="info-title">Core Features</h4>
              <ul class="feature-list">
                <li>
                  <span class="icon">💰</span>
                  <div>
                    <strong>Trading Unit</strong>
                    <p>Starting from HKD 1,000.</p>
                  </div>
                </li>
                <li>
                  <span class="icon">📊</span>
                  <div>
                    <strong>Price Toggle</strong>
                    <p>Switch anytime between bond price and yield to maturity with a clear professional view.</p>
                  </div>
                </li>
                <li>
                  <span class="icon">🏛️</span>
                  <div>
                    <strong>ABS Zone</strong>
                    <p>Dedicated asset-backed securities (ABS) trading board with real-time trading and T+0 clearing.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="info-block">
              <h4 class="info-title">Market Maker Obligations</h4>
              <ul class="feature-list">
                <li>
                  <span class="icon">🤝</span>
                  <div>
                    <strong>Non-mandatory</strong>
                    <p>Two-way quoting by market makers is encouraged.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="product-visual">
            <img :src="bonds" alt="Bond Trading" class="visual-img" />
          </div>
        </div>
      </div>
    </section>

    <section class="section section-soft" id="funds">
      <div class="container">
        <div class="section-header">
          <div class="title-line" />
          <p class="section-sub">Fund Trading</p>
          <h2 class="section-title"><span class="product-num"></span> Fund Trading</h2>
        </div>
        <div class="product-grid reverse">
          <div class="product-visual">
            <img :src="funds" alt="Fund Trading" class="visual-img" />
          </div>
          <div class="product-info">
            <div class="info-block">
              <h4 class="info-title">Core Features</h4>
              <ul class="feature-list">
                <li>
                  <span class="icon">✅</span>
                  <div>
                    <strong>Qualified Managers</strong>
                    <p>Displays the platform’s review results on manager qualifications.</p>
                  </div>
                </li>
                <li>
                  <span class="icon">🔄</span>
                  <div>
                    <strong>Flexible Subscription & Redemption</strong>
                    <p>
                      Micro-trading from HKD 1,000 with free trading. Unified interface for public and private fund units.
                    </p>
                  </div>
                </li>
                <li>
                  <span class="icon">📈</span>
                  <div>
                    <strong>NAV Updates</strong>
                    <p>Real-time or scheduled updates with floating NAV based on 100.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="info-block">
              <h4 class="info-title">Market Maker Obligations</h4>
              <ul class="feature-list">
                <li>
                  <span class="icon">💧</span>
                  <div>
                    <strong>Partially Mandatory</strong>
                    <p>Provide bid quotes of no less than 10% of the total issuance amount.</p>
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
