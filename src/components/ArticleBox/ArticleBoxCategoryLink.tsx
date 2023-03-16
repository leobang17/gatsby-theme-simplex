/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import { PAGE_PREFIX } from 'constants/PageConsts'
import CategoryStrings from 'datastructures/category/CategoryStrings'
import { Link } from 'gatsby'
import { FC } from 'react'
import { FIRST } from 'styles/Color'
import getCategoriesWithCategoryLinks from 'utils/getCategoriesWithCategoryLinks'

type ArticleCategoryLinkProps = {
  categoryString: CategoryStrings
}

const style = css`
  color: ${FIRST};
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
      <Link to={PAGE_PREFIX.CATEGORY}>total</Link>
      {categoriesWithCategoryLinks.map(categoryWithCategoryLink => {
        const [category, categoryLink] = categoryWithCategoryLink
        return (
          <text>
            {' > '}
            <Link to={categoryLink}>{category}</Link>
          </text>
        )
      })}
    </div>
  )
}

export default ArticleBoxCategoryLink
