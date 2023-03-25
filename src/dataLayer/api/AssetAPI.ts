import AssetService from 'datalayer/services/AssetService'
import { SocialProvider } from 'types/social-provider-types'

class AssetAPI {
  constructor(private service: AssetService) {}

  getSvgLogoUrl(social: SocialProvider) {
    return this.service.getSvgLogoUrl(social)
  }

  getFaviconUrl() {
    return this.service.getFaviconUrl()
  }
}

export default AssetAPI
