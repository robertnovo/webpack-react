import React from 'react';
import { render } from 'react-dom';
import 'core-js';
import './styles.css';
import App from './App';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);
