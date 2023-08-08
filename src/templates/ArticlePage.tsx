import React from 'react'
import { graphql } from 'gatsby'

import ArticleLayout from 'components/Layout/ArticleLayout'
import MarkdownWrapper from 'components/MarkdownWrapper'
import ArticleFrontmatter from 'components/ArticleFrontmatter'
import ArticlePageContext from 'contexts/ArticlePageContext'
import Utterances from 'components/Utterance'
import RecentPosts from 'components/RecentPosts/RecentPosts'

// @ts-ignore
const ArticlePage = ({ data, children }) => {
  const { prevPost, nextPost } = data
  const frontmatters = {
    ...data.mdx.frontmatter,
    timeToRead: data.mdx.fields.timeToRead,
  }

  return (
    <ArticlePageContext data={data}>
      <ArticleLayout>
        <ArticleFrontmatter {...frontmatters} />
        <MarkdownWrapper>{children}</MarkdownWrapper>
        <RecentPosts prev={prevPost} next={nextPost} />
        <Utterances />
      </ArticleLayout>
    </ArticlePageContext>
  )
}

export default ArticlePage

export const query = graphql`
  query ($id: String, $nextId: String, $prevId: String) {
    mdx(id: { eq: $id }) {
      id
      fields {
        slug
        timeToRead
        categoryDirectory
      }
      frontmatter {
        title
        createdAt(formatString: "MMMM DD, YYYY")
      }
      tableOfContents
    }
    prevPost: mdx(id: { eq: $prevId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    nextPost: mdx(id: { eq: $nextId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`

export { ArticlePageHead as Head } from 'components/head'
