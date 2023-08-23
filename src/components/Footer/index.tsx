/** @jsx jsx */

import { jsx } from '@emotion/react'
import { FC } from 'react'
import FooterOrigin from './cells/FooterOrigin'
import FooterUsername from './cells/FooterUsername'
import { Box, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { themeMainLight } from 'styles/theme/colorProcessor'

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

    a: {
      transition: 'color 0.15s ease',
      ':hover': {
        color:
          theme.palette.mode === 'dark'
            ? theme.palette.primary.light
            : theme.palette.primary.main,
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
        color={themeMainLight('subText')}
      >
        <FooterUsername />
        <span>, Theme by </span>
        <FooterOrigin />
        <span>
          , Built with <a href="https://www.gatsbyjs.com/">Gatsby</a>
        </span>
      </Typography>
    </Box>
  )
}

export default Footer
