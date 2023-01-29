import { resolve } from 'path'
import { Actions } from 'gatsby'
import { CreatePage, PageGraphQL } from '../@types/nodeapi-types'
import { CategoryTreeObject } from './CategoryTree'
import { graphqlToTree } from './dtos/graphqlToTree'
import { slugToCategory } from '../utils/slug'
import { CategoryPageContext } from '../templates/CategoryPage'
import { AllMdxGroupByQuery } from '../@types/mdx-types'

export type CreatePagesArgs = {
  actions: Actions
  graphql: PageGraphQL
}

export const createCategoryPages = async (args: CreatePagesArgs) => {
  const {
    actions: { createPage },
    graphql,
  } = args

  const results = await getCategoryGroupbySlugPage(graphql)
  const categoryObject = graphqlToTree(results).toObject()
  createPageRecur(createPage, categoryObject)
}

const getCategoryGroupbySlugPage = async (graphql: PageGraphQL) => {
  const results = await mdxGroupBySlugQuery(graphql)
  return results.data.allMdx.group
}

const mdxGroupBySlugQuery = async (graphql: PageGraphQL) => {
  return (await graphql(`
    query mdxGroupBySlug {
      allMdx(sort: { fields: { category: { slug: ASC } } }) {
        group(field: { fields: { category: { slug: SELECT } } }) {
          fieldValue
          totalCount
        }
      }
    }
  `)) as { data: AllMdxGroupByQuery }
}

const createPageRecur = (
  createPage: CreatePage,
  category: CategoryTreeObject,
) => {
  const [major, minor] = slugToCategory(category.slug)
  const context: CategoryPageContext = {
    major,
    minor,
  }
  createPage({
    path: 'posts' + category.slug,
    component: resolve('./src/templates/CategoryPage.tsx'),
    context,
  })
  category.sub.forEach(subCategory => {
    createPageRecur(createPage, subCategory)
  })
}
