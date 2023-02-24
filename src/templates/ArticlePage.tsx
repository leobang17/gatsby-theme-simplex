import React from 'react'
import { graphql } from 'gatsby'

import ArticleLayout from 'components/Layout/ArticleLayout'
import MarkdownWrapper from 'components/MarkdownWrapper'
import ArticleContextProvider from 'contexts/article/ArticleContextProvider'

// @ts-ignore
const ArticlePage = ({ data, children }) => {
  return (
    <ArticleContextProvider data={data}>
      <ArticleLayout>
        <div>
          <h1>{data.mdx.frontmatter.title}</h1>
          <div>Post Date: {data.mdx.frontmatter.createdAt}</div>
          <MarkdownWrapper>{children}</MarkdownWrapper>
        </div>
      </ArticleLayout>
    </ArticleContextProvider>
  )
}

export default ArticlePage

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
      fields {
        slug
      }
      frontmatter {
        createdAt(formatString: "MMM DD, YYYY")
        slug
        tags
        title
        updatedAt
      }
      tableOfContents
    }
  }
`
