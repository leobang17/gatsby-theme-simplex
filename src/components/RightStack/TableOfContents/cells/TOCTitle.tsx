/** @jsx jsx */

import { jsx } from '@emotion/react'
import { Link } from 'gatsby'
import { FC, useContext } from 'react'

import { ArticleContext } from 'contexts/article/ArticleContext'
import { Box, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

import { PAGE_PREFIX } from 'constants/PageConsts'
import { themeDarkContrast, themeMainLight } from 'styles/theme/colorProcessor'

type TOCTitleProps = {
  title?: string
  url?: string
  activated?: boolean
}

const useStyles = makeStyles<{ activated?: boolean }>()((_, { activated }) => ({
  root: {
    position: 'relative',
    left: activated ? '-5px' : '0',
    transform: activated ? 'scale(105%)' : 'scale(100%)',
    transition: 'left 0.2s ease, transform 0.2s ease',
    marginBlock: '0.2em',
  },
  tableIndex: {
    fontSize: '0.95rem',
    color: activated
      ? themeDarkContrast('plainText')
      : themeMainLight('subText'),

    ':hover': {
      color: themeDarkContrast('plainText'),
    },
    transition: 'color 100ms ease',
  },
}))

const TOCTitle: FC<TOCTitleProps> = ({ title, url, activated }) => {
  const { classes } = useStyles({ activated })
  const {
    fields: { slug },
  } = useContext(ArticleContext)

  return (
    <Box className={classes.root}>
      <Typography component="a" className={classes.tableIndex}>
        <Link to={PAGE_PREFIX.ARTICLE + slug + url}>{title}</Link>
      </Typography>
    </Box>
  )
}

export default TOCTitle
