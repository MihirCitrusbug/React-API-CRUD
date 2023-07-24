// * React Component
import React from 'react';

// * Third party Components
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'

// * Default Component
import App from './App';
import reportWebVitals from './reportWebVitals';

// * CSS
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
