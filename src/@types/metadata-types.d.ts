import { ConfigProperty } from 'utils/metadata/properties/abstracts/ConfigProperty'

export type SiteMetadata = {
  blogDetail: BlogDetail
  bio: Bio
  social: Social
}

export type BlogDetail = {
  title: string // REQUIRED
  description: string // REQUIRED
  siteUrl: string
  githubUsername: string
}

export type Bio = {
  name: string // REQUIRED
  thumbnail: string
  introduction: string // REQUIRED
  email: string // REQUIRED
  website: string
  location: string
  company: string
}

export type Social = {
  github: string
  instagram: string
  facebook: string
  linkedin: string
  twitter: string
}

export type SiteMetadataProperty = {
  bio: BioProperty
  blogDetail: BlogDetailProperty
  social: SocialProperty
}

export type BlogDetailProperty = {
  [K in keyof BlogDetail]: ConfigProperty
}

export type BioProperty = {
  [K in keyof Bio]: ConfigProperty
}

export type SocialProperty = {
  [K in keyof Social]: ConfigProperty
}
