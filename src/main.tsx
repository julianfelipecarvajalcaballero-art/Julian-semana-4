import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './App.css'; // Estilos globales y del catálogo

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);