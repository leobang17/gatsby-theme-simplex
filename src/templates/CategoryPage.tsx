import { graphql, PageProps } from 'gatsby'
import React, { FC } from 'react'

import ArticleBox from 'components/ArticleBox'
import { AllMdxQuery } from 'types/mdx-types'
import CategoryLayout from 'components/Layout/CategoryLayout'
import filterArticleByCategories from 'utils/pageApi/filterArticleByCategories'

export type CategoryPageContext = {
  rawSlug: string
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

export const query = graphql`
  query allMdx {
    allMdx(sort: { frontmatter: { createdAt: DESC } }) {
      nodes {
        id
        fields {
          slug
          categoryDirectory
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
