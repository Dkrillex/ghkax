<script setup lang="ts">
const policyTitle = 'ghkax Privacy Policy'

const intro = [
  'ghkax Limited (hereinafter referred to as the "Company" or "we") values the protection of your personal data and privacy and acts in compliance with all requirements under the Personal Data (Privacy) Ordinance Cap. 486 of the laws of Hong Kong (the "Ordinance"). When you use the "ghkax" mobile application and related services, we may collect, use, store, and protect your personal data as required for the services. Please read this Privacy Policy carefully before using this application.',
]

const sections = [
  {
    title: '1. Information We May Collect',
    paragraphs: [
      'To provide you with account login, identity verification, business processing, data upload, customer service, security risk control, and compliance management services, we may collect the following information:',
      'Account and contact information: such as login account, name, mobile phone number, email address, and business information related to the account;',
      'Identity verification information: such as identity document information, document images, identity verification results, and information required for compliance review;',
      'Business and transaction information: such as applications, transactions, orders, trades, clearing, settlement, positions, funds, and service records that you submit, query, or process within this application;',
      'Device and log information: such as device model, operating system version, application version, network status, login time, operation logs, crash logs, and service call records;',
      'Uploaded content information: such as images, files, audio, video, document images, and related business attachments that you actively upload;',
      'Security verification information: such as verification codes, login verification results, device binding information, abnormal login records, and information related to risk control.',
      'If you refuse to provide information necessary to complete the relevant services, some features may not function properly.',
      'It is the Company\'s policy to ensure that all personal data collected and processed by the Company is accurate and fully complies with the requirements under the Ordinance (in particular Data Protection Principle 2). The Company implements appropriate procedures to regularly check and update all personal data to ensure that such data is accurate for the purposes for which it is used or to be used.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    paragraphs: [
      'The personal data we collect may be used for the following purposes:',
      'To assist you with account login, identity authentication, account management, and business processing;',
      'To provide you with information inquiry, transaction processing, message notifications, customer service, and technical support;',
      'To process data uploads, document submissions, image storage, file previews, and other operations you initiate;',
      'To perform security verification, risk monitoring, anti-fraud, anti-money laundering, transaction monitoring, system maintenance, and troubleshooting;',
      'To handle customer inquiries, complaints, disputes, audits, reviews, and internal management;',
      'To fulfil applicable laws and regulations, regulatory requirements, judicial or administrative authority requests, and the Company\'s compliance obligations as a licensed institution;',
      'Other purposes related to the above.',
      'Without your consent, we will not use your personal data for direct marketing purposes unrelated to this service.',
    ],
  },
  {
    title: '3. Device Permissions We Use',
    paragraphs: [
      'To enable specific features, this application may request or use the following device permissions:',
      'Camera permission: used to take photos, upload identity documents, or submit business image materials;',
      'Photo library / storage permission: used to select local images or files, or to save images, videos, and business data to your device;',
      'Network permission: used to connect to servers, synchronise data, and complete business requests.',
      'You can manage related permissions in your device system settings. If you refuse authorisation, the corresponding features may be affected, but other basic features that do not rely on those permissions will not be affected.',
    ],
  },
  {
    title: '4. Data Sharing, Transfer, and Disclosure',
    paragraphs: [
      'We do not sell your personal data. Except in the following circumstances, we will not share, transfer, or publicly disclose your personal data to unrelated third parties without your consent:',
      'To provide support to technical service providers within the necessary scope to enable the core features of this application;',
      'To fulfil business needs such as trading, clearing, settlement, custody, audit, legal, compliance, risk control, or customer service;',
      'To provide information as required by laws and regulations, regulatory rules, judicial proceedings, administrative authorities, or regulatory bodies;',
      'Where necessary to protect the personal, property, and information security and legitimate rights and interests of you, other users, the Company, or the public;',
      'Where personal data needs to be transferred due to merger, acquisition, asset transfer, restructuring, or similar transactions, we will require the new data recipient to continue to comply with this Privacy Policy.',
      'If this application uses third-party SDKs or third-party services, we will require the relevant service providers to comply with confidentiality and data protection obligations, and to process your personal data only within the necessary scope.',
    ],
  },
  {
    title: '5. Data Storage and Security Protection',
    paragraphs: [
      'We will retain your personal data for the period necessary to achieve the service purposes and to fulfil legal, regulatory, audit, anti-money laundering, transaction record retention, dispute handling, and licensed institution compliance requirements.',
      'It is the Company\'s policy, having regard to the sensitivity of personal data and the harm that may result from unauthorised access or processing, to ensure that personal data is protected to an appropriate degree and fully complies with the requirements under the Ordinance (in particular Data Protection Principle 4), so as to prevent personal data from being accessed, processed, or used for other purposes without authorisation. To achieve an appropriate level of security protection, the Company\'s practice is to restrict physical access to data through the use of secure storage facilities and by implementing security measures on data storage equipment. The Company also takes measures to ensure that persons who access such data are of good conduct, prudent, and competent. Data will only be transmitted in a secure manner.',
      'Unless otherwise required by laws, regulations, or regulatory requirements, the retention period for relevant data is generally not less than seven (7) years. After the retention period expires, we will delete, anonymise, or continue to retain the relevant data in accordance with applicable requirements.',
      'We will take reasonably practicable security measures to protect your personal data, including but not limited to identity authentication, access control, encrypted transmission, log monitoring, data backup, and internal management measures, to prevent unauthorised access, use, disclosure, alteration, destruction, or loss of data.',
      'Please keep your account, password, verification codes, and other identity credentials securely.',
    ],
  },
  {
    title: '6. Your Rights',
    paragraphs: [
      'To the extent permitted by applicable laws and regulations, you have the right to:',
      'Inquire about and access the personal data we hold about you;',
      'Correct or update inaccurate or incomplete personal data;',
      'Withdraw camera, photo library / storage, and other permission authorisations through your device system settings;',
      'Request deletion of certain data or account cancellation where permitted by laws and regulations, regulatory requirements, and business rules;',
      'Raise inquiries, comments, or complaints with us regarding personal data processing.',
      'Due to identity verification, transaction security, regulatory retention, dispute handling, audit, and anti-money laundering requirements, we may need to verify your identity before processing related requests, and may lawfully retain certain necessary data.',
      'The Company may charge a reasonable fee for data access requests in accordance with the Ordinance.',
      'Requests for access to and correction of data addressed to the Company may be made to the Data Protection Officer or other specifically designated personnel. Please refer to Section 10 below for the Data Protection Officer\'s contact details.',
    ],
  },
  {
    title: '7. Account and Data Deletion',
    paragraphs: [
      'If you need to delete your account or request deletion of personal data related to your account, you may submit a request through the following means:',
      'Submit a request through the account deletion or data deletion feature provided within this application;',
      'Submit a request through the account deletion / data deletion portal published on the Company\'s official website or app store page;',
      'If you are unable to use the above portals, you may email us at ops@ghkax.com.',
      'After verifying your identity and the content of your request, we will process or respond to your request within seven (7) working days. If certain data needs to be retained due to laws and regulations, regulatory rules, anti-money laundering, transaction record retention, dispute handling, audit, or security risk control reasons, we will retain such data within the necessary scope in accordance with the law and restrict its use for other unrelated purposes.',
    ],
  },
  {
    title: '8. Protection of Minors',
    paragraphs: [
      'This application is primarily intended for users who have the relevant qualifications and comply with the Company\'s business rules, and is not primarily targeted at minors. If you are a minor, please read this Privacy Policy under the guidance of a guardian and use the relevant services only after obtaining the guardian\'s consent.',
      'If a guardian discovers that a minor has submitted personal data to us without consent, they may contact us through the means listed in this policy, and we will handle the matter in accordance with the law after verifying the situation.',
    ],
  },
  {
    title: '9. Policy Updates',
    paragraphs: [
      'We may update this Privacy Policy based on laws and regulations, regulatory requirements, business adjustments, product feature changes, or app store requirements. Updated versions will be published through this application, the official website, or other appropriate means, and will take effect from the date stated in the publication or notice.',
      'If material changes are made to this policy, we will remind you via pop-up, in-app notification, announcement, or other reasonable means.',
    ],
  },
  {
    title: '10. How to Contact Us',
    paragraphs: [
      'The Company has appointed a Data Protection Officer to coordinate and monitor compliance with the Ordinance and related guidelines, as well as the Company\'s personal data protection policies.',
      'If you have any questions, comments, suggestions, or complaints regarding this Privacy Policy, personal data protection, account deletion, or the exercise of data rights, please contact us through the following means:',
      'Address: 41/F, Enterprise Square Three, 39 Wang Chiu Rd, Kowloon Bay, Hong Kong',
      'English Address: 41/F, Enterprise Square Three, 39 Wang Chiu Rd, Kowloon Bay, Hong Kong',
      'Data Protection Officer',
      'Tel: (852) 3120 8846',
      'Fax: (852) 2331 2683',
      'Email: ops@ghkax.com',
    ],
  },
]
</script>

<template>
  <div class="page privacy-page">
    <section class="page-hero">
      <div class="container page-hero-inner">
        <div class="ph-breadcrumb">Home / Privacy Policy</div>
        <h1 class="ph-title">ghkax Privacy Policy</h1>
        <p class="ph-desc">
          ghkax Limited values the protection of your personal data and privacy and complies with the Personal Data (Privacy) Ordinance Cap. 486 of the laws of Hong Kong. When you use the "ghkax" mobile application and related services, we may collect, use, store, and protect your personal data as required for the services.
        </p>
      </div>
    </section>
    <section class="section section-white">
      <div class="container">
        <div class="policy-shell">
          <div class="policy-meta">
            <span class="badge badge-blue">Public Page</span>
            <span>Effective Date: June 25, 2026</span>
          </div>
          <div class="policy-intro card">
            <h2>{{ policyTitle }}</h2>
            <p v-for="p in intro" :key="p">{{ p }}</p>
          </div>
          <div class="policy-sections">
            <article v-for="s in sections" :key="s.title" class="card policy-card">
              <h3>{{ s.title }}</h3>
              <p v-for="p in s.paragraphs" :key="p">{{ p }}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped src="../styles/privacy.css"></style>
