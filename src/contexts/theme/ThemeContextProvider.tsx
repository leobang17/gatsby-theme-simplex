import React from 'react'

import { ChildrenProps } from 'types/react-types'
import { ThemeContext } from './ThemeContext'
import { Theme, ThemeProvider } from '@mui/material'
import { darkTheme, lightTheme } from 'styles/themes'
import { useDarkmode } from 'hooks/useDarkmode'

export type ThemeContextProviderProps = {} & ChildrenProps

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const { mode, switchMode } = useDarkmode()

  const theme = React.useMemo<Theme>(() => {
    return mode === 'dark' ? darkTheme : lightTheme
  }, [mode])

  return (
    <ThemeContext.Provider
      value={{
        switchMode,
        mode,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
