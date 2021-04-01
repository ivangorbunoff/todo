import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    width: 100%;
    min-height: 100vh;
    background: black;
    font-family: Arial, sans-serif;
  }
`

ReactDOM.render(
    <React.StrictMode>
        <Global/>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
