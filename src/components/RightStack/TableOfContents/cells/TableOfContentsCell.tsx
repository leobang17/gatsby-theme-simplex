/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import { FC } from 'react'

import { LIGHT_GRAY } from 'styles/Color'
import TableNode from 'datastructures/tableOfContents/TableNode'
import TOCTitle from './TOCTitle'

type TableOfContentsCellProps = {
  data: TableNode
  depth?: number
}

const style = (depth: number, activated: boolean) =>
  css`
    margin-left: ${depth * 5}px;
    color: ${activated ? 'black' : LIGHT_GRAY};
    font-size: ${activated ? '1.1rem' : '1rem'};
    transition: color 0.2s ease, font-size 0.2s ease;
  `

const TableOfContentsCell: FC<TableOfContentsCellProps> = ({
  data,
  depth = 0,
}) => {
  return (
    <div css={style(data.depth, data.isActivated())}>
      <TOCTitle {...data} />
      {data.items
        ? data.items.map(item => (
            <TableOfContentsCell data={item} depth={depth + 1} />
          ))
        : null}
    </div>
  )
}

export default TableOfContentsCell
