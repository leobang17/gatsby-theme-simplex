/** @jsx jsx */

import { FC } from 'react'
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import * as Default from 'styles/designSystem/default'

export type ArticleBoxTitleProps = {
  slug: string
  title: string
}

const style = css`
  display: inline-block;
`

const TitleWrapper = styled(Default.H2)`
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
