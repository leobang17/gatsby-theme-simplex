import AssetAPI from 'datalayer/api/AssetAPI'
import AssetService from 'datalayer/services/AssetService'

class AssetApiConfigurator {
  private static _instance: AssetApiConfigurator
  private readonly _api: AssetAPI

  constructor() {
    const service = this._getService()
    this._api = new AssetAPI(service)
  }

  get api() {
    return this._api
  }

  static get instance() {
    if (!this._instance) {
      this._instance = new AssetApiConfigurator()
    }
    return this._instance
  }

  private _getService() {
    return new AssetService()
  }
}

export default AssetApiConfigurator
