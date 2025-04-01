// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/eventos">Eventos</Link></li>
          <li><Link to="/cadastrar">Cadastrar Evento</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
