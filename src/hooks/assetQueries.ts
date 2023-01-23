import { graphql, useStaticQuery } from 'gatsby'
import { SocialProvider } from '../@types/social-provider-types'

type SvgResult = {
  node: {
    id: string
    name: string
    publicURL: string
  }
}

export const fetchSvgLogoUrl = (social: SocialProvider) => {
  const result = fetchSvg().find(node => node.node.name === social)
  return result?.node.publicURL
}

const fetchSvg = (): SvgResult[] => {
  const data = useStaticQuery(graphql`
    query SvgQuery {
      allFile(
        filter: {
          extension: { eq: "svg" }
          sourceInstanceName: { eq: "assets" }
        }
      ) {
        edges {
          node {
            id
            name
            publicURL
          }
        }
      }
    }
  `)
  return data.allFile.edges
}
