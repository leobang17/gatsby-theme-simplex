import { MdxNode } from '../../@types/mdx-types'
import { CreateNodeField } from '../../@types/nodeapi-types'
import { appendNodeField } from '../../utils/nodeApi/appendNode'

export default function appendCategoryDirectoryField(
  createNodeField: CreateNodeField,
  node: MdxNode,
  categoryDirectory: string,
) {
  appendNodeField(createNodeField, node, {
    key: 'categoryDirectory',
    value: categoryDirectory,
  })
}
