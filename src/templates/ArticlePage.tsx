import ArticleLayout from 'components/Layout/ArticleLayout'
import MarkdownWrapper from 'components/MarkdownWrapper'
import ArticleContextProvider from 'contexts/article/ArticleContextProvider'
import { graphql } from 'gatsby'
import React from 'react'

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
        category {
          major
          minor
          slug
        }
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
