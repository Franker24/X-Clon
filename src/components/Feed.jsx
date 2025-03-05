// src/components/Feed.js
import React from 'react';
import Post from './Post';
import './Feed.css';

function Feed({ activeTab }) { // Recibe activeTab como prop
  const posts = [
    { id: 1, text: '¡Hola, mundo!', likes: 5 },
    { id: 2, text: 'Clon de X en progreso', likes: 3 },
  ];

  return (
    <div className="feed">
      {activeTab === 'For You' && (
        <section className="feed__section">
          <h2>Inicio</h2>
          {posts.map(post => (
            <Post key={post.id} text={post.text} likes={post.likes} />
          ))}
        </section>
      )}
      {activeTab === 'Following' && (
        <section className="feed__section">
          <h2>Follow</h2>
          <p>Aquí aparecerán las publicaciones de las personas que sigues (próximamente).</p>
        </section>
      )}
      {activeTab === 'Business + Economy' && (
        <section className="feed__section">
          <h2>Business</h2>
          <p>Noticias y actualizaciones sobre negocios y economía (próximamente).</p>
        </section>
      )}
    </div>
  );
}

export default Feed;