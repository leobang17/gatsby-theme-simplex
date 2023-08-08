/** @jsx jsx */

import { FC } from 'react'
import { jsx, css } from '@emotion/react'
import {
  Card,
  CardActionArea,
  CardContent,
  Link,
  Typography,
} from '@mui/material'
import { PAGE_PREFIX } from 'constants/PageConsts'
import { RecentPostDetails } from './RecentPosts'

interface RecentPostProps {
  prev?: boolean
  next?: boolean
  post?: RecentPostDetails
}

const style = css``

const RecentPost: FC<RecentPostProps> = ({ prev, next, post }) => {
  return (
    <div css={style} hidden={!post}>
      <Card>
        <CardActionArea>
          <Link
            href={PAGE_PREFIX.ARTICLE + post?.fields.slug}
            style={{ textDecoration: 'none' }}
          >
            <CardContent
              sx={
                next
                  ? {
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                    }
                  : null
              }
            >
              <Typography color={'gray'} variant="body2">
                {prev ? '이전 포스트' : '다음 포스트'}
              </Typography>
              <Typography variant="subtitle1">
                {prev
                  ? `<< ${post?.frontmatter.title}`
                  : `${post?.frontmatter.title} >>`}
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    </div>
  )
}

export default RecentPost
