/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import { FC, useContext } from 'react'

import { ArticleContext } from 'contexts/article/ArticleContext'
import useTableOfContentsObserver from 'hooks/useTableOfContentsObserver'

import TableOfContentsCell from './cells/TableOfContentsCell'
import { Stack, Theme, useTheme } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { usePalette } from 'styles/theme/colorProcessor'

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

const style = (theme: Theme) => css`
  color: ${usePalette(theme, 'subText', (color, dark) =>
    dark ? color.light : color.main,
  )};

  .activated {
    color: ${usePalette(theme, 'plainText', (color, dm) =>
      dm ? color.contrastText : color.dark,
    )};
    left: -5px;
    transform: scale(105%);
  }
`

const TableOfContents: FC<TableOfContentsProps> = () => {
  useTableOfContentsObserver()
  const { tableOfContents } = useContext(ArticleContext)
  const { classes } = useStyles()
  const theme = useTheme()

  return (
    <Stack component="nav" className={classes.nav} css={style(theme)}>
      <TableOfContentsCell data={tableOfContents!.root} />
    </Stack>
  )
}

export default TableOfContents
