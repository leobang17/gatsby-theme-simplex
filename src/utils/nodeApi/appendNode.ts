import crypto from 'crypto'
import {
  CreateNode,
  CreateNodeField,
  FieldInput,
  GraphQLNode,
  NodeInput,
} from '../../@types/nodeapi-types'

export function appendNodeField(
  createNodeField: CreateNodeField,
  node: GraphQLNode,
  fieldInput: FieldInput,
): void {
  createNodeField({
    node,
    name: fieldInput.key,
    value: fieldInput.value,
  })
}

export function appendNewNode(
  createNode: CreateNode,
  node: GraphQLNode,
  nodeInput: NodeInput,
) {
  const { type, key, value } = nodeInput
  createNode({
    id: `${node.id}-${key}`,
    parent: node.id,
    children: [],
    internal: {
      type,
      contentDigest: createContentDigest(value),
    },
    [key]: value,
  })
}

function createContentDigest(object: Object) {
  return crypto.createHash(`md5`).update(JSON.stringify(object)).digest(`hex`)
}
