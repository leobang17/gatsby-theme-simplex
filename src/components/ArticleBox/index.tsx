/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import { FC } from 'react'

import { MdxNode } from 'types/mdx-types'
import { GRAY } from 'styles/Color'
import ArticleBoxTitle from './ArticleBoxTitle'
import ArticleBoxCategoryLink from './ArticleBoxCategoryLink'
import CategoryStrings from 'datastructures/category/CategoryStrings'
import * as Default from 'styles/designSystem/default'

const style = css`
  margin-block: 3rem;
`

const spanStyle = css`
  display: block;
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
      <ArticleBoxCategoryLink
        categoryString={CategoryStrings.initialize(categoryDirectory)}
      />
      <ArticleBoxTitle slug={slug} title={title} />
      <Default.SPAN css={spanStyle}>{excerpt}</Default.SPAN>
      <CreatedAt>{createdAt}</CreatedAt>
    </div>
  )
}

export default ArticleBox
