/** @jsx jsx */

import { FC, useContext } from 'react'
import { css, jsx } from '@emotion/react'

import RESPONSIVE from 'styles/responsive'
import { mq, s_mq } from 'styles/facepaint'

import TitleCell from './cells/Title'
import GithubCell from './cells/Github'
import { BORDER_MUSK } from 'styles/Color'
import MetadataApiConfigurator from 'datalayer/configurators/MetadataApiConfigurator'
import DrawerNavigation from './cells/DrawerNavigation'
import { ModeSwitch } from './cells/ModeSwitch'
import { ThemeContext } from 'contexts/theme/ThemeContext'
import { Box, Grid } from '@mui/material'

const navcss = css(
  {
    position: 'sticky',
    top: 0,
    width: '100vw',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottom: `1px solid ${BORDER_MUSK}`,
    // backgroundColor: 'white',
    zIndex: 99,
  },
  mq({
    height: RESPONSIVE.NAV.HEIGHT,
    maxHeight: RESPONSIVE.NAV.HEIGHT,
  }),
  s_mq({
    justifyContent: ['center', 'space-between'],
  }),
)

const Nav: FC = () => {
  const api = MetadataApiConfigurator.instance.api
  const { title } = api.getBlogMetadata()
  const github = api.getSocialSingle('github')
  const { mode, switchMode } = useContext(ThemeContext)

  return (
    <Grid container css={navcss}>
      <Grid item>
        <TitleCell title={title.value} />
      </Grid>
      {github.isValid() ? <GithubCell siteUrl={github.value} /> : null}
      <Grid item display={{ xs: 'none', md: 'none', lg: 'block' }}>
        <ModeSwitch
          onChange={switchMode}
          defaultChecked={mode === 'dark' ? true : false}
        />
      </Grid>

      <DrawerNavigation />
    </Grid>
  )
}

export default Nav
