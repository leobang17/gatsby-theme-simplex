export type SiteMetadata = {
  blogDetail: BlogDetail
  bio: Bio
  social: Social
}

export type BlogDetail = {
  title: string
  description: string
  siteUrl?: string
  githubUsername: string
}

export type Bio = {
  name: string
  thumbnail?: string
  introduction: string
  email: string
  website?: string
  location?: string
  company?: string
}

export type Social = {
  github?: string
  instagram?: string
  facebook?: string
  linkedIn?: string
  twitter?: string
}
