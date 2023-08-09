/** @jsx jsx */

import React, { FC, useContext } from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/react'

import Footer from 'components/Footer'
import LeftStack from 'components/LeftStack'
import RightStack from 'components/RightStack'
import { ChildrenProps } from 'types/react-types'
import { CssBaseline } from '@mui/material'
import MUINav from 'components/Nav/MUINav'
import { ThemeContext } from 'contexts/theme/ThemeContext'
import { ModeSwitch } from 'components/Nav/cells/ModeSwitch'

type LayoutProps = {
  leftStack?: JSX.Element
  rightStack?: JSX.Element
} & ChildrenProps

const LayoutWrapper = styled.html`
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
  const { mode, switchMode } = useContext(ThemeContext)

  return (
    <React.Fragment>
      <CssBaseline />
      <LayoutWrapper>
        <MUINav />
        <HStack>
          <LeftStack stack={leftStack} />
          <main css={style}>{children}</main>
          <RightStack stack={rightStack} />
        </HStack>
        <Footer />

        <ModeSwitch
          sx={{
            position: 'fixed',
            bottom: '5vh',
            right: '5vw',
            scale: {
              md: '140%',
              sm: '120%',
            },
          }}
          onChange={switchMode}
          defaultChecked={mode === 'dark' ? true : false}
        />
      </LayoutWrapper>
    </React.Fragment>
  )
}

export default Layout
