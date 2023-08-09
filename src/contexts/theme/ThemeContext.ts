import React from 'react'
import { PaletteMode } from '@mui/material'

interface ThemeContextProps {
  switchMode: () => void
  mode: PaletteMode
}

export const ThemeContext = React.createContext<ThemeContextProps>(
  {} as ThemeContextProps,
)
