import { CreateNodeArgs, Node } from 'gatsby'
import { createFilePath } from 'gatsby-source-filesystem'

import { MdxNode } from '../@types/mdx-types'
import { CreateNodeField, GraphQLNode } from '../@types/nodeapi-types'
import CategoryStrings from '../datastructures/category/CategoryStrings'
import * as appendNode from '../utils/nodeApi/appendNode'
import { slugify } from '../utils/slug'

type CreateCategoriesArgs = Pick<CreateNodeArgs, 'node' | 'actions' | 'getNode'>

export default function onMdxAppendFields(args: CreateCategoriesArgs) {
  const { node, getNode, actions } = args
  const { createNodeField } = actions
  if (isMdx(node)) {
    const path = createFilePath({ node, getNode })
    const categoryString = CategoryStrings.initializeWithFilePath(path)
    const articleSlug = buildArticleSlug(node, categoryString)

    appendSlugField(createNodeField, node, articleSlug)
    appendCategoryDirectoryField(
      createNodeField,
      node,
      categoryString.categoryDirectory,
    )
  }
}

function isMdx(node: GraphQLNode): boolean {
  return node.internal.type === 'Mdx'
}

function buildArticleSlug(node: Node, categoryString: CategoryStrings) {
  escapeIfNotMdx(node)
  const mdxNode = node as MdxNode
  return categoryString.slug + slugify(mdxNode.frontmatter.title)
}

function escapeIfNotMdx(node: Node) {
  if (!isMdx(node)) {
    throw new Error("DON'T CALL THIS FUNCTION INSIDE NON-MDX NODE")
  }
}

function appendSlugField(
  createNodeField: CreateNodeField,
  node: GraphQLNode,
  slug: string,
) {
  appendNode.appendNodeField(createNodeField, node, {
    key: 'slug',
    value: slug,
  })
}

function appendCategoryDirectoryField(
  createNodeField: CreateNodeField,
  node: GraphQLNode,
  categoryDirectory: string,
) {
  appendNode.appendNodeField(createNodeField, node, {
    key: 'categoryDirectory',
    value: categoryDirectory,
  })
}
