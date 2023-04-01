/** @jsx jsx */

import { FC } from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/react'

import Footer from 'components/Footer'
import Nav from 'components/Nav'
import LeftStack from 'components/LeftStack'
import RightStack from 'components/RightStack'
import { ChildrenProps } from 'types/react-types'

type LayoutProps = {
  leftStack?: JSX.Element
  rightStack?: JSX.Element
} & ChildrenProps

const LayoutWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HStack = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  width: 100vw;
`

const style = css`
  width: 100%;
  max-width: 770px;
  margin-inline: 20px;
`

const Layout: FC<LayoutProps> = ({ children, leftStack, rightStack }) => {
  return (
    <LayoutWrapper>
      <Nav />
      <HStack>
        <LeftStack stack={leftStack} />
        <main css={style}>{children}</main>
        <RightStack stack={rightStack} />
      </HStack>
      <Footer />
    </LayoutWrapper>
  )
}

export default Layout
