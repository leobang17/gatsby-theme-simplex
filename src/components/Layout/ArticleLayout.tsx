import React, { FC } from 'react'

import TableOfContents from 'components/RightStack/TableOfContents'
import { ChildrenProps } from 'types/react-types'

import Layout from '.'

type ArticleLayoutProps = {} & ChildrenProps

const layoutProps = {
  rightStack: <TableOfContents />,
}

const ArticleLayout: FC<ArticleLayoutProps> = ({ children }) => {
  return <Layout {...layoutProps}>{children}</Layout>
}

export default ArticleLayout
