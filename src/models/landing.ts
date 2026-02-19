export interface NavItem {
  label: string
  href: string
}

export interface HeroAction {
  label: string
  href: string
  variant: 'gold' | 'green'
}

export interface LandingContent {
  brandLogoUrl: string
  wowLogoUrl: string
  heroBackgroundUrl: string
  navItems: NavItem[]
  heroTitle: string
  heroDescription: string
  platformText: string
  accountLabel: string
  topActions: HeroAction[]
  heroActions: HeroAction[]
}

export const landingContent: LandingContent = {
  brandLogoUrl:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Blizzard_Entertainment_Logo.svg/512px-Blizzard_Entertainment_Logo.svg.png',
  wowLogoUrl:
    'https://upload.wikimedia.org/wikipedia/en/thumb/6/65/World_of_Warcraft_logo.svg/512px-World_of_Warcraft_logo.svg.png',
  heroBackgroundUrl:
    'https://images2.alphacoders.com/115/1152759.jpg',
  navItems: [
    { label: 'Overview', href: '#' },
    { label: 'Features', href: '#' },
    { label: 'Game Upgrades', href: '#' },
    { label: 'FAQ', href: '#' }
  ],
  heroTitle: 'Rediscover Pure Adventure',
  heroDescription:
    'Mists of Pandaria Classic™ is now available and is included with an active WoW Subscription or game time!',
  platformText: 'Available on Windows/Mac · Battle.net',
  accountLabel: 'Account',
  topActions: [
    { label: 'Subscribe', href: '#', variant: 'green' },
    { label: 'Shop Upgrades', href: '#', variant: 'gold' }
  ],
  heroActions: [
    { label: 'Shop Upgrades', href: '#', variant: 'gold' },
    { label: 'Subscribe', href: '#', variant: 'green' }
  ]
}
