/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import { Link } from 'gatsby'
import { FC } from 'react'
import { SECOND } from 'styles/Color'

type TitleCellProps = {
  title: string
}

const style = css`
  margin-inline: 2rem;
  padding: 0.5rem;
  font-weight: 500;
  transition: all 0.15s ease;

  :hover {
    color: ${SECOND};
    scale: 105%;
  }
`

const TitleCell: FC<TitleCellProps> = ({ title }) => {
  return (
    <Link to="/" css={style}>
      {title}
    </Link>
  )
}

export default TitleCell
