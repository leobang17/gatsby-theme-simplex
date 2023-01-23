export const socialProviders = [
  'github',
  'linkedin',
  'facebook',
  'instagram',
  'twitter',
] as const

export type SocialProvider = (typeof socialProviders)[number]
