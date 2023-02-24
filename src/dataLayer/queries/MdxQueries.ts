import { GroupByNode } from 'types/mdx-types'

export default interface MdxQueries {
  getCategoryGroupbyCategoryDirectory(): GroupByNode[] | Promise<GroupByNode[]>
}
