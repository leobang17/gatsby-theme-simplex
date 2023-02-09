/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { FC } from 'react'

export type ArticleBoxTitleProps = {
  slug: string
  title: string
}

const style = css`
  display: inline-block;
`

const TitleWrapper = styled.h2`
  margin: 0;
`

const ArticleBoxTitle: FC<ArticleBoxTitleProps> = ({ slug, title }) => {
  return (
    <Link css={style} to={'/posts' + slug}>
      <TitleWrapper>{title}</TitleWrapper>
    </Link>
  )
}

export default ArticleBoxTitle
