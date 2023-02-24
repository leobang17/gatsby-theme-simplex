import { GroupByNode } from 'types/mdx-types'
import { PageGraphQL } from 'types/nodeapi-types'
import MdxQueries from './mdxQueries'

type AllCategoryGroupbyQuery = {
  data: {
    allCategory: {
      group: GroupByNode[]
    }
  }
}

class MdxPageQueries implements MdxQueries {
  constructor(private graphql: PageGraphQL) {}

  async getCategoryGroupbyCategoryDirectory(): Promise<GroupByNode[]> {
    const result = (await this.graphql(`
        query mdxGroupBySlug {
          allCategory(sort: { categoryDirectory: ASC }) {
            group(field: { categoryDirectory: SELECT }) {
              fieldValue
              totalCount
            }
          }
        }
      `)) as AllCategoryGroupbyQuery

    return result.data.allCategory.group
  }
}

export default MdxPageQueries
