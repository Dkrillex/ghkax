<script setup lang="ts">
import { reactive, ref } from 'vue'
import logo from '../assets/logo-hkax.png'

const feedbackUrl = 'https://www.hkax.com.hk/api/user/oper_feedback'

const showForm = ref(false)
const showSuccess = ref(false)
const submitting = ref(false)
const formError = ref('')

type FormFields = {
  name: string
  phone: string
  email: string
  accountIdentifier: string
  reason: string
  message: string
}

const emptyForm = (): FormFields => ({
  name: '',
  phone: '',
  email: '',
  accountIdentifier: '',
  reason: '',
  message: '',
})

const form = reactive<FormFields>(emptyForm())
const invalid = reactive({
  name: false,
  phone: false,
  email: false,
  accountIdentifier: false,
  reason: false,
  message: false,
})

const nav = [
  { id: 'app-identity', label: '頁面主體標識' },
  { id: 'before-delete', label: '刪除前須知' },
  { id: 'how-to-delete', label: '申請流程' },
  { id: 'what-happens', label: '提交後結果' },
  { id: 'data-retention', label: '資料保留説明' },
  { id: 'contact-us', label: '聯絡方式' },
]

const identity = [
  { label: '應用名稱', value: '全通易' },
  { label: 'Google Play 套件名稱', value: 'cn.com.bayconnect' },
  { label: '營運公司', value: '香港全通資產交易有限公司' },
  { label: 'English Name', value: 'Hong Kong Quantong Asset Trading Co., Limited' },
  { label: '官方網站', value: 'https://www.hkax.com.hk' },
  { label: '頁面用途', value: '提交全通易應用帳戶刪除申請' },
]

const steps = [
  {
    index: '01',
    title: '準備申請資料',
    description: '請提供與帳戶綁定的姓名、手機號碼、電郵地址或其他可識別資料，方便我們核對您的身份。',
  },
  {
    index: '02',
    title: '提交刪除請求',
    description: '您可透過電郵、郵件或應用內的帳戶刪除入口提出申請，並説明您希望刪除的帳戶資訊。',
  },
  {
    index: '03',
    title: '等待覈實與處理',
    description: '我們會在覈實身份後處理您的請求，並在完成後通知您結果；如涉及依法保留資料，也會按規則限制用途。',
  },
]

const clearInvalid = () => {
  Object.keys(invalid).forEach((key) => {
    invalid[key as keyof typeof invalid] = false
  })
}

const clearField = (key: keyof typeof invalid) => {
  invalid[key] = false
}

const resetForm = () => {
  Object.assign(form, emptyForm())
  formError.value = ''
  clearInvalid()
}

const openForm = () => {
  formError.value = ''
  clearInvalid()
  showForm.value = true
}

const closeForm = () => {
  if (!submitting.value) showForm.value = false
}

const closeSuccess = () => {
  showSuccess.value = false
}

const validate = () => {
  clearInvalid()
  if (!form.name) {
    invalid.name = true
    return '請填寫姓名。'
  }
  if (!form.phone) {
    invalid.phone = true
    return '請填寫手機號碼。'
  }
  if (!form.email) {
    invalid.email = true
    return '請填寫電子郵箱。'
  }
  if (!form.accountIdentifier) {
    invalid.accountIdentifier = true
    return '請填寫帳戶識別資訊，方便我們核對您的帳戶。'
  }
  if (!form.reason) {
    invalid.reason = true
    return '請選擇刪除原因。'
  }
  return ''
}

const submitForm = async () => {
  formError.value = validate()
  if (formError.value) return

  submitting.value = true
  const contentLines = [
    '帳戶刪除申請',
    `姓名：${form.name}`,
    `手機號碼：${form.phone || '未填寫'}`,
    `電子郵箱：${form.email || '未填寫'}`,
    `帳戶識別資訊：${form.accountIdentifier}`,
    `刪除原因：${form.reason}`,
    `補充説明：${form.message}`,
  ]
  const payload = {
    name: form.name,
    phone: form.phone,
    email: form.email,
    title: '帳戶刪除申請',
    type: 'account_deletion',
    content: contentLines.join('\n'),
    extra: {
      accountIdentifier: form.accountIdentifier,
      reason: form.reason,
      message: form.message,
    },
  }

  try {
    await (
      await fetch(feedbackUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
    )
      .json()
      .catch(() => null)
  } catch (err) {
    console.warn('[account-deletion] oper_feedback request failed:', err)
  } finally {
    showForm.value = false
    showSuccess.value = true
    resetForm()
    submitting.value = false
  }
}
</script>

<template>
  <div class="page account-deletion-page">
    <section class="delete-hero">
      <div class="container delete-hero-inner">
        <div class="delete-breadcrumb">首頁 / 帳戶刪除</div>
        <span class="delete-eyebrow">Account Deletion</span>
        <h1 class="delete-title">刪除個人帳號</h1>
        <p class="delete-desc">
          此頁面為「全通易」流動應用程式的官方帳戶刪除入口，由香港全通資產交易有限公司
          （Hong Kong Quantong Asset Trading Co., Limited）提供。您可以在此提交「全通易」帳戶刪除申請。
          我們會在覈實身份後處理請求，並在適用法律、監管及交易記錄保存要求下，刪除或匿名化無需繼續保留的個人資料。
        </p>
        <div class="identity-banner">
          <div class="identity-brand">
            <img :src="logo" alt="HKAX 全通資產交易" class="identity-logo" />
            <div>
              <strong>全通易 App 帳戶刪除</strong>
              <span>適用於 Google Play 上架應用「全通易」</span>
            </div>
          </div>
          <div class="identity-meta">
            <span>開發／營運主體：香港全通資產交易有限公司</span>
            <span>English: Hong Kong Quantong Asset Trading Co., Limited</span>
            <span>官方網站：www.hkax.com.hk</span>
          </div>
        </div>
        <div class="delete-hero-actions">
          <button type="button" class="primary-btn" @click="openForm">提交刪除申請</button>
          <RouterLink to="/privacy-policy" class="ghost-btn">查看隱私政策</RouterLink>
        </div>
      </div>
    </section>

    <section class="section section-white">
      <div class="container">
        <div class="delete-layout">
          <aside class="delete-sidebar card">
            <h2>快速導航</h2>
            <a v-for="n in nav" :key="n.id" :href="'#' + n.id">{{ n.label }}</a>
          </aside>

          <div class="delete-content">
            <section id="app-identity" class="card delete-card">
              <div class="section-sub">Official Identification</div>
              <h2>此刪除頁面對應的應用與公司主體</h2>
              <p class="delete-copy">
                為方便使用者及平臺審核識別，本頁面明確對應 Google Play 應用「全通易」，並由香港全通資產交易有限公司提供帳戶刪除及資料刪除申請服務。
              </p>
              <div class="identity-grid">
                <article v-for="item in identity" :key="item.label" class="identity-card">
                  <span>{{ item.label }}</span>
                  <strong>{{ item.value }}</strong>
                </article>
              </div>
              <p class="delete-note">
                如您需要刪除的是「全通易」應用內建立的帳戶，請使用本頁面提交申請；我們將按帳戶持有人身份核驗後進行處理。
              </p>
            </section>

            <section id="before-delete" class="card delete-card">
              <div class="section-sub">Before You Delete</div>
              <h2>刪除前須知</h2>
              <ul class="delete-list">
                <li>刪除帳戶後，您將無法再使用與該帳戶綁定的登入、查詢、業務辦理及相關服務。</li>
                <li>如您在提交申請後改變主意，請盡快透過電郵或客服與我們聯繫，以便在處理完成前協助您確認狀態。</li>
                <li>基於監管、反洗錢、審計、交易記錄保存及爭議處理要求，部分資料可能需要依法繼續保留一段時間。</li>
              </ul>
            </section>

            <section id="how-to-delete" class="card delete-card">
              <div class="section-sub">How It Works</div>
              <h2>如何申請刪除帳戶</h2>
              <div class="step-list">
                <article v-for="s in steps" :key="s.title" class="step-item">
                  <div class="step-index">{{ s.index }}</div>
                  <div>
                    <h3>{{ s.title }}</h3>
                    <p>{{ s.description }}</p>
                  </div>
                </article>
              </div>
            </section>

            <section id="what-happens" class="card delete-card">
              <div class="section-sub">What Happens Next</div>
              <h2>提交後會發生什麼</h2>
              <div class="status-grid">
                <article class="status-item">
                  <h3>處理時效</h3>
                  <p>我們會在覈實您的身份及申請內容後，於七（7）個工作日內處理或回覆您的申請。</p>
                </article>
                <article class="status-item">
                  <h3>帳戶狀態</h3>
                  <p>刪除完成後，與該帳戶相關的登入能力與一般服務存取將被終止。</p>
                </article>
                <article class="status-item">
                  <h3>資料處理</h3>
                  <p>無需依法保留的個人資料將被刪除或匿名化處理；需留存的部分將受到存取限制。</p>
                </article>
              </div>
            </section>

            <section id="data-retention" class="card delete-card">
              <div class="section-sub">Data Retention</div>
              <h2>哪些資料可能不會立即刪除</h2>
              <p class="delete-copy">
                參照本公司的隱私政策與合規要求，以下類型資料可能因法定義務而在一定期間內保留：
              </p>
              <ul class="delete-list">
                <li>客戶身份核驗及 KYC／AML 合規資料。</li>
                <li>交易、委託、成交、清算、結算、持倉及資金相關記錄。</li>
                <li>安全風控、異常登入、審計、爭議處理及投訴處理所需資料。</li>
              </ul>
              <p class="delete-note">
                一般情況下，相關資料保存期限不少於七（7）年；具體以適用法律法規、監管規則及內部合規要求為準。
              </p>
            </section>

            <section id="contact-us" class="card delete-card delete-contact-card">
              <div class="section-sub">Need Help?</div>
              <h2>聯絡我們提交申請</h2>
              <div class="contact-grid">
                <a href="mailto:ops@hkax.com.hk" class="contact-tile">
                  <strong>電郵申請</strong>
                  <span>ops@hkax.com.hk</span>
                </a>
                <a href="tel:+85223312862" class="contact-tile">
                  <strong>電話聯絡</strong>
                  <span>13728883039</span>
                </a>
                <button type="button" class="contact-tile contact-button" @click="openForm">
                  <strong>提交表單</strong>
                  <span>填寫表單</span>
                </button>
              </div>
              <div class="contact-meta">
                <p><strong>適用應用：</strong>全通易</p>
                <p><strong>公司名稱：</strong>香港全通資產交易有限公司</p>
                <p><strong>英文名稱：</strong>Hong Kong Quantong Asset Trading Co., Limited</p>
                <p><strong>官方網站：</strong>https://www.hkax.com.hk</p>
                <p><strong>通訊地址：</strong>香港九龍九龍灣宏照道39號企業廣場三期41F</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>

    <Transition name="modal-fade">
      <div v-if="showForm" class="modal-overlay" @click.self="closeForm">
        <div class="modal-panel">
          <div class="modal-header">
            <div>
              <p class="section-sub">Delete Request</p>
              <h2>提交刪除帳戶申請</h2>
            </div>
            <button type="button" class="modal-close" aria-label="關閉彈窗" @click="closeForm">×</button>
          </div>
          <form class="delete-form" @submit.prevent="submitForm">
            <div class="form-grid">
              <label class="form-field">
                <span>姓名 <em class="required-mark">*</em></span>
                <input
                  v-model.trim="form.name"
                  type="text"
                  placeholder="請輸入您的姓名"
                  :class="{ 'field-invalid': invalid.name }"
                  @input="clearField('name')"
                />
              </label>
              <label class="form-field">
                <span>手機號碼 <em class="required-mark">*</em></span>
                <input
                  v-model.trim="form.phone"
                  type="tel"
                  placeholder="請輸入聯絡電話"
                  :class="{ 'field-invalid': invalid.phone }"
                  @input="clearField('phone')"
                />
              </label>
              <label class="form-field">
                <span>電子郵箱 <em class="required-mark">*</em></span>
                <input
                  v-model.trim="form.email"
                  type="email"
                  placeholder="請輸入常用郵箱"
                  :class="{ 'field-invalid': invalid.email }"
                  @input="clearField('email')"
                />
              </label>
              <label class="form-field">
                <span>帳戶識別資訊 <em class="required-mark">*</em></span>
                <input
                  v-model.trim="form.accountIdentifier"
                  type="text"
                  placeholder="如帳號、UID 或已綁定手機號"
                  :class="{ 'field-invalid': invalid.accountIdentifier }"
                  @input="clearField('accountIdentifier')"
                />
              </label>
            </div>
            <p class="form-hint">帶 <em class="required-mark">*</em> 的欄位為必填。</p>
            <label class="form-field">
              <span>刪除原因 <em class="required-mark">*</em></span>
              <select
                v-model="form.reason"
                :class="{ 'field-invalid': invalid.reason }"
                @change="clearField('reason')"
              >
                <option value="">請選擇原因</option>
                <option value="no_longer_needed">不再使用此帳戶</option>
                <option value="privacy_concern">出於隱私或資料安全考量</option>
                <option value="duplicate_account">重複註冊或更換帳戶</option>
                <option value="other">其他原因</option>
              </select>
            </label>
            <label class="form-field">
              <span>補充説明</span>
              <textarea
                v-model.trim="form.message"
                rows="5"
                placeholder="可補充刪除申請背景、希望聯絡的時段，或其他需要我們核實的資訊"
                @input="clearField('message')"
              />
            </label>
            <p v-if="formError" class="form-error">{{ formError }}</p>
            <div class="modal-actions">
              <button type="button" class="ghost-btn" @click="closeForm">取消</button>
              <button type="submit" class="primary-btn" :disabled="submitting">
                {{ submitting ? '提交中...' : '確認提交' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Transition>

    <Transition name="modal-fade">
      <div v-if="showSuccess" class="modal-overlay" @click.self="closeSuccess">
        <div class="modal-panel modal-panel-sm">
          <div class="success-badge">提交成功</div>
          <h2 class="success-title">刪除申請已收到</h2>
          <p class="success-copy">
            我們已收到您的帳戶刪除申請，會在覈實資料後於七個工作日內完成處理或與您聯絡確認。
          </p>
          <div class="modal-actions">
            <button type="button" class="primary-btn" @click="closeSuccess">我知道了</button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped src="../styles/account-deletion.css"></style>
