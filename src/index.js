import React from 'react'
import { ThemeProvider } from 'styled-components'

import { CreateRoutes } from './navigation'
import { darkTheme } from './styles/theme'
import { NavigationService } from './navigation'

const App = () => (
  <ThemeProvider theme={darkTheme}>
    <CreateRoutes
      ref={navigationRef => {
        NavigationService.setTopLevelNavigator(navigationRef)
      }}
    />
  </ThemeProvider>
)

export default App
