import React, { FunctionComponent, ReactNode } from 'react'
import Footer from 'components/Footer'
import Nav from 'components/Nav'

type LayoutProps = {
  children: ReactNode
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <Nav />
      <div>{children}</div>
      <Footer />
    </>
  )
}

export default Layout
