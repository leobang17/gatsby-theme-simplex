/** @jsx jsx */

import { jsx, css } from '@emotion/react'
import { FC } from 'react'

import { CategoryTreeObject } from 'datastructures/category/CategoryTree'
import CategoryRow from './CategoryRow'
import Stack from '@mui/material/Stack'

type CategoryCellProps = {
  category: CategoryTreeObject
}

const style = css`
  font-size: 0.9rem;
`

const RecursiveCategories: FC<CategoryCellProps> = ({ category }) => {
  return (
    <Stack css={style}>
      <CategoryRow category={category} />
      {category.sub.map((cat, id) => {
        return <RecursiveCategories category={cat} key={id} />
      })}
    </Stack>
  )
}

export default RecursiveCategories
