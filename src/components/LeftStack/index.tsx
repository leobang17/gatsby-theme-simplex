/** @jsx jsx */

import { FC } from 'react'
import { jsx } from '@emotion/react'
import { Stack } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

type LeftStackProps = {
  stack?: JSX.Element
}

const useStyles = makeStyles()({
  stack: {
    width: '20vw',
  },
})

const LeftStack: FC<LeftStackProps> = ({ stack }) => {
  const { classes } = useStyles()
  return (
    <Stack
      component="aside"
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

export default LeftStack
