/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import { FC } from 'react'

import { MdxNode } from 'types/mdx-types'
import { GRAY } from 'styles/Color'
import ArticleBoxTitle from './ArticleBoxTitle'
import ArticleBoxCategoryLink from './ArticleBoxCategoryLink'

const style = css`
  /* width: 600px; */
  margin: 3rem 0 3rem 0;
`

const CreatedAt = styled.div`
  color: ${GRAY};
  font-size: 0.8rem;
  margin-top: 0.5rem;
`

const ArticleBox: FC<MdxNode> = ({
  fields: { slug, categoryDirectory },
  frontmatter: { title, createdAt },
  excerpt,
}) => {
  return (
    <div css={style}>
      <ArticleBoxCategoryLink categoryDirectory={categoryDirectory} />
      <ArticleBoxTitle slug={slug} title={title} />
      <div>{excerpt}</div>
      <CreatedAt>{createdAt}</CreatedAt>
    </div>
  )
}

export default ArticleBox
