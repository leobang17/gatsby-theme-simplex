export type UserInput = {
  metadata: BlogMetadata
  bio: Bio
  social: Social
  tableOfContents: TableOfContentConfigs
  category: CategoryConfigs
  theme: BlogTheme
}

export type BlogMetadata = {
  title: string
  description: string
  siteUrl: string
}

export type Bio = {
  name: string
}

export type Social = {
  github: string
}

export type BlogTheme = {
  light: ThemeColors
  // dark: ThemeColors
}

export type TableOfContentConfigs = {
  maxDepth: 1 | 2 | 3 | 4 | 5
}

export type CategoryConfigs = {
  maxDepth: 1 | 2
}

export type ThemeColors = {
  main: string
  sub: string
}
