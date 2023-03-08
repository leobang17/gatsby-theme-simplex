import { MdxNode } from '../../@types/mdx-types'
import { CreateNodeField } from '../../@types/nodeapi-types'
import { appendNodeField } from '../../utils/nodeApi/appendNode'

export default function appendSlugField(
  createNodeField: CreateNodeField,
  node: MdxNode,
  slug: string,
) {
  appendNodeField(createNodeField, node, {
    key: 'slug',
    value: slug,
  })
}
