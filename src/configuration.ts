import fillDefaultConfiguration from './utils/fillDefaultConfigurations'
import {
  Bio,
  BlogMetadata,
  Social,
  TableOfContentConfigs,
  ThemeColors,
  UserInput,
} from './@types/user-input.types'
import { FIRST, SECOND } from './styles/Color'

import userInput from '../blog.config.json'

const { metadata, bio, social, tableOfContents, category, theme } =
  userInput as UserInput

export const siteMetadata = {
  blogMetadata: fillDefaultConfiguration<BlogMetadata>(metadata, {
    title: 'Blog Simplex',
    description:
      'Blog created using the "gatsby-theme-simplex" theme. Find it on Github.',
    siteUrl: 'https://github.com/leobang17/gatsby-theme-simplex',
  }),
  social: fillDefaultConfiguration<Social>(social, {
    github: 'https://github.com/leobang17/gatsby-theme-simplex',
  }),
  bio: fillDefaultConfiguration<Bio>(bio, {
    name: 'Default Name',
  }),
}

export const tableOfContentConfigs =
  fillDefaultConfiguration<TableOfContentConfigs>(tableOfContents, {
    maxDepth: 4,
  })

export const categoryConfigs = fillDefaultConfiguration(category, {
  maxDepth: 2,
})

export const themeConfigs = {
  light: fillDefaultConfiguration<ThemeColors>(theme.light, {
    main: FIRST,
    sub: SECOND,
  }),
}
