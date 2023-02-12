/** @jsx jsx */

import { FC } from 'react'
import { css, jsx } from '@emotion/react'

import Bio from 'components/Bio'
import Categories from 'components/Categories'
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
  return (
    <div css={style}>
      <Bio />
      <Categories />
    </div>
  )
}

export default LeftStack
