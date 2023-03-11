import { FC, useState } from 'react'

import { MdxNode } from 'types/mdx-types'
import { ChildrenProps } from 'types/react-types'
import TableOfContentTree from 'datastructures/tableOfContents/TableOfContentTree'

import { ArticleContext } from './ArticleContext'

export type ArticleContextProviderProps = {
  data: {
    mdx: MdxNode
  }
} & ChildrenProps

const ArticleContextProvider: FC<ArticleContextProviderProps> = ({
  data,
  children,
}) => {
  const tableOfContentTree = new TableOfContentTree(data.mdx.tableOfContents)
  const [tableOfContents, mutateTree] =
    useState<TableOfContentTree>(tableOfContentTree)

  const activateTarget = (url: string) => {
    mutateTree(prev => prev.activate(url))
  }

  return (
    <ArticleContext.Provider
      value={{ ...data.mdx, tableOfContents, activateTarget }}
    >
      {children}
    </ArticleContext.Provider>
  )
}

export default ArticleContextProvider
