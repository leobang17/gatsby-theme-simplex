/** @jsx jsx */

import { FC, useState } from 'react'
import { jsx, css } from '@emotion/react'
import { Box, IconButton, SwipeableDrawer, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/MenuRounded'
import CloseIcon from '@mui/icons-material/CloseRounded'

import CategoryTable from 'components/CategoryTable'
import GithubCell from './Github'
import MetadataApiConfigurator from 'datalayer/configurators/MetadataApiConfigurator'

type DrawerNavigationProps = {}

const style = css(
  css`
    position: absolute;
    right: 1rem;
    align-items: center;
  `,
)

const DrawerNavigation: FC<DrawerNavigationProps> = ({}) => {
  const api = MetadataApiConfigurator.instance.api
  const github = api.getSocialSingle('github')
  const [drawerState, setDrawerState] = useState<boolean>(false)

  return (
    <Box component="nav" css={style} display={{ md: 'block', lg: 'none' }}>
      <IconButton
        size="small"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setDrawerState(true)}
      >
        <MenuIcon fontSize="small" />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        variant="temporary"
        open={drawerState}
        onClose={() => setDrawerState(false)}
        onOpen={() => setDrawerState(true)}
      >
        <Box p={2} width="220px" role="presentation">
          <IconButton
            onClick={() => setDrawerState(false)}
            size="small"
            edge="start"
          >
            <CloseIcon
              css={css`
                margin-bottom: 10px;
              `}
              fontSize="small"
            />
          </IconButton>
          <Typography fontWeight="bold" margin="0 0 10px 10px" color="primary">
            카테고리
          </Typography>
          <div
            style={{
              marginLeft: '10px',
            }}
          >
            <CategoryTable />
          </div>
        </Box>
        <Box alignSelf="flex-end" marginX="0.5rem" marginY="1.5rem">
          <GithubCell siteUrl={github.value} drawer />
        </Box>
      </SwipeableDrawer>
    </Box>
  )
}

export default DrawerNavigation
