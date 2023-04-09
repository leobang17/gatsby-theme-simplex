/** @jsx jsx */

import { Link } from 'gatsby'
import { FC } from 'react'
import { css, jsx } from '@emotion/react'

import { PAGE_PREFIX } from 'constants/PageConsts'
import { CategoryTreeObject } from 'datastructures/category/CategoryTree'
import CategoryCount from './CategoryCount'
import { themeConfigs } from '../../../configuration'

type CategoryRowProps = {
  category: CategoryTreeObject
}

const style = (activated: boolean) => css`
  display: flex;
  align-items: center;
  padding-block: 0.3rem;
  padding-inline: 0.5rem;
  border-left: 2px solid ${activated ? themeConfigs.light.main : 'inherit'};
  background-color: ${activated ? '#EEEEEE' : null};
  font-weight: ${activated ? 400 : 300};

  :hover {
    background-color: ${activated ? '#EEEEEE' : '#F4F7F7'};
  }
`

const linkStyle = (nodeDepth: number) => css`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-left: ${nodeDepth * 0.5}rem;
`

const CategoryRow: FC<CategoryRowProps> = ({ category }) => {
  return (
    <Link
      css={style(category.activated)}
      to={PAGE_PREFIX.CATEGORY + category.slug}
    >
      <div css={linkStyle(category.nodeDepth)}>
        <div>{category.name}</div>
        <CategoryCount count={category.count} />
      </div>
    </Link>
  )
}

export default CategoryRow
