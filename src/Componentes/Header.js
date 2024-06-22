// src/components/Header.js
import React from 'react';
import '../Styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Blog de Viagem</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#destinos">Destinos</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
