/** @jsx jsx */

import { jsx } from '@emotion/react'
import { Link } from 'gatsby'
import { FC } from 'react'
import { Box } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

type TitleCellProps = {
  title: string
}

const useStyles = makeStyles()(theme => ({
  root: {
    marginInline: '2rem',
    padding: '0.5rem',
    fontWeight: 500,
    transition: 'all 0.15s ease',

    ':hover': {
      color:
        theme.palette.mode === 'dark'
          ? theme.palette.primary.dark
          : theme.palette.primary.light,
      scale: '105%',
    },
  },
}))

const TitleCell: FC<TitleCellProps> = ({ title }) => {
  const { classes } = useStyles()
  return (
    <Link to="/">
      <Box className={classes.root}>{title}</Box>
    </Link>
  )
}

export default TitleCell
