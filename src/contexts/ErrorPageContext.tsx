import React, { FC } from 'react'
import CategoryContextProvider, {
  CategoryContextProviderProps,
} from './category/CategoryContextProvider'

type ErrorPageContextProps = {} & CategoryContextProviderProps

const ErrorPageContext: FC<ErrorPageContextProps> = ({ children }) => {
  return (
    <>
      <CategoryContextProvider>{children}</CategoryContextProvider>
    </>
  )
}

export default ErrorPageContext
