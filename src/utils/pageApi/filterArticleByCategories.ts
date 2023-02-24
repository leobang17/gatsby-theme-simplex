import { MdxNode } from 'types/mdx-types'
import { CategoryPageContext } from 'templates/CategoryPage'

export default function filterArticleByCategories(
  nodes: MdxNode[],
  pageContext: CategoryPageContext,
) {
  const { rawSlug } = pageContext
  return nodes.filter(node =>
    isParentDirectory(rawSlug, node.fields.categoryDirectory),
  )
}

function isParentDirectory(parentDir: string, childDir: string) {
  return childDir.startsWith(parentDir)
}
