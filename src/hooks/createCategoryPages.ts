import { resolve } from 'path'
import { Actions } from 'gatsby'

import { CreatePage, PageGraphQL } from '../@types/nodeapi-types'
import { CategoryTreeObject } from '../datastructures/category/CategoryTree'
import { CategoryPageContext } from '../templates/CategoryPage'
import { PAGE_PREFIX } from '../constants/PageConsts'
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

  const api = DataLayer.singleton.configurePageGraphql(graphql).categoryApi
  const categoryObject = (await api.getCategoryTree()).toObject()
  createPageRecur(createPage, categoryObject)
}

const createPageRecur = (
  createPage: CreatePage,
  category: CategoryTreeObject,
) => {
  const context: CategoryPageContext = {
    categoryDirectory: category.categoryDirectory,
  }
  createPage({
    path: PAGE_PREFIX.CATEGORY + category.slug,
    component: resolve('./src/templates/CategoryPage.tsx'),
    context,
  })
  category.sub.forEach(subCategory => {
    createPageRecur(createPage, subCategory)
  })
}
