/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import { Link } from 'gatsby'
import { FC, useContext } from 'react'

import { ArticleContext } from 'contexts/article/ArticleContext'
import { LIGHT_GRAY } from 'styles/Color'

type TOCTitleProps = {
  title?: string
  url?: string
  activated?: boolean
}

const style = (activated?: boolean) => css`
  position: relative;
  padding-block: 1px;
  font-size: 0.9rem;
  font-weight: 300;
  left: ${activated ? '-5px' : '0'};
  transform: ${activated ? 'scale(107%)' : 'scale(100%)'};
  color: ${activated ? 'black' : LIGHT_GRAY};

  :hover {
    color: black;
  }

  transition: color 0.2s ease, left 0.2s ease, transform 0.2s ease;
`
const TOCTitle: FC<TOCTitleProps> = ({ title, url, activated }) => {
  const {
    fields: { slug },
  } = useContext(ArticleContext)

  return (
    <div css={style(activated)}>
      <Link to={`/posts` + slug + url}>{title}</Link>
    </div>
  )
}

export default TOCTitle
