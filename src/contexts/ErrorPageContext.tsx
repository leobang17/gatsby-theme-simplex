/** @jsx jsx */

import { FC } from 'react'
import { jsx } from '@emotion/react'
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
