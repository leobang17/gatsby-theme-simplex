/** @jsx jsx */

import { Link } from 'gatsby'
import { FC } from 'react'
import { css, jsx } from '@emotion/react'

import { PAGE_PREFIX } from 'constants/PageConsts'
import { CategoryTreeObject } from 'datastructures/category/CategoryTree'

type CategoriesCategoryLinkProps = {
  category: CategoryTreeObject
}

const style = (activated: boolean) => css`
  font-weight: ${activated ? 'bold' : 'normal'};
  background-color: ${activated ? 'red' : null};
`

const CategoriesCategoryLink: FC<CategoriesCategoryLinkProps> = ({
  category,
}) => {
  return (
    <Link
      css={style(category.activated)}
      to={PAGE_PREFIX.CATEGORY + category.slug}
    >
      {category.name}: {category.count}
    </Link>
  )
}

export default CategoriesCategoryLink
