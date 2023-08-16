/** @jsx jsx */

import { jsx } from '@emotion/react'
import { PAGE_PREFIX } from 'constants/PageConsts'
import CategoryStrings from 'datastructures/category/CategoryStrings'
import { Link } from 'gatsby'
import { FC } from 'react'
import getCategoriesWithCategoryLinks from 'utils/getCategoriesWithCategoryLinks'
import { Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

type ArticleCategoryLinkProps = {
  categoryString: CategoryStrings
}

const useStyles = makeStyles()({
  root: {},
})

const ArticleBoxCategoryLink: FC<ArticleCategoryLinkProps> = ({
  categoryString,
}) => {
  const { classes } = useStyles()
  const categoriesWithCategoryLinks =
    getCategoriesWithCategoryLinks(categoryString)

  return (
    <Typography color="primary" variant="subtitle2" className={classes.root}>
      <Link to={PAGE_PREFIX.CATEGORY}>total</Link>
      {categoriesWithCategoryLinks.map((categoryWithCategoryLink, id) => {
        const [category, categoryLink] = categoryWithCategoryLink
        return (
          <span key={id}>
            {' > '}
            <Link to={categoryLink}>{category}</Link>
          </span>
        )
      })}
    </Typography>
  )
}

export default ArticleBoxCategoryLink
