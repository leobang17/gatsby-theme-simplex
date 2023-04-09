/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import { themeConfigs } from '../../configuration'
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
      color: ${themeConfigs.light.main};
    }
  }
`

const sectionStyle = css`
  margin-block: 1rem;
`

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer css={style}>
      <section css={sectionStyle}>
        <FooterUsername />
        <span>Theme by </span>
        <FooterOrigin />
        <span>, Built with Gatsby</span>
      </section>
    </footer>
  )
}

export default Footer
