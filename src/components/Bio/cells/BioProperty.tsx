/** @jsx jsx */

import { FC } from 'react'
import { jsx, css } from '@emotion/react'
import BioIcon, { BioIconType } from './BioIcon'

import { ChildrenProps } from 'types/react-types'

const style = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
})

export type BioPropertyProps = {
  type: BioIconType
  visible: boolean
} & ChildrenProps

const BioProperty: FC<BioPropertyProps> = ({ type, visible, children }) => {
  return visible ? (
    <div css={style}>
      <BioIcon type={type} />
      {children}
    </div>
  ) : null
}

export default BioProperty
