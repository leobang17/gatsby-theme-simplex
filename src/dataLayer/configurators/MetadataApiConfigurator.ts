import MetadataAPI from '../api/MetadataAPI'
import SiteMetadataQuery from '../queries/SiteMetadataQuery'
import MetadataService from '../services/MetadataService'

class MetadataApiConfigurator {
  private static _instance: MetadataApiConfigurator
  private readonly _api: MetadataAPI

  constructor() {
    const query = this._getSiteMetadataQuery()
    const service = this._getMetadataService(query)
    this._api = new MetadataAPI(service)
  }

  get api() {
    return this._api
  }

  static get instance() {
    if (!this._instance) {
      this._instance = new MetadataApiConfigurator()
    }

    return this._instance
  }

  private _getMetadataService(query: SiteMetadataQuery) {
    return new MetadataService(query)
  }

  private _getSiteMetadataQuery() {
    return new SiteMetadataQuery()
  }
}

export default MetadataApiConfigurator
