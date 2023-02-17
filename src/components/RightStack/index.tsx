/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import { FC } from 'react'

import { sidestack_mq } from 'styles/Responsive'

type RightStackProps = {
  stack?: JSX.Element
}

const style = css(
  sidestack_mq({
    width: '256px',
    display: ['none', 'flex'],
  }),
)

const RightStack: FC<RightStackProps> = ({ stack }) => {
  return <div css={style}>{stack ?? null}</div>
}

export default RightStack
