import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import Feed from './Feed';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const profileImg = "https://i.pinimg.com/236x/93/d2/d7/93d2d7d78b0d49019415ea68cb186ac1.jpg";

  // Handle clicks outside to close sidebar on mobile
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (window.innerWidth <= 768 && isOpen) {
        const sidebar = document.querySelector('.sidebar');
        const toggleBtn = document.querySelector('.toggle-btn');
        if (sidebar && !sidebar.contains(event.target) && !toggleBtn.contains(event.target)) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isOpen]);

  // Handle toggle button click
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <div className={`sidebar ${isOpen ? 'active' : ''}`}>
      <div className="toggle-btn" onClick={toggleSidebar}>☰</div>
      <ul className="sidebar__menu">
  <li className="sidebar__item">
    <a href="https://x.com/home"><span>🏠</span> Inicio</a>
  </li>
  <li className="sidebar__item">
    <a href="https://x.com/explore"><span>🔍</span> Explorar</a>
  </li>
  <li className="sidebar__item">
    <a href="https://x.com/notifications"><span>🔔</span> Notificaciones</a>
  </li>
  <li className="sidebar__item">
    <a href="https://x.com/messages"><span>✉️</span> Mensajes</a>
  </li>
  <li className="sidebar__item">
    <a href="https://x.com/i/grok"><span>🤖</span> Grok</a>
  </li>
  <li className="sidebar__item">
    <a href="https://x.com/i/bookmarks"><span>🔖</span> Bookmarks</a>
  </li>
  <li className="sidebar__item">
    <a href="https://x.com/i/jobs"><span>💼</span> Jobs</a>
  </li>
  <li className="sidebar__item">
    <a href="https://x.com/profile"><span>👤</span> Perfil</a>
  </li>
  <li className="sidebar__item-puntos">
    <span>⋯</span><a href="https://x.com/i/more">More</a>
  </li>
</ul>
      <button className="sidebar__post-button">Post</button>
      <br />
      <br />
      <button className="id-profile">
        <img 
          src="https://i.pinimg.com/236x/93/d2/d7/93d2d7d78b0d49019415ea68cb186ac1.jpg" 
          alt="Avatar" 
        />
        <p>@Franker24</p>

      </button>
    </div>
  );
}

export default Sidebar;