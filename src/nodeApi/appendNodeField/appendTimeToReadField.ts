import readingTime from 'reading-time'

import { MdxNode } from '../../@types/mdx-types'
import { CreateNodeField } from '../../@types/nodeapi-types'
import { appendNodeField } from '../../utils/nodeApi/appendNode'

export default function appendTimeToRead(
  createNodeField: CreateNodeField,
  node: MdxNode,
) {
  appendNodeField(createNodeField, node, {
    key: 'timeToRead',
    value: getReadingTime(node.body),
  })
}

function getReadingTime(body: string) {
  const { minutes } = readingTime(body)
  return Math.round(minutes)
}
