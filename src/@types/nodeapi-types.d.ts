import { Actions, CreatePagesArgs, Node } from 'gatsby'

export type FieldInput = {
  key: string
  value: Object
}

export type NodeInput = FieldInput & {
  type: string
}

export type PageGraphQL = Pick<CreatePagesArgs, 'graphql'>['graphql']

export type CreateNodeField = Actions['createNodeField']
export type CreateNode = Actions['createNode']
export type CreatePage = Actions['createPage']
export type GraphQLNode = Node & Record<string, unknown>
