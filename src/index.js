import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { CreateRoutes } from './navigation'
import { darkTheme } from './styles/theme'
import { NavigationService } from './navigation'
import store from './redux/store'

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={darkTheme}>
      <CreateRoutes
        ref={navigationRef => {
          NavigationService.setTopLevelNavigator(navigationRef)
        }}
      />
    </ThemeProvider>
  </Provider>
)

export default App
