import React from 'react';
import Logo from '../../assets/LOGO.png';
import { Link } from 'react-router-dom';
import header from './header.css'

function Header() {
  return (
    <header className={header.header}>
      <img src={Logo} alt="Kasa" ></img>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to='/Apropos'>A Propos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;