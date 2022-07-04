import Home from "./components/Home"
import { ColorModeContext } from './Helper/Context'
import { useState, useMemo } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { MyTheme } from './Helper/theme'

import Header from "./components/Header"

function App() {

  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      }
    }),
    []
  )

   const theme = MyTheme(mode)

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Header />
          <Home />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
