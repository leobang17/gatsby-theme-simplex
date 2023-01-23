export const socialProviders = [
  'twitter',
  'facebook',
  'instagram',
  'linkedin',
  'github',
] as const

export type SocialProvider = (typeof socialProviders)[number]
