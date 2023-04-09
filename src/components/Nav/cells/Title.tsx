/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import { themeConfigs } from '../../../configuration'
import { Link } from 'gatsby'
import { FC } from 'react'

type TitleCellProps = {
  title: string
}

const style = css`
  margin-inline: 2rem;
  padding: 0.5rem;
  font-weight: 500;
  transition: all 0.15s ease;

  :hover {
    color: ${themeConfigs.light.sub};
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
