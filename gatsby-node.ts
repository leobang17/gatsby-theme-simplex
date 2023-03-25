/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

import { GatsbyNode } from 'gatsby'
import path from 'path'
import { createArticlePages } from './src/hooks/createArticlePages'

import { createCategoryPages } from './src/hooks/createCategoryPages'
import onMdxAppendFields from './src/hooks/onMdxAppendFields'
import onMdxCreateCategories from './src/hooks/onMdxCreateCategories'
import redirectIndexToAllPosts from './src/nodeApi/redirectIndexToAllPosts'

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
        datalayer: path.resolve(__dirname, 'src/dataLayer'),
        constants: path.resolve(__dirname, 'src/constants'),
      },
    },
  })
}

export const onCreateNode: GatsbyNode['onCreateNode'] = ({
  node,
  getNode,
  actions,
}) => {
  onMdxAppendFields({ node, getNode, actions })
  onMdxCreateCategories({ node, getNode, actions })
}

export const createPages: GatsbyNode['createPages'] = async ({
  actions,
  graphql,
}) => {
  redirectIndexToAllPosts(actions)
  await createCategoryPages({ actions, graphql })
  await createArticlePages({ actions, graphql })
}
