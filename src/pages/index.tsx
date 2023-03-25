import Layout from 'components/Layout/index'
import { Link } from 'gatsby'
import React from 'react'

const IndexPage = () => {
  return (
    <Layout>
      <Link to="/categories">All Posts</Link>
    </Layout>
  )
}

export default IndexPage
