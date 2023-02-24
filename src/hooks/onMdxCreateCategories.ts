import { CreateNode, GraphQLNode } from '../@types/nodeapi-types'

import { CreateNodeArgs } from 'gatsby'
import { createFilePath } from 'gatsby-source-filesystem'

import { appendNewNode } from '../utils/nodeApi/appendNode'
import CategoryStrings from '../datastructures/category/CategoryStrings'

type CreateCategoriesArgs = Pick<CreateNodeArgs, 'node' | 'actions' | 'getNode'>

const CATEGORY_NODE_TYPE = 'Category'

export default function onMdxCreateCategories(args: CreateCategoriesArgs) {
  const { node, actions, getNode } = args
  const { createNode } = actions

  if (isMdx(node)) {
    const path = createFilePath({ node, getNode, trailingSlash: false })
    const categoryStrings = CategoryStrings.initializeWithFilePath(path)
    createCategoryNode(node, createNode, categoryStrings.categoryDirectory)
  }
}

function createCategoryNode(
  node: GraphQLNode,
  createNode: CreateNode,
  categoryDirectory: string,
) {
  appendNewNode(createNode, node, {
    type: CATEGORY_NODE_TYPE,
    key: 'categoryDirectory',
    value: categoryDirectory,
  })
}

function isMdx(node: GraphQLNode): boolean {
  return node.internal.type === 'Mdx'
}
