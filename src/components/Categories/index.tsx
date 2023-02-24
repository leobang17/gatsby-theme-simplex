import React, { useContext } from 'react'

import CategoryCell from './cells/CategoryCell'
import { CategoryContext } from 'contexts/category/CategoryContext'

const Categories = () => {
  const { categoryTree } = useContext(CategoryContext)

  return (
    <div>
      <CategoryCell category={categoryTree.toObject()} />
    </div>
  )
}

export default Categories
