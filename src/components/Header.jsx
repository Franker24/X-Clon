// src/components/Header.js
import React from 'react';
import './Header.css';

function Header({ activeTab, setActiveTab }) { // Recibe activeTab y setActiveTab como props
  return (
    <div className="header">
      <div className="header__logo">
        <h1>X</h1> {/* Aquí podrías usar un ícono SVG o imagen */}
      </div>

      <nav className="header__nav">
        <ul className="header__nav-list">
          <li
            className={`header__nav-item ${activeTab === 'For You' ? 'active' : ''}`}
            onClick={() => setActiveTab('For You')}
          >
            For You
          </li>
          <li
            className={`header__nav-item ${activeTab === 'Following' ? 'active' : ''}`}
            onClick={() => setActiveTab('Following')}
          >
            Following
          </li>
          <li
            className={`header__nav-item ${activeTab === 'Business + Economy' ? 'active' : ''}`}
            onClick={() => setActiveTab('Business + Economy')}
          >
            Business + Economy
          </li>
        </ul>
      </nav>

      <div className="header__profile">
        <button>Perfil</button> {/* Podría ser un ícono o enlace */}
      </div>
    </div>
  );
}

export default Header;