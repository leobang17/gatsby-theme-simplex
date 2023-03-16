/** @jsx jsx */

import { FC } from 'react'
import { jsx, css } from '@emotion/react'

type CategoryCountProps = {
  count: number
}

const style = css`
  padding-inline: 5px;
  margin-inline: 10px;
  border-radius: 5px;
  background-color: whitesmoke;
`

const CategoryCount: FC<CategoryCountProps> = ({ count }) => {
  return <div css={style}>{count}</div>
}

export default CategoryCount
