/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

import { GatsbyConfig } from 'gatsby'
import { url } from 'inspector'

/**
 * @type {import('gatsby').GatsbyConfig}
 */
const config: GatsbyConfig = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    /**
     * Typescript Config
     */
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    /**
     * Source plugin Config
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `documents`,
        path: `${__dirname}/documents`,
      },
    },
    /**
     * Gatsby Transformer Configs
     */
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 768,
              quality: 100,
              withWebp: true,
            },
          },
          {
            resolve: 'gatsby-remark-smartypants',
            options: {
              dashes: 'oldschool',
            },
          },
        ],
      },
    },

    /**
     * Gatsby Image Configs
     */
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    /**
     * Gatsby Style Configs
     */
    `gatsby-plugin-emotion`,
  ],
}

export default config
