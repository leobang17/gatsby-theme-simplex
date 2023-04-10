/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import { FC } from 'react'

import TableNode from 'datastructures/tableOfContents/TableNode'
import TOCTitle from './TOCTitle'

type TableOfContentsCellProps = {
  data: TableNode
  depth?: number
}

const style = (depth: number) =>
  css`
    margin-left: ${depth * 5}px;
  `

const TableOfContentsCell: FC<TableOfContentsCellProps> = ({
  data,
  depth = 0,
}) => {
  return (
    <div css={style(data.depth)}>
      <TOCTitle {...data} />
      {data.items
        ? data.items.map((item, id) => (
            <TableOfContentsCell key={id} data={item} depth={depth + 1} />
          ))
        : null}
    </div>
  )
}

export default TableOfContentsCell
