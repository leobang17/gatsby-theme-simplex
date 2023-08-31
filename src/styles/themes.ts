import { PaletteColor, PaletteColorOptions, PaletteMode } from '@mui/material'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { teal } from '@mui/material/colors'
import { BORDER_MUSK, LIGHT_GRAY } from './Color'
import { makeMuiCache } from 'styles/cache'

type AdditionalPaletteProperty = 'gray' | 'border' | 'subText' | 'plainText'
export type AllPaletteProperty =
  | AdditionalPaletteProperty
  | 'primary'
  | 'secondary'

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
      primary: teal,
      secondary: {
        main: '#146C94',
      },
      mode,
    },
    typography: {
      fontFamily: 'Noto Sans KR,sans-serif',
      h1: {
        fontSize: '2.75rem',
        marginBlock: '0.6em',
        fontWeight: 400,
      },
      h2: {
        fontSize: '2.25rem',
        marginBlock: '0.6em',
        fontWeight: 400,
      },
      h3: {
        fontSize: '1.8rem',
        marginBlock: '0.87em',
        fontWeight: 400,
      },
      h4: {
        fontSize: '1.4rem',
        marginBlock: '1em',
        fontWeight: 500,
      },
      h5: {
        fontSize: '1.1rem',
        marginBlock: '1em',
        fontWeight: 500,
      },
    },
  })

  return responsiveFontSizes(
    createTheme(theme, {
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
        plainText: theme.palette.augmentColor({
          color: {
            main: '#000000',
          },
        }),
      },
    }),
  )
}

export const muiCache = makeMuiCache()
