<script setup lang="ts">
import type { HeroAction, NavItem } from '../../models/landing'

defineProps<{
  brandLogoUrl: string
  navItems: NavItem[]
  accountLabel: string
  actions: HeroAction[]
}>()
</script>

<template>
  <header class="header">
    <div class="header__brand">
      <img :src="brandLogoUrl" alt="Blizzard" />
    </div>

    <nav class="header__nav">
      <a v-for="item in navItems" :key="item.label" :href="item.href">{{ item.label }}</a>
    </nav>

    <div class="header__account">{{ accountLabel }}</div>

    <div class="header__actions">
      <a
        v-for="action in actions"
        :key="action.label"
        :href="action.href"
        :class="['button', `button--${action.variant}`]"
      >
        {{ action.label }}
      </a>
    </div>
  </header>
</template>
