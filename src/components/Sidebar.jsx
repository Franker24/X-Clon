// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar__menu">
        <li className="sidebar__item">
          <span>🏠</span> Inicio
        </li>
        <li className="sidebar__item">
          <span>🔍</span> Explorar
        </li>
        <li className="sidebar__item">
          <span>🔔</span> Notificaciones
        </li>
        <li className="sidebar__item">
          <span>✉️</span> Mensajes
        </li>
        <li className='sidebar__item'>
          <span></span>Grok
        </li>
        <li className='sidebar__item'>
          <span></span>Bookmarks
        </li>
        <li className='sidebar__item'>
          <span></span>Jobs
        </li>
        <li className="sidebar__item">
          <span>👤</span> Perfil
        </li>
        <li className='sidebar__item'>
          <span></span>More
        </li>
        
      </ul>
      <button className="sidebar__post-button">Post</button>
      <br />
      <br />
      <button className="id-profile">
  <img src="https://i.pinimg.com/236x/93/d2/d7/93d2d7d78b0d49019415ea68cb186ac1.jpg" alt="Avatar" />
  <p>@Franker24</p>
</button>
    </div>
  );
}

export default Sidebar;