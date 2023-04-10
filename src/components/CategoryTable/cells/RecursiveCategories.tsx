/** @jsx jsx */

import { jsx, css } from '@emotion/react'
import { FC } from 'react'

import { CategoryTreeObject } from 'datastructures/category/CategoryTree'
import CategoryRow from './CategoryRow'

type CategoryCellProps = {
  category: CategoryTreeObject
}

const style = css`
  font-size: 0.9rem;
`

const RecursiveCategories: FC<CategoryCellProps> = ({ category }) => {
  return (
    <div css={style}>
      <CategoryRow category={category} />
      {category.sub.map((cat, id) => {
        return <RecursiveCategories category={cat} key={id} />
      })}
    </div>
  )
}

export default RecursiveCategories
