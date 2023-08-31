/** @jsx jsx */

import { jsx } from '@emotion/react'
import { Link } from 'gatsby'
import { FC, useContext } from 'react'

import { ArticleContext } from 'contexts/article/ArticleContext'
import { Box, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

import { PAGE_PREFIX } from 'constants/PageConsts'
import { usePalette } from 'styles/theme/colorProcessor'

type TOCTitleProps = {
  title?: string
  url?: string
  activated?: boolean
}

const useStyles = makeStyles()(theme => ({
  tableIndex: {
    fontSize: '0.95rem',
    ':hover': {
      color: usePalette(theme, 'plainText', (color, dm) =>
        dm ? color.contrastText : color.dark,
      ),
    },
    transition: 'color 50ms ease',
  },
}))

const TOCTitle: FC<TOCTitleProps> = ({ title, url, activated }) => {
  const { classes } = useStyles()
  const {
    fields: { slug },
  } = useContext(ArticleContext)

  return (
    <Box
      className={activated ? 'activated' : ''}
      sx={{
        position: 'relative',
        transition: 'color 0.2s ease, left 0.2s ease, transform 0.2s ease',
        left: '0px',
        marginBlock: '0.2em',
      }}
    >
      <Typography component="a" className={classes.tableIndex}>
        <Link to={PAGE_PREFIX.ARTICLE + slug + url}>{title}</Link>
      </Typography>
    </Box>
  )
}

export default TOCTitle
