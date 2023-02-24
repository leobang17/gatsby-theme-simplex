import CategoryService from 'dataLayer/services/CategoryService'

class CategoryAPI {
  constructor(private categoryService: CategoryService) {}

  async getCategoryTree() {
    return await this.categoryService.getCategoryTreee()
  }

  getCategoryTreeSync() {
    return this.categoryService.getCategoryTreeSync()
  }
}

export default CategoryAPI
