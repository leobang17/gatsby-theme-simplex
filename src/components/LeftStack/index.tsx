/** @jsx jsx */

import { FC } from 'react'
import { css, jsx } from '@emotion/react'
import { l_mq } from 'styles/facepaint'

type LeftStackProps = {
  stack?: JSX.Element
}

const style = css(
  css`
    margin-left: 2rem;
  `,
  l_mq({
    width: '256px',
    display: ['none', 'block'],
  }),
)

const LeftStack: FC<LeftStackProps> = ({ stack }) => {
  return <aside css={style}>{stack ?? null}</aside>
}

export default LeftStack
