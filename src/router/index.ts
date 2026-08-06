import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'HomePage', component: () => import('../views/HomePage.vue') },
    { path: '/about', name: 'AboutPage', component: () => import('../views/AboutPage.vue') },
    { path: '/ecosystem', name: 'EcosystemPage', component: () => import('../views/EcosystemPage.vue') },
    { path: '/advantages', name: 'AdvantagesPage', component: () => import('../views/AdvantagesPage.vue') },
    { path: '/cooperation', name: 'CooperationPage', component: () => import('../views/CooperationPage.vue') },
    { path: '/comparison', name: 'ComparisonPage', component: () => import('../views/ComparisonPage.vue') },
    { path: '/contact', name: 'ContactPage', component: () => import('../views/ContactPage.vue') },
    {
      path: '/platform-features',
      name: 'PlatformFeatures',
      component: () => import('../views/PlatformFeaturesPage.vue'),
    },
    { path: '/products', name: 'ProductsPage', component: () => import('../views/ProductsPage.vue') },
    {
      path: '/privacy-policy',
      name: 'PrivacyPolicyPage',
      component: () => import('../views/PrivacyPolicyPage.vue'),
    },
    {
      path: '/account-deletion',
      name: 'AccountDeletionPage',
      component: () => import('../views/AccountDeletionPage.vue'),
    },
    {
      path: '/privacy-policy-ios',
      name: 'PrivacyPolicyPageIos',
      component: () => import('../views/PrivacyPolicyPageIos.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFoundPage',
      component: () => import('../views/NotFoundPage.vue'),
    },
  ],
})

export default router
