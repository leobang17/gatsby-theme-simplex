/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import { themeConfigs } from '../../configuration'
import { PAGE_PREFIX } from 'constants/PageConsts'
import CategoryStrings from 'datastructures/category/CategoryStrings'
import { Link } from 'gatsby'
import { FC } from 'react'
import getCategoriesWithCategoryLinks from 'utils/getCategoriesWithCategoryLinks'

type ArticleCategoryLinkProps = {
  categoryString: CategoryStrings
}

const style = css`
  color: ${themeConfigs.light.main};
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
      {categoriesWithCategoryLinks.map((categoryWithCategoryLink, id) => {
        const [category, categoryLink] = categoryWithCategoryLink
        return (
          <span key={id}>
            {' > '}
            <Link to={categoryLink}>{category}</Link>
          </span>
        )
      })}
    </div>
  )
}

export default ArticleBoxCategoryLink
