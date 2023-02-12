/** @jsx jsx */

import { jsx, css } from '@emotion/react'
import { Link } from 'gatsby'
import { CategoryTreeObject } from 'datastructures/category/CategoryTree'
import { FC } from 'react'

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
    <Link to={'/posts' + category.slug}>
      <div css={style(depth)}>
        <div>
          {category.name}: {category.count}
        </div>
        {category.sub.map(cat => {
          return <CategoryCell depth={depth + 1} category={cat} />
        })}
      </div>
    </Link>
  )
}

export default CategoryCell
