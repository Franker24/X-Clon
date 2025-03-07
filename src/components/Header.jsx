
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Header.css';


// eslint-disable-next-line react/prop-types
function Header({ activeTab, setActiveTab }) { 
  return (
    <div className="header">
      <div className="header__logo">
        <img src="https://imgs.search.brave.com/aAfjaJ8CNnbUFdwd5GlHV41haclz6s-9SwO168p1aH0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGFuYWNpb24uY29t/LmFyL3Jlc2l6ZXIv/djIvZWxvbi1tdXNr/LWNhbWJpby1lbC1s/b2dvLWRlLVdIVElX/RVY0N1ZIRUhEVjRR/WUM2UFJYVkJFLmpw/Zz9hdXRoPTI5ZTQw/NDJmNDhhZjMxMGRl/YjdlNDZhYjlhZmMz/MWQ4ZWY5ODU4OWMz/YzFjMWMyOWQ2YmU3/Y2UzMzU0NzdkZjEm/d2lkdGg9NDIwJmhl/aWdodD0yODAmcXVh/bGl0eT03MCZzbWFy/dD10cnVl" alt="" />
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
            Business, Investment + Economy
          </li>
        </ul>
      </nav>

      <div className="header__profile">
        <button>Profile</button>
      </div>
    </div>
  );
}

export default Header;