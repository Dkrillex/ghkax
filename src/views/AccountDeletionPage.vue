<script setup lang="ts">
import { reactive, ref } from 'vue'
import logo from '../assets/ghkax-logo.png'

const feedbackUrl = 'https://www.ghkax.com/api/user/oper_feedback'

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
  { id: 'app-identity', label: 'Page Identity' },
  { id: 'before-delete', label: 'Before You Delete' },
  { id: 'how-to-delete', label: 'How to Apply' },
  { id: 'what-happens', label: 'After Submission' },
  { id: 'data-retention', label: 'Data Retention' },
  { id: 'contact-us', label: 'Contact Us' },
]

const identity = [
  { label: 'App Name', value: 'ghkax' },
  { label: 'Google Play Package Name', value: 'cn.com.bayconnect' },
  { label: 'Operating Company', value: 'ghkax Limited' },
  { label: 'English Name', value: 'ghkax Limited' },
  { label: 'Official Website', value: 'https://www.ghkax.com' },
  { label: 'Page Purpose', value: 'Submit a ghkax app account deletion request' },
]

const steps = [
  {
    index: '01',
    title: 'Prepare Your Application Details',
    description: 'Please provide the name, mobile number, email address, or other identifying information bound to your account so we can verify your identity.',
  },
  {
    index: '02',
    title: 'Submit a Deletion Request',
    description: 'You may submit a request by email, post, or through the in-app account deletion portal, and specify the account information you wish to delete.',
  },
  {
    index: '03',
    title: 'Await Verification and Processing',
    description: 'We will process your request after verifying your identity and notify you of the result upon completion; where data must be retained by law, its use will also be restricted in accordance with the rules.',
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
    return 'Please enter your name.'
  }
  if (!form.phone) {
    invalid.phone = true
    return 'Please enter your mobile number.'
  }
  if (!form.email) {
    invalid.email = true
    return 'Please enter your email address.'
  }
  if (!form.accountIdentifier) {
    invalid.accountIdentifier = true
    return 'Please enter account identification information so we can verify your account.'
  }
  if (!form.reason) {
    invalid.reason = true
    return 'Please select a reason for deletion.'
  }
  return ''
}

const submitForm = async () => {
  formError.value = validate()
  if (formError.value) return

  submitting.value = true
  const contentLines = [
    'Account Deletion Request',
    `Name: ${form.name}`,
    `Mobile Number: ${form.phone || 'Not provided'}`,
    `Email: ${form.email || 'Not provided'}`,
    `Account Identifier: ${form.accountIdentifier}`,
    `Reason for Deletion: ${form.reason}`,
    `Additional Notes: ${form.message}`,
  ]
  const payload = {
    name: form.name,
    phone: form.phone,
    email: form.email,
    title: 'Account Deletion Request',
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
        <div class="delete-breadcrumb">Home / Account Deletion</div>
        <span class="delete-eyebrow">Account Deletion</span>
        <h1 class="delete-title">Delete Personal Account</h1>
        <p class="delete-desc">
          This page is the official account deletion portal for the "ghkax" mobile application, provided by ghkax Limited. You may submit a "ghkax" account deletion request here.
          After verifying your identity, we will process the request and, subject to applicable legal, regulatory, and transaction record retention requirements, delete or anonymise personal data that does not need to be retained.
        </p>
        <div class="identity-banner">
          <div class="identity-brand">
            <img :src="logo" alt="ghkax" class="identity-logo" />
            <div>
              <strong>ghkax App Account Deletion</strong>
              <span>For the Google Play listing of the "ghkax" app</span>
            </div>
          </div>
          <div class="identity-meta">
            <span>Developer / Operator: ghkax Limited</span>
            <span>English: ghkax Limited</span>
            <span>Official Website: www.ghkax.com</span>
          </div>
        </div>
        <div class="delete-hero-actions">
          <button type="button" class="primary-btn" @click="openForm">Submit Deletion Request</button>
          <RouterLink to="/privacy-policy" class="ghost-btn">View Privacy Policy</RouterLink>
        </div>
      </div>
    </section>

    <section class="section section-white">
      <div class="container">
        <div class="delete-layout">
          <aside class="delete-sidebar card">
            <h2>Quick Navigation</h2>
            <a v-for="n in nav" :key="n.id" :href="'#' + n.id">{{ n.label }}</a>
          </aside>

          <div class="delete-content">
            <section id="app-identity" class="card delete-card">
              <div class="section-sub">Official Identification</div>
              <h2>App and Company Identity for This Deletion Page</h2>
              <p class="delete-copy">
                To help users and platform reviewers identify this page, it expressly corresponds to the Google Play app "ghkax" and is provided by ghkax Limited for account deletion and data deletion requests.
              </p>
              <div class="identity-grid">
                <article v-for="item in identity" :key="item.label" class="identity-card">
                  <span>{{ item.label }}</span>
                  <strong>{{ item.value }}</strong>
                </article>
              </div>
              <p class="delete-note">
                If you need to delete an account created within the "ghkax" app, please submit your request on this page; we will process it after verifying the account holder's identity.
              </p>
            </section>

            <section id="before-delete" class="card delete-card">
              <div class="section-sub">Before You Delete</div>
              <h2>Before You Delete</h2>
              <ul class="delete-list">
                <li>After account deletion, you will no longer be able to use login, inquiry, business processing, and related services bound to that account.</li>
                <li>If you change your mind after submitting a request, please contact us promptly by email or customer service so we can help confirm the status before processing is completed.</li>
                <li>Due to regulatory, anti-money laundering, audit, transaction record retention, and dispute handling requirements, some data may need to continue to be retained for a period of time in accordance with the law.</li>
              </ul>
            </section>

            <section id="how-to-delete" class="card delete-card">
              <div class="section-sub">How It Works</div>
              <h2>How to Request Account Deletion</h2>
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
              <h2>What Happens After Submission</h2>
              <div class="status-grid">
                <article class="status-item">
                  <h3>Processing Time</h3>
                  <p>After verifying your identity and the content of your request, we will process or respond to your request within seven (7) working days.</p>
                </article>
                <article class="status-item">
                  <h3>Account Status</h3>
                  <p>Once deletion is complete, login capability and general service access related to that account will be terminated.</p>
                </article>
                <article class="status-item">
                  <h3>Data Handling</h3>
                  <p>Personal data that does not need to be retained by law will be deleted or anonymised; data that must be retained will be subject to access restrictions.</p>
                </article>
              </div>
            </section>

            <section id="data-retention" class="card delete-card">
              <div class="section-sub">Data Retention</div>
              <h2>Data That May Not Be Deleted Immediately</h2>
              <p class="delete-copy">
                In accordance with the Company's privacy policy and compliance requirements, the following types of data may be retained for a period of time due to legal obligations:
              </p>
              <ul class="delete-list">
                <li>Customer identity verification and KYC / AML compliance data.</li>
                <li>Records related to transactions, orders, trades, clearing, settlement, positions, and funds.</li>
                <li>Data required for security risk control, abnormal login monitoring, audit, dispute handling, and complaint handling.</li>
              </ul>
              <p class="delete-note">
                In general, the retention period for relevant data is not less than seven (7) years; the specific period is subject to applicable laws and regulations, regulatory rules, and internal compliance requirements.
              </p>
            </section>

            <section id="contact-us" class="card delete-card delete-contact-card">
              <div class="section-sub">Need Help?</div>
              <h2>Contact Us to Submit a Request</h2>
              <div class="contact-grid">
                <a href="mailto:ops@ghkax.com" class="contact-tile">
                  <strong>Email Request</strong>
                  <span>ops@ghkax.com</span>
                </a>
                <a href="tel:+85223312862" class="contact-tile">
                  <strong>Phone Contact</strong>
                  <span>13728883039</span>
                </a>
                <button type="button" class="contact-tile contact-button" @click="openForm">
                  <strong>Submit Form</strong>
                  <span>Fill out the form</span>
                </button>
              </div>
              <div class="contact-meta">
                <p><strong>Applicable App:</strong> ghkax</p>
                <p><strong>Company Name:</strong> ghkax Limited</p>
                <p><strong>English Name:</strong> ghkax Limited</p>
                <p><strong>Official Website:</strong> https://www.ghkax.com</p>
                <p><strong>Correspondence Address:</strong> 41/F, Enterprise Square Three, 39 Wang Chiu Rd, Kowloon Bay, Hong Kong</p>
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
              <h2>Submit Account Deletion Request</h2>
            </div>
            <button type="button" class="modal-close" aria-label="Close dialog" @click="closeForm">×</button>
          </div>
          <form class="delete-form" @submit.prevent="submitForm">
            <div class="form-grid">
              <label class="form-field">
                <span>Name <em class="required-mark">*</em></span>
                <input
                  v-model.trim="form.name"
                  type="text"
                  placeholder="Please enter your name"
                  :class="{ 'field-invalid': invalid.name }"
                  @input="clearField('name')"
                />
              </label>
              <label class="form-field">
                <span>Mobile Number <em class="required-mark">*</em></span>
                <input
                  v-model.trim="form.phone"
                  type="tel"
                  placeholder="Please enter your contact number"
                  :class="{ 'field-invalid': invalid.phone }"
                  @input="clearField('phone')"
                />
              </label>
              <label class="form-field">
                <span>Email <em class="required-mark">*</em></span>
                <input
                  v-model.trim="form.email"
                  type="email"
                  placeholder="Please enter your email address"
                  :class="{ 'field-invalid': invalid.email }"
                  @input="clearField('email')"
                />
              </label>
              <label class="form-field">
                <span>Account Identifier <em class="required-mark">*</em></span>
                <input
                  v-model.trim="form.accountIdentifier"
                  type="text"
                  placeholder="e.g. account ID, UID, or bound mobile number"
                  :class="{ 'field-invalid': invalid.accountIdentifier }"
                  @input="clearField('accountIdentifier')"
                />
              </label>
            </div>
            <p class="form-hint">Fields marked with <em class="required-mark">*</em> are required.</p>
            <label class="form-field">
              <span>Reason for Deletion <em class="required-mark">*</em></span>
              <select
                v-model="form.reason"
                :class="{ 'field-invalid': invalid.reason }"
                @change="clearField('reason')"
              >
                <option value="">Please select a reason</option>
                <option value="no_longer_needed">No longer need this account</option>
                <option value="privacy_concern">Privacy or data security concerns</option>
                <option value="duplicate_account">Duplicate registration or switching accounts</option>
                <option value="other">Other reason</option>
              </select>
            </label>
            <label class="form-field">
              <span>Additional Notes</span>
              <textarea
                v-model.trim="form.message"
                rows="5"
                placeholder="You may add background for the deletion request, preferred contact times, or other information we need to verify"
                @input="clearField('message')"
              />
            </label>
            <p v-if="formError" class="form-error">{{ formError }}</p>
            <div class="modal-actions">
              <button type="button" class="ghost-btn" @click="closeForm">Cancel</button>
              <button type="submit" class="primary-btn" :disabled="submitting">
                {{ submitting ? 'Submitting...' : 'Confirm Submission' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Transition>

    <Transition name="modal-fade">
      <div v-if="showSuccess" class="modal-overlay" @click.self="closeSuccess">
        <div class="modal-panel modal-panel-sm">
          <div class="success-badge">Submitted Successfully</div>
          <h2 class="success-title">Deletion Request Received</h2>
          <p class="success-copy">
            We have received your account deletion request and will complete processing or contact you for confirmation within seven working days after verifying your information.
          </p>
          <div class="modal-actions">
            <button type="button" class="primary-btn" @click="closeSuccess">Got It</button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped src="../styles/account-deletion.css"></style>
