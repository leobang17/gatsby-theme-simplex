import { PageGraphQL } from '../../@types/nodeapi-types'

import CategoryAPI from '../api/CategoryAPI'
import MdxPageQueries from '../queries/MdxPageQueries'
import MdxQueries from '../queries/mdxQueries'
import MdxStaticQueries from '../queries/MdxStaticQueries'
import CategoryQueryService from '../services/CategoryQueryService'
import CategoryService from '../services/CategoryService'

class CategoryApiConfigurator {
  public readonly api: CategoryAPI

  public constructor(private graphql?: PageGraphQL) {
    this.api = this._constructCategoryAPI()
  }

  private _constructCategoryAPI() {
    const mdxQueries = this._getMdxQueries()
    const categoryQueryService = this._getCategoryQueryService(mdxQueries)
    const categoryService = this._getCategoryService(categoryQueryService)
    return new CategoryAPI(categoryService)
  }

  private _getCategoryService(categoryQueryService: CategoryQueryService) {
    return new CategoryService(categoryQueryService)
  }

  private _getCategoryQueryService(mdxQueries: MdxQueries) {
    return new CategoryQueryService(mdxQueries)
  }

  private _getMdxQueries() {
    if (this.graphql) {
      return new MdxPageQueries(this.graphql)
    }
    return new MdxStaticQueries()
  }
}

export default CategoryApiConfigurator
