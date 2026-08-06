<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="app-shell">
    <Transition appear name="slide-down">
      <AppHeader />
    </Transition>
    <main class="main-container">
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
    <Transition appear name="slide-up">
      <AppFooter />
    </Transition>
  </div>
</template>
