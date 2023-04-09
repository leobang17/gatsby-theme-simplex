import React, { FC } from 'react'

import ArticleContextProvider, {
  ArticleContextProviderProps,
} from './article/ArticleContextProvider'
import CategoryContextProvider, {
  CategoryContextProviderProps,
} from './category/CategoryContextProvider'

type ArticlePageContextProps = {} & CategoryContextProviderProps &
  ArticleContextProviderProps

const ArticlePageContext: FC<ArticlePageContextProps> = ({
  data,
  children,
}) => {
  return (
    <>
      <CategoryContextProvider
        categoryDirectory={data.mdx.fields.categoryDirectory}
      >
        <ArticleContextProvider data={data}>{children}</ArticleContextProvider>
      </CategoryContextProvider>
    </>
  )
}

export default ArticlePageContext
