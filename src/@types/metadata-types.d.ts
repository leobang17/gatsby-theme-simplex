import { ConfigProperty } from 'datastructures/metadata/properties/abstracts/ConfigProperty'

export type SiteMetadata = {
  blogMetadata: Readonly<BlogDetail>
  bio: Readonly<Bio>
  social: Readonly<Social>
}

export type BlogMetadata = {
  title: readonly string // REQUIRED
  description: readonly string // REQUIRED
  siteUrl: readonly string
}

export type Bio = {
  name: readonly string // REQUIRED
  thumbnail: readonly string
  introduction: readonly string // REQUIRED
  email: readonly string // REQUIRED
  website: readonly string
  location: readonly string
  company: readonly string
}

export type Social = {
  github: readonly string
  instagram: readonly string
  facebook: readonly string
  linkedin: readonly string
  twitter: readonly string
}

export type SiteMetadataProperty = {
  bio: BioProperty
  blogMetadata: BlogMetadataProperty
  social: SocialProperty
}

export type BlogMetadataProperty = {
  [K in keyof BlogDetail]: ConfigProperty
}

export type BioProperty = {
  [K in keyof Bio]: ConfigProperty
}

export type SocialProperty = {
  [K in keyof Social]: ConfigProperty
}
