import CategoryTree from '../../datastructures/category/CategoryTree'
import { GroupByNode } from '../../@types/mdx-types'
import CategoryQueryService from './CategoryQueryService'
import CategoryStrings from '../../datastructures/category/CategoryStrings'

class CategoryService {
  constructor(private categoryQueryService: CategoryQueryService) {}

  async getCategoryTreee() {
    const categoryNodes = await this.categoryQueryService.getCategories()
    return this.constructCategoryTree(categoryNodes)
  }

  getCategoryTreeSync() {
    const categoryNodes = this.categoryQueryService.getCategoriesSync()
    if (!(categoryNodes instanceof Promise)) {
      return this.constructCategoryTree(categoryNodes)
    }
    throw new Error("Don't Call this function with page query")
  }

  private constructCategoryTree(categoryNodes: GroupByNode[]) {
    const categoryTree = new CategoryTree()

    categoryNodes.forEach(node => {
      const categoryString = CategoryStrings.initialize(node.fieldValue)
      const count = node.totalCount
      categoryTree.append(categoryString.categories, count)
    })

    return categoryTree
  }
}

export default CategoryService
