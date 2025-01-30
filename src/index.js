import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18+
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import './index.css'; // Tailwind or custom CSS

// Select the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </React.StrictMode>
);
