export const socialProviders = ['github'] as const

export type SocialProvider = (typeof socialProviders)[number]
