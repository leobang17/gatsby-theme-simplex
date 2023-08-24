/** @jsx jsx */

import { FC } from 'react'
import { jsx } from '@emotion/react'
import { Typography } from '@mui/material'
import { Link } from 'gatsby'

import { PAGE_PREFIX } from 'constants/PageConsts'
import { makeStyles } from 'tss-react/mui'

export type ArticleBoxTitleProps = {
  slug: string
  title: string
}

const useStyles = makeStyles()(theme => ({
  root: {
    transition: 'all 0.1s ease',
    fontSize: '1.5rem',
    marginBlock: '0.2em',

    ':hover': {
      color:
        theme.palette.mode === 'dark'
          ? theme.palette.primary.light
          : theme.palette.primary.main,
    },
  },
}))

const ArticleBoxTitle: FC<ArticleBoxTitleProps> = ({ slug, title }) => {
  const { classes } = useStyles()
  return (
    <Link to={PAGE_PREFIX.ARTICLE + slug}>
      <Typography
        // color={themeMainContrast('plainText')}
        className={classes.root}
      >
        {title}
      </Typography>
    </Link>
  )
}

export default ArticleBoxTitle
