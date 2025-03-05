import React from 'react';
import './Post.css'; // Importamos su propio archivo CSS

function Post({ text, likes }) {
  return (
    <div className="post">
      <p>{text}</p>
      <div className="post__actions">
        <button>Me gusta ({likes})</button>
        <button>Compartir</button>
        <button>Comentar</button>
      </div>
    </div>
  );
}

export default Post;