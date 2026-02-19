import { computed } from 'vue'
import { landingContent } from '../models/landing'

export function useLandingController() {
  const navItems = computed(() => landingContent.navItems)
  const topActions = computed(() => landingContent.topActions)
  const heroActions = computed(() => landingContent.heroActions)

  return {
    content: landingContent,
    navItems,
    topActions,
    heroActions
  }
}
