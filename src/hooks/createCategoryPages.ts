import { resolve } from 'path'
import { Actions } from 'gatsby'

import { CreatePage, PageGraphQL } from '../@types/nodeapi-types'
import { CategoryTreeObject } from '../datastructures/category/CategoryTree'
import { CategoryPageContext } from '../templates/CategoryPage'
import DataLayer from '../dataLayer/DataLayer'

export type CreatePagesArgs = {
  actions: Actions
  graphql: PageGraphQL
}

export const createCategoryPages = async (args: CreatePagesArgs) => {
  const {
    actions: { createPage },
    graphql,
  } = args

  const api = DataLayer.singleton(graphql).API
  const categoryObject = (await api.getCategoryTree()).toObject()
  createPageRecur(createPage, categoryObject)
}

const createPageRecur = (
  createPage: CreatePage,
  category: CategoryTreeObject,
) => {
  const context: CategoryPageContext = {
    rawSlug: category.rawSlug,
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
