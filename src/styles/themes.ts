import { PaletteColor, PaletteColorOptions, PaletteMode } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { teal } from '@mui/material/colors'
import { BORDER_MUSK, LIGHT_GRAY } from './Color'
import { makeMuiCache } from 'styles/cache'

type AdditionalPaletteProperty = 'gray' | 'border' | 'subText'

type AdditionalPalette = {
  [key in AdditionalPaletteProperty]: PaletteColor
}

type AdditionalPaletteOptions = {
  [key in AdditionalPaletteProperty]?: PaletteColorOptions
}

declare module '@mui/material/styles' {
  interface Palette extends AdditionalPalette {}

  interface PaletteOptions extends AdditionalPaletteOptions {}
}

export const configureTheme = (mode: PaletteMode) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: teal[600],
      },
      secondary: {
        main: '#146C94',
      },
      mode,
    },
  })

  return createTheme(theme, {
    palette: {
      gray: theme.palette.augmentColor({
        color: {
          main: '#EBEBEB',
          dark: '#22262C',
        },
      }),
      border: theme.palette.augmentColor({
        color: {
          main: BORDER_MUSK,
        },
      }),
      subText: theme.palette.augmentColor({
        color: {
          main: LIGHT_GRAY,
        },
      }),
    },
  })
}

export const muiCache = makeMuiCache()
