import React, { FC } from 'react'

type TitleCellProps = {
  title: string
}

const TitleCell: FC<TitleCellProps> = ({ title }) => {
  return <div>{title}</div>
}

export default TitleCell
