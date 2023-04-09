import { ConfigProperty } from 'datastructures/metadata/properties/abstracts/ConfigProperty'
import { Bio, BlogMetadata, Social } from './user-input.types'

export type SiteMetadata = {
  blogMetadata: BlogMetadata
  bio: Bio
  social: Social
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
