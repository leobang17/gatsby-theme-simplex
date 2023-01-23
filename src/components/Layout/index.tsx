import React, { FunctionComponent, ReactNode } from 'react'
import Footer from 'components/Footer'
import Nav from 'components/Nav'
import Bio from 'components/Bio'

type LayoutProps = {
  children: ReactNode
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <Nav />
      <Bio />
      <div>{children}</div>
      <Footer />
    </>
  )
}

export default Layout
