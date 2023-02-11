/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import { FC, useContext, useState } from 'react'

import { ArticleContext } from 'contexts/article/ArticleContext'
import useTableOfContentsObserver from 'hooks/useTableOfContentsObserver'

import TableOfContentsCell from './cells/TableOfContentsCell'

type TableOfContentsProps = {}

const style = css`
  position: -webkit-sticky;
  position: sticky;
  align-self: start;
  top: 5rem;
  max-height: calc(100vh - 5rem);
  overflow: auto;
`
const TableOfContents: FC<TableOfContentsProps> = () => {
  useTableOfContentsObserver()
  const { tableOfContents } = useContext(ArticleContext)

  return (
    <div css={style}>
      <TableOfContentsCell data={tableOfContents!.root} />
    </div>
  )
}

export default TableOfContents
