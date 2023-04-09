import { resolve } from 'path'

import { AllMdxQuery } from '../@types/mdx-types'
import { PageGraphQL } from '../@types/nodeapi-types'
import { CreatePagesArgs } from './createCategoryPages'
import { PAGE_PREFIX } from '../constants/PageConsts'

export const createArticlePages = async (args: CreatePagesArgs) => {
  const {
    actions: { createPage },
    graphql,
  } = args

  const postTemplate = resolve(`src/templates/ArticlePage.tsx`)
  const results = await getAllMdx(graphql)
  results.forEach(node => {
    createPage({
      path: PAGE_PREFIX.ARTICLE + node.fields.slug,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
      },
    })
  })
}

const getAllMdx = async (graphql: PageGraphQL) => {
  const results = (await graphql(`
    query {
      allMdx(sort: { frontmatter: { createdAt: DESC } }) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            title
            createdAt(formatString: "MMM DD YYYY")
          }
          excerpt(pruneLength: 250)
          internal {
            contentFilePath
          }
        }
      }
    }
  `)) as { data: AllMdxQuery }

  return results.data.allMdx.nodes
}
