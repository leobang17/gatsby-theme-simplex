import React, { FC, useState } from 'react'

import DataLayer from 'datalayer/DataLayer'
import { CategoryTree } from 'datastructures/category/CategoryTree'
import { ChildrenProps } from 'types/react-types'

import { CategoryContext } from './CategoryContext'

type CategoryContextProviderProps = {} & ChildrenProps

const CategoryContextProvider: FC<CategoryContextProviderProps> = ({
  children,
}) => {
  const API = DataLayer.singleton().API
  const categoryTree = API.getCategoryTreeSync()
  const [tree, mutateTree] = useState<CategoryTree>(categoryTree)

  return (
    <CategoryContext.Provider
      value={{
        categoryTree: tree,
      }}
    >
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryContextProvider
