/** @jsx jsx */

import { FC } from 'react'
import { css, jsx } from '@emotion/react'

import { sidestack_mq } from 'styles/Responsive'

type LeftStackProps = {
  stack?: JSX.Element
}

const style = css(
  sidestack_mq({
    width: '256px',
    display: ['none', 'block'],
  }),
)

const LeftStack: FC<LeftStackProps> = ({ stack }) => {
  return <div css={style}>{stack ?? null}</div>
}

export default LeftStack
