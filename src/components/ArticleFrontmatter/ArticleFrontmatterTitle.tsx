/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import { Typography } from '@mui/material'
import { FC } from 'react'

import { m_mq } from 'styles/facepaint'
import { themeMainContrast } from 'styles/theme/colorProcessor'
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
      <Typography
        variant="h1"
        color={themeMainContrast('plainText')}
        css={style}
      >
        {title}
      </Typography>
    </hgroup>
  )
}

export default ArticleFrontmatterTitle
