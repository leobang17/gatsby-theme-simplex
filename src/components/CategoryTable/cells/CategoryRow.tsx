/** @jsx jsx */

import { Link } from 'gatsby'
import { FC } from 'react'
import { jsx } from '@emotion/react'

import { PAGE_PREFIX } from 'constants/PageConsts'
import { CategoryTreeObject } from 'datastructures/category/CategoryTree'
import CategoryCount from './CategoryCount'

import { Paper, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

type CategoryRowProps = {
  category: CategoryTreeObject
}

const useStyles = makeStyles<{
  activated: boolean
  nodeDepth: number
}>()((theme, { activated, nodeDepth }) => ({
  categoryRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBlock: '0.3rem',
    paddingInline: '0.5rem',
    marginBlock: '1px',
    fontWeight: activated ? 600 : 500,
    backgroundColor: activated
      ? theme.palette.mode === 'dark'
        ? theme.palette.gray.dark
        : theme.palette.gray.main
      : 'inherit',

    ':hover': {
      backgroundColor:
        theme.palette.mode === 'dark'
          ? theme.palette.gray.dark
          : theme.palette.gray.main,
    },
  },

  categoryTypo: {
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontWeight: activated ? 600 : 500,
    color: activated
      ? theme.palette.mode === 'dark'
        ? theme.palette.primary.light
        : theme.palette.primary.main
      : 'inherit',
    paddingLeft: `${0.5 + nodeDepth * 0.5}rem`,
  },
}))

const CategoryRow: FC<CategoryRowProps> = ({ category }) => {
  const { classes } = useStyles({
    activated: category.activated,
    nodeDepth: category.nodeDepth,
  })

  return (
    <Link to={PAGE_PREFIX.CATEGORY + category.slug}>
      <Paper className={classes.categoryRow} elevation={0}>
        <Typography className={classes.categoryTypo}>
          {category.name}
        </Typography>
        <CategoryCount count={category.count} />
      </Paper>
    </Link>
  )
}

export default CategoryRow
