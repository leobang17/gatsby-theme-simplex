/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import { FC } from 'react'

import ArticleFrontmatterDate from './ArticleFrontmatterDate'
import ArticleFrontmatterTitle from './ArticleFrontmatterTitle'

type ArticleFrontmatterProps = {
  title: string
  createdAt: string
  modifiedAt?: string
  timeToRead: number
}

const style = css`
  margin-top: 1rem;
  margin-bottom: 2rem;
`

const ArticleFrontmatter: FC<ArticleFrontmatterProps> = ({
  title,
  createdAt,
  modifiedAt,
  timeToRead,
}) => {
  return (
    <section css={style}>
      <ArticleFrontmatterTitle title={title} />
      <ArticleFrontmatterDate
        createdAt={createdAt}
        modifiedAt={modifiedAt}
        timeToRead={timeToRead}
      />
    </section>
  )
}

export default ArticleFrontmatter
