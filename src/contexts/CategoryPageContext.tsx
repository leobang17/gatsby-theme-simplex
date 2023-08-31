import React, { FC } from 'react'

import CategoryContextProvider, {
  CategoryContextProviderProps,
} from './category/CategoryContextProvider'
import ThemeContextProvider from './theme/ThemeContextProvider'

type CategoryPageContextProps = {} & CategoryContextProviderProps

const CategoryPageContext: FC<CategoryPageContextProps> = ({
  children,
  categoryDirectory,
}) => {
  return (
    <>
      <ThemeContextProvider>
        <CategoryContextProvider categoryDirectory={categoryDirectory}>
          {children}
        </CategoryContextProvider>
      </ThemeContextProvider>
    </>
  )
}

export default CategoryPageContext
