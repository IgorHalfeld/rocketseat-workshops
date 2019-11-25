import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStateProvider } from './store';
import App from './App.jsx';
import './index.scss';

ReactDOM.render(
  <GlobalStateProvider>
    <App />
  </GlobalStateProvider>,
document.getElementById('root'));