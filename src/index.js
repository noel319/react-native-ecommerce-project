import React from 'react'
import { ThemeProvider } from 'styled-components'

import { CreateRoutes } from './navigation'
import { darkTheme } from './styles/theme'

const App = () => (
  <ThemeProvider theme={darkTheme}>
    <CreateRoutes />
  </ThemeProvider>
)

export default App
