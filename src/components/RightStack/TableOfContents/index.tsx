/** @jsx jsx */

import { jsx } from '@emotion/react'
import { FC, useContext } from 'react'

import { ArticleContext } from 'contexts/article/ArticleContext'
import useTableOfContentsObserver from 'hooks/useTableOfContentsObserver'

import TableOfContentsCell from './cells/TableOfContentsCell'
import { Stack } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

type TableOfContentsProps = {}

const useStyles = makeStyles()({
  nav: {
    position: 'sticky',
    // alignSelf: 'start',
    top: '5rem',
    maxHeight: 'calc(100vh - 5rem)',
    // overflow: 'auto',
  },
})

const TableOfContents: FC<TableOfContentsProps> = () => {
  useTableOfContentsObserver()
  const { tableOfContents } = useContext(ArticleContext)
  const { classes } = useStyles()

  return (
    <Stack component="nav" className={classes.nav}>
      <TableOfContentsCell data={tableOfContents!.root} />
    </Stack>
  )
}

export default TableOfContents
