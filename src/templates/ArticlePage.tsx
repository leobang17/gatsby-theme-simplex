import React from 'react'
import { graphql } from 'gatsby'

import ArticleLayout from 'components/Layout/ArticleLayout'
import MarkdownWrapper from 'components/MarkdownWrapper'
import ArticleFrontmatter from 'components/ArticleFrontmatter'
import ArticlePageContext from 'contexts/ArticlePageContext'

// @ts-ignore
const ArticlePage = ({ data, children }) => {
  const frontmatters = {
    ...data.mdx.frontmatter,
    timeToRead: data.mdx.fields.timeToRead,
  }

  return (
    <ArticlePageContext data={data}>
      <ArticleLayout>
        <ArticleFrontmatter {...frontmatters} />
        <MarkdownWrapper>{children}</MarkdownWrapper>
      </ArticleLayout>
    </ArticlePageContext>
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
        timeToRead
      }
      frontmatter {
        createdAt(formatString: "MMMM DD, YYYY")
        slug
        tags
        title
        updatedAt
      }
      tableOfContents
    }
  }
`
