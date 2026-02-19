<script setup lang="ts">
import type { HeroAction } from '../../models/landing'

defineProps<{
  backgroundUrl: string
  wowLogoUrl: string
  title: string
  description: string
  platformText: string
  actions: HeroAction[]
}>()
</script>

<template>
  <section class="hero" :style="{ backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.55), rgba(0,0,0,.7)), url(${backgroundUrl})` }">
    <div class="hero__content">
      <img class="hero__logo" :src="wowLogoUrl" alt="World of Warcraft" />
      <p class="hero__kicker">Mists of Pandaria Classic</p>
      <h1>{{ title }}</h1>
      <p class="hero__description">{{ description }}</p>

      <div class="hero__actions">
        <a
          v-for="action in actions"
          :key="action.label"
          :href="action.href"
          :class="['button', `button--${action.variant}`]"
        >
          {{ action.label }}
        </a>
      </div>

      <p class="hero__platform">{{ platformText }}</p>
    </div>
  </section>
</template>
