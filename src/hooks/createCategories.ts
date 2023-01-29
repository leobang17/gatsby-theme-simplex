import { CreateNodeArgs } from 'gatsby'
import { createFilePath } from 'gatsby-source-filesystem'
import {
  CreateNode,
  CreateNodeField,
  GraphQLNode,
} from '../@types/nodeapi-types'
import * as appendNode from '../utils/nodeApi/appendNode'
import { parseCategories } from '../utils/nodeApi/parseCategories'
import { slugifyFilepath } from '../utils/slug'

type CreateCategoriesArgs = Pick<CreateNodeArgs, 'node' | 'actions' | 'getNode'>

export type DocumentCategory = {
  major: string | undefined
  minor: string | undefined
  slug: string | undefined
}

export function onMdxCreateCategories(args: CreateCategoriesArgs) {
  const { node, getNode, actions } = args
  const { createNode, createNodeField } = actions
  if (isMdx(node)) {
    const path = createFilePath({ node, getNode })
    console.log(path)
    const category = buildCategoryFromSlug(path)

    appendSlugField(createNodeField, node, path)
    appendCategoryField(createNodeField, node, category)
    appendCategoryNode(createNode, node, category)
  }
}

function isMdx(node: GraphQLNode): boolean {
  return node.internal.type === 'Mdx'
}

function buildCategoryFromSlug(slug: string): DocumentCategory {
  const parsedCategories = parseCategories(slug)
  return {
    major: parsedCategories[0],
    minor: parsedCategories[1],
    slug: `${parsedCategories[0] ? parsedCategories[0] + '/' : ''}${
      parsedCategories[1] ?? ''
    }`,
  }
}

function appendSlugField(
  createNodeField: CreateNodeField,
  node: GraphQLNode,
  slug: string,
) {
  appendNode.appendNodeField(createNodeField, node, {
    key: 'slug',
    value: slugifyFilepath(slug),
  })
}

function appendCategoryField(
  createNodeField: CreateNodeField,
  node: GraphQLNode,
  category: DocumentCategory,
) {
  appendNode.appendNodeField(createNodeField, node, {
    key: 'category',
    value: category,
  })
}

function appendCategoryNode(
  createNode: CreateNode,
  node: GraphQLNode,
  category: DocumentCategory,
) {
  appendNode.appendNewNode(createNode, node, {
    type: 'Category',
    key: 'category',
    value: category,
  })
}
