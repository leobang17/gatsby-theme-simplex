/** @jsx jsx */

import { jsx } from '@emotion/react'
import { FC } from 'react'

import { MdxNode } from 'types/mdx-types'
import { GRAY } from 'styles/Color'
import ArticleBoxTitle from './ArticleBoxTitle'
import ArticleBoxCategoryLink from './ArticleBoxCategoryLink'
import CategoryStrings from 'datastructures/category/CategoryStrings'

import { Box, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(theme => ({
  root: {
    marginBlock: '3rem',
  },
  summary: {
    display: 'block',
  },
  createdAt: {
    color:
      theme.palette.mode === 'dark'
        ? theme.palette.subText.contrastText
        : theme.palette.subText.main,
    marginTop: '0.5rem',
  },
}))

const ArticleBox: FC<MdxNode> = ({
  fields: { slug, categoryDirectory },
  frontmatter: { title, createdAt },
  excerpt,
}) => {
  const { classes } = useStyles()
  return (
    <Box component="section" className={classes.root}>
      <ArticleBoxCategoryLink
        categoryString={CategoryStrings.initialize(categoryDirectory)}
      />
      <ArticleBoxTitle slug={slug} title={title} />

      <Typography
        component="summary"
        variant="body1"
        className={classes.summary}
      >
        {excerpt}
      </Typography>

      <Typography
        component="time"
        variant="body2"
        className={classes.createdAt}
      >
        {createdAt}
      </Typography>
    </Box>
  )
}

export default ArticleBox
