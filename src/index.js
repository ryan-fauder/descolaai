import React from 'react';
import ReactDOM from 'react-dom';
import App from './main';
import './master.css';
import './masterFonts.js';
import './services/core';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
