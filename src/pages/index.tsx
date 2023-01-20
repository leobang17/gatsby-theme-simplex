import Layout from 'components/Layout/index'
import { HeadFC, Link } from 'gatsby'
import React from 'react'
import { getStaticPageHead } from 'utils/Head'
import {
  INDEX_PAGE_DESCRIPTION,
  INDEX_PAGE_TITLE,
} from '../constants/PageConsts'

const IndexPage = () => {
  return (
    <Layout>
      IndexPage
      <Link to="/about">about page로</Link>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = getStaticPageHead({
  title: INDEX_PAGE_TITLE,
  description: INDEX_PAGE_DESCRIPTION,
})
