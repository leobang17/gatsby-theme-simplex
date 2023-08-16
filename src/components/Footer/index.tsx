/** @jsx jsx */

import { jsx } from '@emotion/react'
import { FC } from 'react'
import FooterOrigin from './cells/FooterOrigin'
import FooterUsername from './cells/FooterUsername'
import { Box, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

type FooterProps = {}

const useStyles = makeStyles()(theme => ({
  root: {
    width: '100vw',
    paddingBlock: '1rem',
    marginTop: '5rem',
    borderTop: '1px solid',
    borderColor:
      theme.palette.mode === 'dark'
        ? theme.palette.border.dark
        : theme.palette.border.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  text: {
    marginBlock: '1rem',
    color:
      theme.palette.mode === 'dark'
        ? theme.palette.subText.contrastText
        : theme.palette.subText.main,

    a: {
      transition: 'color 0.15s ease',
      ':hover': {
        color:
          theme.palette.mode === 'dark'
            ? theme.palette.primary.dark
            : theme.palette.primary.light,
      },
    },
  },
}))

const Footer: FC<FooterProps> = ({}) => {
  const { classes } = useStyles()
  return (
    <Box component="footer" className={classes.root}>
      <Typography
        component="section"
        variant="subtitle2"
        className={classes.text}
      >
        <FooterUsername />
        <span>Theme by </span>
        <FooterOrigin />
        <span>, Built with Gatsby</span>
      </Typography>
    </Box>
  )
}

export default Footer
