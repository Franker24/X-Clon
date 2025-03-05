// src/components/RightSidebar.js
import React from 'react';
import './RightSidebar.css';

function RightSidebar() {
  return (
    <div className="right-sidebar">
        <div className="header__search">
        <input type="text" placeholder="Buscar en X" />
      </div>
      <br />
      {/* Sección de Suscripción */}
      <div className="right-sidebar__subscribe">
        <h3>Suscríbete a X</h3>
        <p>Obtén acceso a funciones exclusivas.</p>
        <button className="right-sidebar__button">Suscribirse</button>
      </div>

      {/* Sección de What's Happening */}
      <div className="right-sidebar__whats-happening">
        <h3>Whats Happening</h3>
        <ul className="whats-happening__list">
          <li>
            <span className="whats-happening__title">Noticia 1</span>
            <p>Algo importante pasó hoy - 10K vistas</p>
          </li>
          <li>
            <span className="whats-happening__title">Evento en vivo</span>
            <p>Transmisión en directo ahora - 5K viendo</p>
          </li>
          <li>
            <span className="whats-happening__title">Tendencia global</span>
            <p>#AlgoPopular - 50K publicaciones</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RightSidebar;