import { graphql, useStaticQuery } from 'gatsby'

import { SiteMetadata } from 'types/metadata-types'

class SiteMetadataQuery {
  constructor() {}

  getSiteMetadata(): SiteMetadata {
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
              linkedin
              twitter
            }
          }
        }
      }
    `)

    return data.site!.siteMetadata
  }
}

export default SiteMetadataQuery
