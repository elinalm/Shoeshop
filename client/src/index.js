import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from "react-router-dom"
import ErrorBoundary from './errorBoundary'
import './index.css'
import { deepMerge } from "grommet/utils";
import { grommet } from 'grommet/themes';

import { Grommet } from 'grommet'

export const theme = deepMerge(grommet, {
  global: {
    font: {
      family: "'Overlock', cursive;",
    },
    colors: {
      brand: "dark-1",
    },
    heading: {
      extend: "font-family: 'Nunito', sans-serif;",
    },
  }
})

ReactDOM.render(
  (
    <Grommet theme={theme}>
      <BrowserRouter>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </Grommet>
  )
  , document.getElementById('root'))