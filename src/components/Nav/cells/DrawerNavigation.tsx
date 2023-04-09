/** @jsx jsx */

import { FC, useState } from 'react'
import { jsx, css } from '@emotion/react'
import { l_mq } from 'styles/facepaint'
import { Box, IconButton, SwipeableDrawer, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/MenuRounded'
import CloseIcon from '@mui/icons-material/CloseRounded'
import CategoryTable from 'components/CategoryTable'
import { themeConfigs } from '../../../configuration'

type DrawerNavigationProps = {}

const style = css(
  css`
    position: absolute;
    right: 1rem;
    align-items: center;
  `,
  l_mq({
    display: ['flex', 'none'],
  }),
)

const DrawerNavigation: FC<DrawerNavigationProps> = ({}) => {
  const [drawerState, setDrawerState] = useState<boolean>(false)

  return (
    <nav css={style}>
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
          <Typography
            fontWeight="bold"
            margin="0 0 10px 10px"
            color={themeConfigs.light.sub}
          >
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
      </SwipeableDrawer>
    </nav>
  )
}

export default DrawerNavigation
