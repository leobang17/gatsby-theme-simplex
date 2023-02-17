/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import Bio from 'components/Bio'
import Categories from 'components/Categories'

const style = css`
  position: -webkit-sticky;
  position: sticky;
  align-self: start;
  top: 5rem;
  max-height: calc(100vh - 5rem);
  overflow: auto;
`

const BioAndCategories = () => {
  return (
    <div css={style}>
      <Bio />
      <Categories />
    </div>
  )
}

export default BioAndCategories
