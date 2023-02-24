import { graphql, useStaticQuery } from 'gatsby'

import { GroupByNode } from 'types/mdx-types'
import MdxQueries from './mdxQueries'

class MdxStaticQueries implements MdxQueries {
  constructor() {}

  getCategoryGroupbyCategoryDirectory(): GroupByNode[] {
    const data = useStaticQuery(graphql`
      query mdxGroupBySlug {
        allCategory(sort: { categoryDirectory: ASC }) {
          group(field: { categoryDirectory: SELECT }) {
            fieldValue
            totalCount
          }
        }
      }
    `)

    return data.allCategory.group
  }
}

export default MdxStaticQueries
