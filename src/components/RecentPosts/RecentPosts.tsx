/** @jsx jsx */

import { FC } from 'react'
import { jsx, css } from '@emotion/react'
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Link,
  Typography,
} from '@mui/material'
import RecentPost from './RecentPost'

type RecentPostsProps = {
  prev?: RecentPostDetails
  next?: RecentPostDetails
}

export interface RecentPostDetails {
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
  }
}

const style = css``

const RecentPosts: FC<RecentPostsProps> = ({ prev, next }) => {
  return (
    <Grid marginY={5} container columnSpacing={2} rowSpacing={2}>
      <Grid item xs={12} sm={6}>
        <RecentPost prev post={prev} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <RecentPost next post={next} />
      </Grid>
    </Grid>
  )
}

export default RecentPosts
