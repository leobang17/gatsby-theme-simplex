/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import CategoryStrings from 'datastructures/category/CategoryStrings'
import { Link } from 'gatsby'
import { FC } from 'react'
import getCategoriesWithCategoryLinks from 'utils/getCategoriesWithCategoryLinks'

type ArticleCategoryLinkProps = {
  categoryString: CategoryStrings
}

const style = css`
  color: skyblue;
  padding-left: 3px;
  font-size: 0.8rem;
  padding-bottom: 0.2rem;
`

const ArticleBoxCategoryLink: FC<ArticleCategoryLinkProps> = ({
  categoryString,
}) => {
  const categoriesWithCategoryLinks =
    getCategoriesWithCategoryLinks(categoryString)

  return (
    <div css={style}>
      <Link to="/posts">total</Link>
      {categoriesWithCategoryLinks.map(categoryWithCategoryLink => {
        const [category, categoryLink] = categoryWithCategoryLink
        return (
          <text>
            {' > '}
            <Link to={`/posts${categoryLink}`}>{category}</Link>
          </text>
        )
      })}
    </div>
  )
}

export default ArticleBoxCategoryLink
