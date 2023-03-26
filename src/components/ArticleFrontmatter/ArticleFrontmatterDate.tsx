/** @jsx jsx */

import { FC } from 'react'
import { jsx, css } from '@emotion/react'
import { GRAY } from 'styles/Color'

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
  color: ${GRAY};
`

const ArticleFrontmatterDate: FC<ArticleFrontmatterDateProps> = ({
  createdAt,
  timeToRead,
  modifiedAt,
}) => {
  return (
    <div css={style}>
      <time css={creationCSS}>
        {createdAt} · ☕️ {timeToRead} min reads
      </time>
    </div>
  )
}

export default ArticleFrontmatterDate
