import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Make sure this file exists
import Home from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
