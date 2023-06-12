import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './assets/styles/global.css';
import reportWebVitals from './reportWebVitals';

// create react node
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// render react components
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// report web vitals
reportWebVitals();
