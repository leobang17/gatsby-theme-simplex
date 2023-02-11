import { SocialProvider, socialProviders } from 'types/social-provider-types'

export const extractDomain = (url: string): string | undefined => {
  const regex = new RegExp('^(https://)?(www.)?([A-Za-z0-9-_]+).com/')
  const res = regex.exec(url)
  if (res == null) throw Error
  return res[3]
}

export const extractSocialProvider = (url: string): SocialProvider => {
  const domain = extractDomain(url)
  if (!isSocialProvider(domain)) throw Error
  return domain
}

const isSocialProvider = (x: any): x is SocialProvider =>
  socialProviders.includes(x)
