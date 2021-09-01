import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import './services/core';
import GlobalStyle from './css';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
