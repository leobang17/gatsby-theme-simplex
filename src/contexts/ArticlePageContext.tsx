import React, { FC } from 'react'

import ArticleContextProvider, {
  ArticleContextProviderProps,
} from './article/ArticleContextProvider'
import CategoryContextProvider, {
  CategoryContextProviderProps,
} from './category/CategoryContextProvider'
import ThemeContextProvider from './theme/ThemeContextProvider'

type ArticlePageContextProps = {} & CategoryContextProviderProps &
  ArticleContextProviderProps

const ArticlePageContext: FC<ArticlePageContextProps> = ({
  data,
  children,
}) => {
  return (
    <>
      <ThemeContextProvider>
        <CategoryContextProvider
          categoryDirectory={data.mdx.fields.categoryDirectory}
        >
          <ArticleContextProvider data={data}>
            {children}
          </ArticleContextProvider>
        </CategoryContextProvider>
      </ThemeContextProvider>
    </>
  )
}

export default ArticlePageContext
