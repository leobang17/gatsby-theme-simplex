import { CreateNodeArgs, Node } from 'gatsby'
import { createFilePath } from 'gatsby-source-filesystem'

import { MdxNode } from '../@types/mdx-types'
import CategoryStrings from '../datastructures/category/CategoryStrings'
import appendCategoryDirectoryField from '../nodeApi/appendNodeField/appendCategoryDirectoryField'
import appendSlugField from '../nodeApi/appendNodeField/appendSlugField'
import appendTimeToRead from '../nodeApi/appendNodeField/appendTimeToReadField'
import { slugify } from '../utils/slug'

type CreateCategoriesArgs = Pick<CreateNodeArgs, 'node' | 'actions' | 'getNode'>

export default function onMdxAppendFields(args: CreateCategoriesArgs) {
  const { node, getNode, actions } = args
  const { createNodeField } = actions
  if (isMdx(node)) {
    const mdxNode = node as MdxNode
    const path = createFilePath({ node, getNode })
    const categoryString = CategoryStrings.initializeWithFilePath(path)
    const articleSlug = buildArticleSlug(mdxNode)

    appendTimeToRead(createNodeField, mdxNode)
    appendSlugField(createNodeField, mdxNode, articleSlug)
    appendCategoryDirectoryField(
      createNodeField,
      mdxNode,
      categoryString.categoryDirectory,
    )
  }
}

function isMdx(node: Node): boolean {
  return node.internal.type === 'Mdx'
}

function buildArticleSlug(node: MdxNode) {
  escapeIfNotMdx(node)
  return '/' + slugify(node.frontmatter.title)
}

function escapeIfNotMdx(node: MdxNode) {
  if (!isMdx(node)) {
    throw new Error("DON'T CALL THIS FUNCTION INSIDE NON-MDX NODE")
  }
}
