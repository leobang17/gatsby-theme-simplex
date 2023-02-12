import { CategoryTree } from '../../datastructures/category/CategoryTree'
import { GroupByNode } from 'types/mdx-types'

export const graphqlToTree = (results: GroupByNode[]) => {
  const tree = new CategoryTree()
  results.forEach(cat => {
    tree.append(cat)
  })
  return tree
}
