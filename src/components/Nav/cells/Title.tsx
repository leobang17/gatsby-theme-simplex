/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import { FC } from 'react'

type TitleCellProps = {
  title: string
}

const style = css`
  margin-inline: 2rem;
`

const TitleCell: FC<TitleCellProps> = ({ title }) => {
  return <div css={style}>{title}</div>
}

export default TitleCell
