<script setup lang="ts">
import HeaderNav from '../components/layout/HeaderNav.vue'
import HeroSection from '../components/hero/HeroSection.vue'
import { useLandingViewModel } from '../viewmodels/useLandingViewModel'

const { content, navItems, topActions, heroActions } = useLandingViewModel()
</script>

<template>
  <main class="landing-page">
    <HeaderNav
      :brand-logo-url="content.brandLogoUrl"
      :nav-items="navItems"
      :account-label="content.accountLabel"
      :actions="topActions"
    />
    <HeroSection
      :background-url="content.heroBackgroundUrl"
      :wow-logo-url="content.wowLogoUrl"
      :title="content.heroTitle"
      :description="content.heroDescription"
      :platform-text="content.platformText"
      :actions="heroActions"
    />
  </main>
</template>
