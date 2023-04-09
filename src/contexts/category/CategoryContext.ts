import React from 'react'
import CategoryTree from 'datastructures/category/CategoryTree'

interface CategoryContextProps {
  categoryTree: CategoryTree
}

export const CategoryContext = React.createContext<CategoryContextProps>(
  {} as CategoryContextProps,
)
