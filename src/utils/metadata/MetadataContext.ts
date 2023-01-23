import { fetchSiteMetadata } from '../../hooks/StaticQueries'
import {
  Bio,
  BioProperty,
  BlogDetail,
  BlogDetailProperty,
  SiteMetadata,
  Social,
  SocialProperty,
} from '../../@types/metadata-types'
import StringProperty from './properties/StringProperty'
import EmailProperty from './properties/EmailProperty'
import WebLinkProperty from './properties/WebLiinkProperty'

class MetadataContext {
  private static instance: MetadataContext
  private readonly bioProperty: BioProperty
  private readonly blogDetailProperty: BlogDetailProperty
  private readonly socialProperty: SocialProperty

  private constructor() {
    const siteMetadata = fetchSiteMetadata()
    const { bio, blogDetail, social } =
      this.convertSiteMetadataToProperty(siteMetadata)
    this.bioProperty = bio
    this.blogDetailProperty = blogDetail
    this.socialProperty = social
  }

  static getInstance(): MetadataContext {
    if (!this.instance) {
      this.instance = new MetadataContext()
    }
    return this.instance
  }

  getBio() {
    return this.bioProperty
  }

  getSocial() {
    return this.socialProperty
  }

  getBlogDetail() {
    return this.blogDetailProperty
  }

  private convertSiteMetadataToProperty(data: SiteMetadata) {
    const { bio, blogDetail, social } = data
    return {
      bio: this.convertBioToProperty(bio),
      blogDetail: this.convertBlogDetailToProperty(blogDetail),
      social: this.convertSocialToProperty(social),
    }
  }

  private convertBioToProperty(data: Bio) {
    return {
      name: new StringProperty(data.name),
      thumbnail: new StringProperty(data.thumbnail),
      introduction: new StringProperty(data.introduction),
      email: new EmailProperty(data.email),
      website: new StringProperty(data.website),
      location: new StringProperty(data.location),
      company: new StringProperty(data.company),
    } as BioProperty
  }

  private convertBlogDetailToProperty(data: BlogDetail) {
    return {
      title: new StringProperty(data.title),
      description: new StringProperty(data.description),
      siteUrl: new StringProperty(data.siteUrl),
      githubUsername: new StringProperty(data.githubUsername),
    } as BlogDetailProperty
  }

  private convertSocialToProperty(data: Social) {
    return {
      github: new WebLinkProperty(data.github),
      instagram: new WebLinkProperty(data.instagram),
      facebook: new WebLinkProperty(data.facebook),
      linkedIn: new WebLinkProperty(data.linkedIn),
      twitter: new WebLinkProperty(data.twitter),
    } as SocialProperty
  }
}

export default MetadataContext
