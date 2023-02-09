import React from 'react'
import { getCategoryTree } from 'hooks/categoryQueries'
import CategoryCell from './cells/CategoryCell'

const Categories = () => {
  const root = getCategoryTree()
  return (
    <div>
      <CategoryCell category={root} />
    </div>
  )
}

export default Categories
