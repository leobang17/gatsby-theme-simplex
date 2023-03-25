import getFavicon from 'datalayer/queries/faviconStaticQuery'
import getSvgs from 'datalayer/queries/svgStaticQuery'
import { SocialProvider } from 'types/social-provider-types'

class AssetService {
  getSvgLogoUrl(social: SocialProvider) {
    const svg = getSvgs().nodes.find(node => node.name === social)
    return svg?.publicURL
  }

  getFaviconUrl() {
    const data = getFavicon()
    return data.publicURL
  }
}

export default AssetService
