import { graphql, useStaticQuery } from 'gatsby'

export type SiteMetaData = {
  title: string
  author: string
  description: string
  siteUrl: string
  githubUsername?: string
}

export const fetchSiteMetadata = (): SiteMetaData => {
  const data = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          author
          description
          siteUrl
          githubUsername
        }
      }
    }
  `)

  return data.site!.siteMetadata
}
