import React, { FC } from 'react'

import DataLayer from 'datalayer/DataLayer'
import { ChildrenProps } from 'types/react-types'
import activateCurrentCategories from 'utils/pageApi/activateCurrentCatgeories'

import { CategoryContext } from './CategoryContext'

export type CategoryContextProviderProps = {} & ChildrenProps

const CategoryContextProvider: FC<CategoryContextProviderProps> = ({
  children,
}) => {
  const API = DataLayer.singleton().API
  const categoryTree = API.getCategoryTreeSync()
  activateCurrentCategories(categoryTree)

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
