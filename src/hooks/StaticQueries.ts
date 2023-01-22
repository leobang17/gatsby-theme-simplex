import { graphql, useStaticQuery } from 'gatsby'
import { Bio, BlogDetail, SiteMetadata, Social } from '../@types/metadata-types'

export const fetchSiteMetadata = (): SiteMetadata => {
  const data = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          bio {
            name
            thumbnail
            introduction
            email
            website
            location
            company
          }
          blogDetail {
            title
            description
            siteUrl
            githubUsername
          }
          social {
            github
            instagram
            facebook
            linkedIn
            twitter
          }
        }
      }
    }
  `)
  return data.site!.siteMetadata
}

export const fetchBio = (): Bio => {
  return fetchSiteMetadata().bio
}

export const fetchBlogDetail = (): BlogDetail => {
  return fetchSiteMetadata().blogDetail
}

export const fetchSocial = (): Social => {
  return fetchSiteMetadata().social
}
