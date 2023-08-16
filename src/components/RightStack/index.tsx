/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import { Stack } from '@mui/material'
import { FC } from 'react'
import { makeStyles } from 'tss-react/mui'

type RightStackProps = {
  stack?: JSX.Element
}

const style = css()
const useStyles = makeStyles()({
  stack: {
    width: '20vw',
  },
})

const RightStack: FC<RightStackProps> = ({ stack }) => {
  const { classes } = useStyles()
  return (
    <Stack
      component="aside"
      css={style}
      className={classes.stack}
      sx={{
        display: {
          xs: 'none',
          sm: 'none',
          md: 'none',
          lg: 'block',
        },
      }}
    >
      {stack ?? null}
    </Stack>
  )
}

export default RightStack
