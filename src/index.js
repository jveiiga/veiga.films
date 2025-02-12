import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' para React 18+
import App from './App';
import GlobalStyle from './themes/GlobalStyles';

// Utilize createRoot para React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
