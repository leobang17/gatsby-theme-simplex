import { CreateNodeArgs, Node } from 'gatsby'
import { createFilePath } from 'gatsby-source-filesystem'
import { MdxNode } from '../@types/mdx-types'
import { CreateNodeField, GraphQLNode } from '../@types/nodeapi-types'
import * as appendNode from '../utils/nodeApi/appendNode'
import createCategoryDirectory from '../utils/nodeApi/createCategoryDirectory'
import { slugifyFilepath } from '../utils/slug'

type CreateCategoriesArgs = Pick<CreateNodeArgs, 'node' | 'actions' | 'getNode'>

export default function onMdxAppendFields(args: CreateCategoriesArgs) {
  const { node, getNode, actions } = args
  const { createNodeField } = actions
  if (isMdx(node)) {
    const path = createFilePath({ node, getNode })
    const categoryDirectory = createCategoryDirectory(path)
    const slug = buildSlug(node, categoryDirectory)

    appendSlugField(createNodeField, node, slug)
    appendCategoryDirectoryField(createNodeField, node, categoryDirectory)
  }
}

function isMdx(node: GraphQLNode): boolean {
  return node.internal.type === 'Mdx'
}

function buildSlug(node: Node, categoryDirectory: string) {
  escapeIfNotMdx(node)
  const mdxNode = node as MdxNode
  const rawSlugPath = categoryDirectory + '/' + mdxNode.frontmatter.title
  return slugifyFilepath(rawSlugPath)
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
    value: slugifyFilepath(slug),
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
