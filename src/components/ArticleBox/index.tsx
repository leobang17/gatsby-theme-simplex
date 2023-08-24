/** @jsx jsx */

import { jsx } from '@emotion/react'
import { FC } from 'react'

import { MdxNode } from 'types/mdx-types'
import ArticleBoxTitle from './ArticleBoxTitle'
import ArticleBoxCategoryLink from './ArticleBoxCategoryLink'
import CategoryStrings from 'datastructures/category/CategoryStrings'

import { Box, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { themeMainLight } from 'styles/theme/colorProcessor'

const useStyles = makeStyles()({
  root: {
    marginBlock: '3rem',
  },
  title: {
    marginBlock: '1em',
  },
  summary: {
    display: 'block',
  },
  createdAt: {
    marginTop: '0.5rem',
  },
})

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
        // color={themeMainContrast('plainText')}
        className={classes.summary}
      >
        {excerpt}
      </Typography>

      <Typography
        component="time"
        variant="body2"
        color={themeMainLight('subText')}
        className={classes.createdAt}
      >
        {createdAt}
      </Typography>
    </Box>
  )
}

export default ArticleBox
