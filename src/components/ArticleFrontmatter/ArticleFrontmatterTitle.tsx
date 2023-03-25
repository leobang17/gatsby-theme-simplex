/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import { FC } from 'react'

import { m_mq } from 'styles/facepaint'
import Mapper from 'utils/Mapper'

type ArticleFrontmatterTitleProps = {
  title: string
}

const style = css(
  css`
    margin-block: 0.5rem;
    font-weight: 500;
  `,
  m_mq({
    fontSize: Mapper.mapRem([2, 2.8]),
  }),
)

const ArticleFrontmatterTitle: FC<ArticleFrontmatterTitleProps> = ({
  title,
}) => {
  return (
    <hgroup>
      <h1 css={style}>{title}</h1>
    </hgroup>
  )
}

export default ArticleFrontmatterTitle
