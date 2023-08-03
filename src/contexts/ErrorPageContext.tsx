import React, { FC } from 'react'
import CategoryContextProvider, {
  CategoryContextProviderProps,
} from './category/CategoryContextProvider'
import ThemeContextProvider from './theme/ThemeContextProvider'

type ErrorPageContextProps = {} & CategoryContextProviderProps

const ErrorPageContext: FC<ErrorPageContextProps> = ({ children }) => {
  return (
    <>
      <ThemeContextProvider>
        <CategoryContextProvider>{children}</CategoryContextProvider>
      </ThemeContextProvider>
    </>
  )
}

export default ErrorPageContext
