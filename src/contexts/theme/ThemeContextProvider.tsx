import React from 'react'

import { ChildrenProps } from 'types/react-types'
import { ThemeContext } from './ThemeContext'
import { Theme, ThemeProvider } from '@mui/material'
import { configureTheme, muiCache } from 'styles/themes'
import { useDarkmode } from 'hooks/useDarkmode'
import { CacheProvider } from '@emotion/react'

export type ThemeContextProviderProps = {} & ChildrenProps

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const { mode, switchMode } = useDarkmode()

  const theme = React.useMemo<Theme>(() => {
    return configureTheme(mode)
  }, [mode])

  return (
    <ThemeContext.Provider
      value={{
        switchMode,
        mode,
      }}
    >
      <CacheProvider value={muiCache}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </CacheProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
