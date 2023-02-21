/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import { FC } from 'react'
import { BORDER_MUSK } from 'styles/Color'
import FooterOrigin from './cells/FooterOrigin'
import FooterUsername from './cells/FooterUsername'

type FooterProps = {}

const style = css`
  width: 100vw;
  margin-top: 5rem;
  padding: 1rem 0 1rem 0;
  border-top: 1px solid ${BORDER_MUSK};
  font-size: small;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #515055;

  a {
    transition: color 0.15s ease;
    :hover {
      color: skyblue;
    }
  }
`

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div css={style}>
      <p>
        <FooterUsername />
        <span>Theme by </span>
        <FooterOrigin />
        <span>, Built with Gatsby</span>
      </p>
    </div>
  )
}

export default Footer
