// src/App.js
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/feed';
import RightSidebar from './components/RightSidebar';

function App() {
  const [activeTab, setActiveTab] = useState('For You'); // Estado en App

  return (
    <div className="app">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="main-content">
        <Sidebar />
        <Feed activeTab={activeTab} />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;