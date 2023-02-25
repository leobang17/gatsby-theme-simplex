/** @jsx jsx */

import { jsx, css } from '@emotion/react'
import { FC } from 'react'

import { CategoryTreeObject } from 'datastructures/category/CategoryTree'
import CategoriesCategoryLink from './CategoriesCategoryLink'

type CategoryCellProps = {
  depth?: number
  category: CategoryTreeObject
}

const style = (depth: number) =>
  css({
    marginLeft: `${depth * 5}px`,
  })

const CategoryCell: FC<CategoryCellProps> = ({ depth = 0, category }) => {
  return (
    <div css={style(depth)}>
      <CategoriesCategoryLink category={category} />
      {category.sub.map(cat => {
        return <CategoryCell depth={depth + 1} category={cat} />
      })}
    </div>
  )
}

export default CategoryCell
