/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import CategoryTable from 'components/CategoryTable'

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
      <CategoryTable />
    </div>
  )
}

export default BioAndCategories
