/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

import { GatsbyNode } from 'gatsby'
import path from 'path'
import { createArticlePages } from './src/hooks/createArticlePages'

import { onMdxCreateCategories } from './src/hooks/createCategories'
import { createCategoryPages } from './src/hooks/createCategoryPages'

// Setup Import Alias
export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  getConfig,
  actions,
}) => {
  const output = getConfig().output || {}

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        utils: path.resolve(__dirname, 'src/utils'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        types: path.resolve(__dirname, 'src/@types'),
        styles: path.resolve(__dirname, 'src/styles'),
        contexts: path.resolve(__dirname, 'src/contexts'),
        datastructures: path.resolve(__dirname, 'src/datastructures'),
      },
    },
  })
}

export const onCreateNode: GatsbyNode['onCreateNode'] = ({
  node,
  getNode,
  actions,
}) => {
  onMdxCreateCategories({ node, getNode, actions })
}

export const createPages: GatsbyNode['createPages'] = async ({
  actions,
  graphql,
}) => {
  await createCategoryPages({ actions, graphql })
  await createArticlePages({ actions, graphql })
}
