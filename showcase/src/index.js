import React from 'react'
import { createRoot } from 'react-dom'
import { createGlobalStyle } from 'styled-components'

import App from './App'

const GlobalStyle = createGlobalStyle`
*,
*:before,
*:after {
    box-sizing: border-box;
}

  body {
    padding: 0;
    margin: 0;
    color: #b2bbc8;
    font-family: Avenir, Nunito, sans-serif;
    font-size: 16px;
    font-weight: 500;
  }

`
createRoot(document.getElementById('root')).render( <>
    <GlobalStyle />
    <App />
</>)

