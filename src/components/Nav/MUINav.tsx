/** @jsx jsx */

import { FC } from 'react'
import { jsx } from '@emotion/react'
import { AppBar, Box, Toolbar } from '@mui/material'
import TitleCell from './cells/Title'
import MetadataApiConfigurator from 'datalayer/configurators/MetadataApiConfigurator'
import DrawerNavigation from './cells/DrawerNavigation'
import GithubCell from './cells/Github'

interface MUINavProps {}

const MUINav: FC<MUINavProps> = ({}) => {
  const api = MetadataApiConfigurator.instance.api
  const { title } = api.getBlogMetadata()
  const github = api.getSocialSingle('github')

  return (
    <AppBar position="sticky" color="inherit">
      <Toolbar
        disableGutters
        sx={{
          justifyContent: 'center',
        }}
      >
        <TitleCell title={title.value}></TitleCell>
        <Box
          sx={{
            flexGrow: {
              xs: 0,
              sm: 1,
            },
          }}
        />
        {github.isValid() ? <GithubCell siteUrl={github.value} /> : null}
        <DrawerNavigation />
      </Toolbar>
    </AppBar>
  )
}

export default MUINav
