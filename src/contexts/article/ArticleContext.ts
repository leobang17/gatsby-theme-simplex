import TableOfContentTree from 'datastructures/tableOfContents/TableOfContentTree'
import React from 'react'
import { MdxField, MdxFrontmatter } from 'types/mdx-types'

interface ArticleContextProps {
  frontmatter: MdxFrontmatter
  tableOfContents: TableOfContentTree
  fields: MdxField

  activateTarget: (url: string) => void
}

export const ArticleContext = React.createContext<ArticleContextProps>(
  {} as ArticleContextProps,
)
