/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import { Link } from 'gatsby'
import { FC } from 'react'

type ArticleCategoryLinkProps = {
  major?: string
  minor?: string
}

const style = css`
  color: skyblue;
  padding-left: 3px;
  font-size: 0.8rem;
  padding-bottom: 0.2rem;
`

const ArticleBoxCategoryLink: FC<ArticleCategoryLinkProps> = ({
  major,
  minor,
}) => {
  return (
    <div css={style}>
      <Link to="/posts">total</Link>
      {major ? (
        <text>
          {' > '}
          <Link to={`/posts/${major}`}>{major}</Link>
        </text>
      ) : null}

      {minor ? (
        <text>
          {' > '}
          <Link to={`/posts/${major}/${minor}`}>{minor} </Link>
        </text>
      ) : null}
    </div>
  )
}

export default ArticleBoxCategoryLink
