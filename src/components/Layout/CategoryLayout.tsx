import BioAndCategories from 'components/LeftStack/BioAndCategories'
import React, { FC } from 'react'
import { ChildrenProps } from 'types/react-types'
import Layout from '.'
import { Container } from '@mui/material'

type CategoryLayoutProps = {} & ChildrenProps

const layoutProps = {
  leftStack: <BioAndCategories />,
}

const CategoryLayout: FC<CategoryLayoutProps> = ({ children }) => {
  return (
    <Layout {...layoutProps}>
      <Container>{children}</Container>
    </Layout>
  )
}

export default CategoryLayout
