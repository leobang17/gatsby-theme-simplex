import { graphql, useStaticQuery } from 'gatsby'
import { AllFileQuery } from 'types/graphql-types'

export default function getSvgs() {
  const data = useStaticQuery<AllFileQuery>(graphql`
    query SvgQuery {
      allFile(
        filter: {
          extension: { eq: "svg" }
          sourceInstanceName: { eq: "assets" }
        }
      ) {
        nodes {
          id
          name
          publicURL
        }
      }
    }
  `)

  return data.allFile
}
