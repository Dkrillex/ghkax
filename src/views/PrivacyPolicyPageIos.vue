<script setup lang="ts">
const policyTitle = 'ghkax Privacy Policy'

const intro = [
  'ghkax Limited (hereinafter referred to as the "Company" or "we") values the protection of your personal data and privacy. When you use the "ghkax" mobile application and related services (hereinafter referred to as "this application" or "this service"), we may collect, use, store, share, and protect your personal data in accordance with this policy.',
  'This policy aims to clearly explain how this application processes personal data and device information, including what information we collect, how we use it, whether we share it with third parties, data security measures, data retention periods, and how you may inquire about, correct, or delete your account or exercise other data rights. Please read this policy carefully before using this application.',
]

const sections = [
  {
    title: '1. Scope of Application',
    paragraphs: [
      'This policy applies to the account login, identity verification, business processing, data upload, transaction inquiry, customer service, security risk control, and compliance management services provided by the Company to you through the "ghkax" mobile application and related platforms.',
      'This policy does not apply to products or services independently provided by third parties. If this application contains links that redirect to third-party websites, platforms, or services, such third-party services are subject to their own privacy policies and terms of service; please review them before use.',
    ],
  },
  {
    title: '2. Information We May Collect',
    paragraphs: [
      'To provide you with services and to meet Apple\'s requirements for user data transparency, we will collect the following information in accordance with the principles of lawfulness, necessity, and proportionality, based on specific feature scenarios:',
      'Account and contact information: such as login account, name, mobile phone number, email address, account status, and business information related to the account.',
      'Identity verification and compliance information: such as identity document information, document images, identity verification results, risk assessment, compliance review, anti-money laundering, and information required by regulatory requirements.',
      'Business and transaction information: such as applications, transactions, orders, trades, clearing, settlement, positions, funds, service requests, and related business records that you submit, query, or process within this application.',
      'Device and log information: such as device model, operating system version, application version, network status, login time, IP address, operation logs, crash logs, service call records, and technical information required for security risk control.',
      'Uploaded content information: such as images, files, audio, video, document images, business attachments, and related descriptive information that you actively upload.',
      'Security verification information: such as verification codes, login verification results, device binding information, abnormal login records, and information related to risk control.',
      'Customer service information: such as inquiries, complaints, suggestions, handling results, and communication records you submit through customer service, telephone, email, or other channels.',
      'If you refuse to provide information necessary to enable specific features, the related features or services may not function properly.',
    ],
  },
  {
    title: '3. How We Collect and Use Information',
    paragraphs: [
      'We may collect the above information when you register, log in, submit information, process business, inquire about transactions, upload documents, contact customer service, or use other features of this application, and use the information for the following purposes:',
      'To assist you with account login, identity authentication, account management, business processing, and service use.',
      'To provide you with information inquiry, transaction processing, message notifications, customer service, technical support, and security protection.',
      'To process data uploads, document submissions, image storage, file previews, application submissions, and other operations you initiate.',
      'To perform identity identification, customer due diligence, compliance review, anti-money laundering, anti-fraud, transaction monitoring, security verification, risk monitoring, and abnormal behaviour identification.',
      'For system maintenance, troubleshooting, log analysis, service optimisation, information security protection, and improving application stability.',
      'To handle customer inquiries, complaints, disputes, audits, reviews, internal management, and compliance checks.',
      'Subject to laws and regulations, regulatory requirements, and judicial or administrative authority requests, to fulfil the Company\'s statutory, compliance, audit, reporting, and data retention obligations as a licensed institution.',
      'Without your explicit consent, we will not use your personal data for direct marketing purposes unrelated to this service.',
    ],
  },
  {
    title: '4. Device Permissions We Use',
    paragraphs: [
      'To enable specific features, this application may request or use the following device permissions. You may decide whether to grant authorisation; if you refuse, the related features may be unavailable, but other basic features that do not rely on those permissions will not be affected.',
      'Camera permission: used to take photos, upload identity documents, or submit business image materials.',
      'Photo library / storage permission: used to select local images or files, or to save images, videos, and business data to your device.',
      'Network permission: used to connect to servers, synchronise data, submit business requests, and receive service responses.',
      'Unless otherwise notified to you and necessary authorisation is obtained in accordance with the law, this application will not proactively request location, microphone, contacts, calendar, Bluetooth, clipboard, or other non-essential permissions that are not directly related to existing services.',
    ],
  },
  {
    title: '5. Data Sharing, Transfer, and Disclosure',
    paragraphs: [
      'We do not sell your personal data. Except in the following circumstances, we will not share, transfer, or publicly disclose your personal data to unrelated third parties without your consent:',
      'To provide support to technical service providers within the necessary scope to enable the core features of this application, such as cloud services, system maintenance, SMS or verification code services, file or image processing, log and crash analysis, customer service systems, and security risk control.',
      'To provide necessary information to relevant institutions or professional service providers to fulfil business needs such as trading, clearing, settlement, custody, audit, legal, compliance, risk control, customer service, and complaint handling.',
      'To provide information as required by laws and regulations, regulatory rules, judicial proceedings, administrative authorities, or regulatory bodies.',
      'Where necessary to protect the personal, property, and information security and legitimate rights and interests of you, other users, the Company, or the public.',
      'Where personal data needs to be transferred due to merger, acquisition, asset transfer, restructuring, or similar transactions, we will require the new data recipient to continue to comply with this policy; if the purpose of using personal data changes, we will separately notify you and obtain necessary consent in accordance with the law.',
      'If this application integrates third-party SDKs or third-party services, we will require the relevant service providers to comply with confidentiality and data protection obligations, and to process personal data only within the scope necessary to achieve the purposes described in this policy. The specific names, data types, purposes of use, and third-party privacy policy links of third-party SDKs or services will be based on the third-party service list published within this application or separately announced by the Company.',
    ],
  },
  {
    title: '6. Data Security',
    paragraphs: [
      'We take reasonably practicable security measures to protect your personal data, including but not limited to identity authentication, access control, encrypted transmission, log monitoring, data backup, internal approval, confidentiality management, and security audits, to endeavour to prevent unauthorised access, use, disclosure, alteration, destruction, or loss of data.',
      'However, please understand that internet transmission and electronic storage are not absolutely secure. You need to keep your account, password, verification codes, and other identity credentials securely and avoid disclosing them to others.',
    ],
  },
  {
    title: '7. Data Retention Period',
    paragraphs: [
      'We will retain your personal data for the period necessary to achieve the service purposes and to fulfil legal, regulatory, audit, anti-money laundering, transaction record retention, dispute handling, and licensed institution compliance requirements.',
      'As a licensed institution, the Company may need to retain customer information, transaction, and business records in accordance with applicable laws and regulations, regulatory rules, and internal compliance requirements. Unless otherwise required by laws, regulations, or regulatory requirements, the retention period for relevant data is generally not less than seven (7) years. After the retention period expires, we will delete, anonymise, or continue to retain the relevant data in accordance with applicable requirements.',
      'If you request account or data deletion, but certain data needs to continue to be retained for legitimate reasons such as security, anti-fraud, anti-money laundering, transaction record retention, dispute handling, audit, or regulatory compliance, we will retain such data within the necessary scope in accordance with the law and restrict its use for other purposes unrelated to the retention purpose.',
    ],
  },
  {
    title: '8. Your Rights and Choices',
    paragraphs: [
      'To the extent permitted by applicable laws and regulations, you have the following rights regarding your personal data:',
      'Inquire about or access the personal data we hold about you.',
      'Request correction or updating of inaccurate or incomplete personal data.',
      'Withdraw camera, photo library / storage, and other permission authorisations through your device system settings; after withdrawal, features that rely on those permissions may become unavailable.',
      'Request deletion of certain data or account cancellation where permitted by laws and regulations, regulatory requirements, and business rules.',
      'Raise inquiries, comments, or complaints with us regarding personal data processing.',
      'Due to identity verification, transaction security, regulatory retention, dispute handling, audit, and anti-money laundering requirements, we may need to verify your identity before processing related requests, and may lawfully refuse, restrict, or delay the processing of certain requests.',
    ],
  },
  {
    title: '9. Account and Data Deletion',
    paragraphs: [
      'If you need to delete your account or request deletion of personal data related to your account, you may submit a request through the following means:',
      'Submit a request through the "Account Deletion" or "Data Deletion" feature provided within this application.',
      'Submit a request through the account deletion page published on the Company\'s official website: /account-deletion.',
      'If you are unable to use the above portals, you may email us at ops@ghkax.com.',
      'After verifying your identity and the content of your request, we will process or respond to your request within seven (7) working days. After account deletion, personal data related to that account that does not need to continue to be retained by law will be deleted or anonymised.',
    ],
  },
  {
    title: '10. Protection of Minors',
    paragraphs: [
      'This application is primarily intended for users who have the relevant qualifications and comply with the Company\'s business rules, and is not primarily targeted at minors. If you are a minor, please read this policy under the guidance of a guardian and use the related services only after obtaining the guardian\'s consent.',
      'If a guardian discovers that a minor has submitted personal data to us without consent, or wishes to inquire about, correct, or delete data related to a minor, please contact us through the contact methods listed in this policy, and we will handle the matter in accordance with the law after verifying identity and the specific circumstances.',
    ],
  },
  {
    title: '11. Policy Updates',
    paragraphs: [
      'We may revise this policy based on laws and regulations, regulatory requirements, business adjustments, product feature changes, technical updates, or app store requirements. Updated policies will be published through this application, the official website, or other appropriate means, and will take effect from the date stated in the publication or notice.',
      'If material changes are made to this policy, such as important changes to the purposes of personal data processing, processing methods, data types, sharing parties, or how users exercise their rights, we will remind you via pop-up, in-app notification, announcement, or other reasonable means.',
      'We will also promptly update the App Privacy details and related listing information in App Store Connect when the way this application processes data changes, so that externally disclosed content remains consistent with actual practices.',
    ],
  },
  {
    title: '12. How to Contact Us',
    paragraphs: [
      'If you have any questions, comments, suggestions, or complaints regarding this policy, personal data protection, account deletion, or the exercise of data rights, please contact us through the following means:',
      'Data user / operator: ghkax Limited',
      'English name: ghkax Limited',
      'Correspondence address: 41/F, Enterprise Square Three, 39 Wang Chiu Rd, Kowloon Bay, Hong Kong',
      'English address: 41/F, Enterprise Square Three, 39 Wang Chiu Rd, Kowloon Bay, Hong Kong',
      'Tel: (852) 3120 8846',
      'Fax: (852) 2331 2683',
      'Email: ops@ghkax.com',
      'After receiving your request, we will verify, process, and respond within a reasonable period.',
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
          ghkax Limited values the protection of your personal data and privacy. When you use the "ghkax" mobile application and related services, we may collect, use, store, share, and protect your personal data in accordance with this policy.
        </p>
      </div>
    </section>
    <section class="section section-white">
      <div class="container">
        <div class="policy-shell">
          <div class="policy-meta">
            <span class="badge badge-blue">Public Page</span>
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

<style scoped src="../styles/privacy-ios.css"></style>
