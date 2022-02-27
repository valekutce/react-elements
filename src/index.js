import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobeStyle from './GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <GlobeStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
