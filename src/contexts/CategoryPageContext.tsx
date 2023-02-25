import React, { FC } from 'react'

import CategoryContextProvider, {
  CategoryContextProviderProps,
} from './category/CategoryContextProvider'

type CategoryPageContextProps = {} & CategoryContextProviderProps

const CategoryPageContext: FC<CategoryPageContextProps> = ({ children }) => {
  return (
    <>
      <CategoryContextProvider>{children}</CategoryContextProvider>
    </>
  )
}

export default CategoryPageContext
