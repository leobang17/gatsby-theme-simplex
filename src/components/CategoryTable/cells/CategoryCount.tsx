/** @jsx jsx */

import { FC } from 'react'
import { jsx } from '@emotion/react'
import { Chip } from '@mui/material'

type CategoryCountProps = {
  count: number
}

const CategoryCount: FC<CategoryCountProps> = ({ count }) => {
  return (
    <Chip
      label={count}
      sx={{
        borderRadius: '5px',
        marginInline: '10px',
        height: '1.5rem',
      }}
    />
  )
}

export default CategoryCount
