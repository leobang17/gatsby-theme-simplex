import { AllMdxQuery } from '../@types/mdx-types'
import { PageGraphQL } from '../@types/nodeapi-types'
import { CreatePagesArgs } from './createCategoryPages'
import { resolve } from 'path'

export const createArticlePages = async (args: CreatePagesArgs) => {
  const {
    actions: { createPage },
    graphql,
  } = args

  const postTemplate = resolve(`src/templates/ArticlePage.tsx`)
  const results = await getAllMdx(graphql)
  results.forEach(node => {
    createPage({
      path: 'posts' + node.fields.slug,
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
            category {
              major
              minor
              slug
            }
          }
          frontmatter {
            createdAt(formatString: "MMM DD YYYY")
            slug
            tags
            title
            updatedAt
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
