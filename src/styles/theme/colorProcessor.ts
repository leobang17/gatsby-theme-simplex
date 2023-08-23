import { PaletteColor, useTheme } from '@mui/material/styles'
import { AllPaletteProperty } from 'styles/themes'

function usePaletteColor(
  paletteOpt: AllPaletteProperty,
  consumer: (color: PaletteColor, isDarkmode: boolean) => string,
) {
  const { palette } = useTheme()
  return consumer(palette[paletteOpt], palette.mode === 'dark')
}

export function themeLightDark(color: AllPaletteProperty) {
  return usePaletteColor(color, (color, isDarkmode) =>
    isDarkmode ? color.dark : color.light,
  )
}

export function themeMainDark(color: AllPaletteProperty) {
  return usePaletteColor(color, (color, isDarkmode) =>
    isDarkmode ? color.dark : color.main,
  )
}

export function themeMainContrast(color: AllPaletteProperty) {
  return usePaletteColor(color, (color, isDarkmode) =>
    isDarkmode ? color.contrastText : color.main,
  )
}

export function themeMainLight(color: AllPaletteProperty) {
  return usePaletteColor(color, (color, isDarkmode) =>
    isDarkmode ? color.light : color.main,
  )
}

export function themeDarkContrast(color: AllPaletteProperty) {
  return usePaletteColor(color, (color, isDarkmode) =>
    isDarkmode ? color.contrastText : color.dark,
  )
}
