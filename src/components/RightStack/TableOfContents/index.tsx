/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import { FC, useContext } from 'react'

import { ArticleContext } from 'contexts/article/ArticleContext'
import useTableOfContentsObserver from 'hooks/useTableOfContentsObserver'

import TableOfContentsCell from './cells/TableOfContentsCell'
import { BORDER_MUSK } from 'styles/Color'

type TableOfContentsProps = {}

const style = css`
  position: -webkit-sticky;
  position: sticky;
  align-self: start;
  top: 5rem;
  max-height: calc(100vh - 5rem);
  overflow: auto;

  border-left: 1px solid ${BORDER_MUSK};
  padding-block: 0.5rem;
  padding-left: 1rem;
`
const TableOfContents: FC<TableOfContentsProps> = () => {
  useTableOfContentsObserver()
  const { tableOfContents } = useContext(ArticleContext)

  return (
    <nav css={style}>
      <TableOfContentsCell data={tableOfContents!.root} />
    </nav>
  )
}

export default TableOfContents
