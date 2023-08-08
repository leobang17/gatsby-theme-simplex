import React, { FC } from 'react'

import TableOfContents from 'components/RightStack/TableOfContents'
import { ChildrenProps } from 'types/react-types'

import Layout from '.'
import BioAndCategories from 'components/LeftStack/BioAndCategories'
import { Container } from '@mui/material'

type ArticleLayoutProps = {} & ChildrenProps

const layoutProps = {
  leftStack: <BioAndCategories />,
  rightStack: <TableOfContents />,
}

const ArticleLayout: FC<ArticleLayoutProps> = ({ children }) => {
  return (
    <Layout {...layoutProps}>
      <Container>{children}</Container>
    </Layout>
  )
}

export default ArticleLayout
