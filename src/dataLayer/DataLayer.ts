import { PageGraphQL } from 'types/nodeapi-types'

import CategoryAPI from './api/CategoryAPI'
import CategoryApiConfigurator from './configurators/CategoryApiConfigurator'

export default class DataLayer {
  private static _singleton: DataLayer
  private _categoryApi: CategoryAPI

  private constructor() {
    this._categoryApi = new CategoryApiConfigurator().api
  }

  get categoryApi() {
    return this._categoryApi
  }

  static get singleton() {
    if (!this._singleton) {
      this._singleton = new DataLayer()
    }
    return this._singleton
  }

  public configurePageGraphql(graphql: PageGraphQL): DataLayer {
    this._categoryApi = new CategoryApiConfigurator(graphql).api
    return this
  }
}
