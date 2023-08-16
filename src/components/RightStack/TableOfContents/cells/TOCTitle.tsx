/** @jsx jsx */

import { jsx } from '@emotion/react'
import { Link } from 'gatsby'
import { FC, useContext } from 'react'

import { ArticleContext } from 'contexts/article/ArticleContext'
import { Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

import { LIGHT_GRAY } from 'styles/Color'
import { PAGE_PREFIX } from 'constants/PageConsts'

type TOCTitleProps = {
  title?: string
  url?: string
  activated?: boolean
}

const useStyles = makeStyles<{ activated?: boolean }>()((_, { activated }) => ({
  tableIndex: {
    position: 'relative',
    left: activated ? '-5px' : '0',
    transform: activated ? 'scale(107%)' : 'scale(100%)',
    color: activated ? 'primary' : LIGHT_GRAY,

    ':hover': {
      color: 'primary',
    },

    transition: 'color 0.2s ease, left 0.2s ease, transform 0.2s ease',
  },
}))

const TOCTitle: FC<TOCTitleProps> = ({ title, url, activated }) => {
  const { classes } = useStyles({ activated })
  const {
    fields: { slug },
  } = useContext(ArticleContext)

  return (
    <Typography component="a" variant="body1" className={classes.tableIndex}>
      <Link to={PAGE_PREFIX.ARTICLE + slug + url}>{title}</Link>
    </Typography>
  )
}

export default TOCTitle
