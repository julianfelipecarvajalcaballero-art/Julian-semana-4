import React from 'react';
import { Catalog } from './components/Catalog';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-wrapper">
      <nav className="navbar">
        <div className="container">
          <span className="logo">👨‍🍳 ChefManager Pro v4</span>
        </div>
      </nav>
      
      <main className="container">
        <Catalog />
      </main>

      <footer className="footer">
        <p>&copy; 2026 - Sistema de Gestión de Restaurante</p>
      </footer>
    </div>
  );
};

export default App;