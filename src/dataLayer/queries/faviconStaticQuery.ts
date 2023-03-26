import { graphql, useStaticQuery } from 'gatsby'
import { FileQuery } from 'types/graphql-types'

export default function getFavicon() {
  const data = useStaticQuery<FileQuery>(graphql`
    query faviconQuery {
      file(
        extension: { eq: "ico" }
        sourceInstanceName: { eq: "assets" }
        name: { eq: "favicon" }
      ) {
        id
        publicURL
        name
      }
    }
  `)

  return data.file
}
