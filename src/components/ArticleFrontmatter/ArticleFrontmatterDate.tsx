/** @jsx jsx */

import { FC } from 'react'
import { jsx, css } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import { themeMainLight } from 'styles/theme/colorProcessor'

type ArticleFrontmatterDateProps = {
  createdAt: string
  timeToRead: number
  modifiedAt?: string
}

const style = css`
  padding-left: 0.4rem;
`

const creationCSS = css`
  font-size: 0.9rem;
`

const ArticleFrontmatterDate: FC<ArticleFrontmatterDateProps> = ({
  createdAt,
  timeToRead,
  modifiedAt,
}) => {
  return (
    <Box component="section" css={style}>
      <Typography
        component="time"
        color={themeMainLight('subText')}
        css={creationCSS}
      >
        {createdAt} · ☕️ {timeToRead} min reads
      </Typography>
    </Box>
  )
}

export default ArticleFrontmatterDate
