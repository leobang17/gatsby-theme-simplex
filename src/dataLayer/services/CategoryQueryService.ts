import MdxQueries from '../queries/mdxQueries'

class CategoryQueryService {
  constructor(private mdxQueries: MdxQueries) {}

  async getCategories() {
    const data = this.mdxQueries.getCategoryGroupbyCategoryDirectory()
    return this.resolvePromise(data)
  }

  getCategoriesSync() {
    return this.mdxQueries.getCategoryGroupbyCategoryDirectory()
  }

  private async resolvePromise<T>(data: Promise<T> | T) {
    if (data instanceof Promise) {
      return data
    }
    return data
  }
}

export default CategoryQueryService
