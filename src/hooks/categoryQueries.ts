import { graphql, useStaticQuery } from 'gatsby'
import { AllMdxGroupByQuery, GroupByNode } from 'types/mdx-types'
import { graphqlToTree } from './dtos/graphqlToTree'

export const getCategoryTree = () => {
  const results = getCategoryGroupbySlug()
  const tree = graphqlToTree(results)
  return tree.toObject()
}

const getCategoryGroupbySlug = (): GroupByNode[] => {
  const data = useStaticQuery(graphql`
    query mdxGroupBySlug {
      allMdx(sort: { fields: { category: { slug: ASC } } }) {
        group(field: { fields: { category: { slug: SELECT } } }) {
          fieldValue
          totalCount
        }
      }
    }
  `) as AllMdxGroupByQuery

  return data.allMdx.group
}
