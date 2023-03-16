/** @jsx jsx */

import { useContext } from 'react'

import RecursiveCategories from './cells/RecursiveCategories'
import { CategoryContext } from 'contexts/category/CategoryContext'
import { css, jsx } from '@emotion/react'

const style = css`
  max-width: 230px;
`

const CategoryTable = () => {
  const { categoryTree } = useContext(CategoryContext)

  return (
    <div css={style}>
      <RecursiveCategories category={categoryTree.toObject()} />
    </div>
  )
}

export default CategoryTable
