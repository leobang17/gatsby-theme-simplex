import { SocialProvider } from 'types/social-provider-types'
import ConfigProperty from 'datastructures/metadata/properties/abstracts/ConfigProperty'

import MetadataService from '../services/MetadataService'

class MetadataAPI {
  constructor(private service: MetadataService) {}

  getBlogMetadata() {
    return this.service.getBlogMetadataProperty()
  }

  getBio() {
    return this.service.getBioProperty()
  }

  getSocial() {
    return this.service.getSocial()
  }

  getSocialSingle(social: SocialProvider): ConfigProperty {
    return this.getSocial()[social]
  }
}

export default MetadataAPI
