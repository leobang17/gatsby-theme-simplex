import { graphql, PageProps } from 'gatsby'
import React, { FC } from 'react'

import ArticleBox from 'components/ArticleBox'
import { AllMdxQuery, MdxNode } from 'types/mdx-types'
import CategoryLayout from 'components/Layout/CategoryLayout'

export type CategoryPageContext = {
  major?: string
  minor?: string
}

const CategoryPage: FC<PageProps<AllMdxQuery, CategoryPageContext>> = ({
  data,
  pageContext,
}) => {
  const articles = filterArticleByCategories(data.allMdx.nodes, pageContext)

  return (
    <CategoryLayout>
      {articles.map(article => {
        return <ArticleBox {...article} />
      })}
    </CategoryLayout>
  )
}

export default CategoryPage

export function filterArticleByCategories(
  nodes: MdxNode[],
  pageContext: CategoryPageContext,
) {
  const { major, minor } = pageContext
  return nodes
    .filter(node => (major ? major === node.fields.category.major : true))
    .filter(node => (minor ? minor === node.fields.category.minor : true))
}

export const query = graphql`
  query allMdx {
    allMdx(sort: { frontmatter: { createdAt: DESC } }) {
      nodes {
        id
        fields {
          slug
          category {
            major
            minor
            slug
          }
        }
        frontmatter {
          createdAt(formatString: "MMMM DD, YYYY")
          slug
          tags
          title
          updatedAt
        }
        excerpt(pruneLength: 150)
      }
    }
  }
`
