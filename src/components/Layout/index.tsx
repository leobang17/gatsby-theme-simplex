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
  max-width: 1440px;
`

const VStack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const style = css({
  maxWidth: '770px',
})

const Layout: FC<LayoutProps> = ({ children, leftStack, rightStack }) => {
  return (
    <LayoutWrapper>
      <Nav />
      <VStack>
        <LeftStack stack={leftStack} />
        <div css={style}>{children}</div>
        <RightStack stack={rightStack} />
      </VStack>

      <Footer />
    </LayoutWrapper>
  )
}

export default Layout
