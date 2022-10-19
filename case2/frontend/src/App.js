import { ThemeProvider } from '@emotion/react';
import React from 'react'
import theme from './constants/theme';
import Router from './router/Router'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  )
}

export default App;
