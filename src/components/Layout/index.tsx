/** @jsx jsx */

import React, { FC, useContext } from 'react'
import styled from '@emotion/styled'
import { jsx } from '@emotion/react'

import Footer from 'components/Footer'
import LeftStack from 'components/LeftStack'
import RightStack from 'components/RightStack'
import { ChildrenProps } from 'types/react-types'
import { Box, Container, CssBaseline } from '@mui/material'
import MUINav from 'components/Nav/MUINav'
import { ThemeContext } from 'contexts/theme/ThemeContext'
import { ModeSwitch } from 'components/Nav/cells/ModeSwitch'
import { makeStyles } from 'tss-react/mui'

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

const useStyles = makeStyles()(theme => ({
  layoutWrapper: {
    width: '100vw',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'white',
    color: theme.palette.mode === 'dark' ? 'white' : 'black',
  },
  pageWrapper: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'row',
    width: '100vw',
    justifyContent: 'space-around',
  },

  main: {
    maxWidth: '770px',
    marginInline: '20px',
  },
}))

const Layout: FC<LayoutProps> = ({ children, leftStack, rightStack }) => {
  const { classes } = useStyles()
  const { mode, switchMode } = useContext(ThemeContext)

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <LayoutWrapper> */}
      <Box className={classes.layoutWrapper}>
        <MUINav />
        <Box className={classes.pageWrapper}>
          <LeftStack stack={leftStack} />
          <Container
            component="main"
            maxWidth={false}
            className={classes.main}
            sx={{
              width: {
                xs: '100vw',
                sm: '100vw',
                md: '100vw',
                lg: '50vw',
              },
            }}
          >
            {children}
          </Container>
          <RightStack stack={rightStack} />
        </Box>
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
          checked={mode === 'dark' ? true : false}
        />
      </Box>
      {/* </LayoutWrapper> */}
    </React.Fragment>
  )
}

export default Layout
