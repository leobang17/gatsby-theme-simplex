/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import { FC } from 'react'
import { l_mq } from 'styles/facepaint'

type RightStackProps = {
  stack?: JSX.Element
}

const style = css(
  css`
    margin-right: 2rem;
  `,
  l_mq({
    width: '256px',
    display: ['none', 'flex'],
  }),
)

const RightStack: FC<RightStackProps> = ({ stack }) => {
  return <aside css={style}>{stack ?? null}</aside>
}

export default RightStack
