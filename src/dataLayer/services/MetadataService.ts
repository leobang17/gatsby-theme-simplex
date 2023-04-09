import {
  BioProperty,
  BlogMetadataProperty,
  SocialProperty,
} from 'types/metadata-types'
import { Bio, BlogMetadata, Social } from 'types/user-input.types'
import SiteMetadataQuery from '../queries/SiteMetadataQuery'

import StringProperty from 'datastructures/metadata/properties/StringProperty'
import WebLinkProperty from 'datastructures/metadata/properties/WebLiinkProperty'

class MetadataService {
  constructor(private query: SiteMetadataQuery) {}

  public getBioProperty() {
    return this.convertSiteMetadataToProperty().bio
  }

  public getBlogMetadataProperty() {
    return this.convertSiteMetadataToProperty().blogMetadata
  }

  public getSocial() {
    return this.convertSiteMetadataToProperty().social
  }

  private convertSiteMetadataToProperty() {
    const { bio, blogMetadata, social } = this.query.getSiteMetadata()
    return {
      bio: this.convertBioToProperty(bio),
      blogMetadata: this.convertBlogMetadataToProperty(blogMetadata),
      social: this.convertSocialToProperty(social),
    }
  }

  private convertBioToProperty(data: Bio) {
    return {
      name: new StringProperty(data.name),
      // thumbnail: new StringProperty(data.thumbnail),
      // introduction: new StringProperty(data.introduction),
      // email: new EmailProperty(data.email),
      // website: new StringProperty(data.website),
      // location: new StringProperty(data.location),
      // company: new StringProperty(data.company),
    } as BioProperty
  }

  private convertBlogMetadataToProperty(data: BlogMetadata) {
    return {
      title: new StringProperty(data.title),
      description: new StringProperty(data.description),
      siteUrl: new StringProperty(data.siteUrl),
    } as BlogMetadataProperty
  }

  private convertSocialToProperty(data: Social) {
    return {
      github: new WebLinkProperty(data.github),
      // instagram: new WebLinkProperty(data.instagram),
      // facebook: new WebLinkProperty(data.facebook),
      // linkedin: new WebLinkProperty(data.linkedin),
      // twitter: new WebLinkProperty(data.twitter),
    } as SocialProperty
  }
}

export default MetadataService
