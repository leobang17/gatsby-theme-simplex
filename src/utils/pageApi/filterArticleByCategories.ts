import { MdxNode } from 'types/mdx-types'
import CategoryStrings from 'datastructures/category/CategoryStrings'

export default function filterArticleByCategories(
  nodes: MdxNode[],
  categoryString: CategoryStrings,
) {
  return nodes.filter(node => isSubDirectory(node, categoryString))
}

function isSubDirectory(node: MdxNode, categoryString: CategoryStrings) {
  const iteratingCategory = CategoryStrings.initialize(
    node.fields.categoryDirectory,
  )
  return categoryString.isParentOf(iteratingCategory)
}
