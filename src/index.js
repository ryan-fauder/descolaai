import React from 'react';
import ReactDOM from 'react-dom';
import App from './main';
import './services/core';
import GlobalStyle from './css';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
