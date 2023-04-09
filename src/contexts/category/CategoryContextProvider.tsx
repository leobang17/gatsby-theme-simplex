import React, { FC } from 'react'

import DataLayer from 'datalayer/DataLayer'
import { ChildrenProps } from 'types/react-types'
import activateCurrentCategories from 'utils/pageApi/activateCurrentCatgeories'

import { CategoryContext } from './CategoryContext'

export type CategoryContextProviderProps = {
  categoryDirectory?: string
} & ChildrenProps

const CategoryContextProvider: FC<CategoryContextProviderProps> = ({
  categoryDirectory,
  children,
}) => {
  const api = DataLayer.singleton.categoryApi
  const categoryTree = api.getCategoryTreeSync()
  activateCurrentCategories(categoryTree, categoryDirectory)
  return (
    <CategoryContext.Provider
      value={{
        categoryTree,
      }}
    >
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryContextProvider
