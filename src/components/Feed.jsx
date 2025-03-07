import React, { useState } from 'react';
import Post from './Post';
import './Feed.css';

function Feed({ activeTab }) {
  const [posts, setPosts] = useState({
    "For You": [
      { id: 1, text: '¡Hola, mundo!', likes: 5 },
      { id: 2, text: 'Clon de X en progreso', likes: 3 },
    ],
    "Following": [
      { id: 3, text: 'Post de alguien que sigues', likes: 8 },
      { id: 4, text: 'Otro post interesante', likes: 4 },
    ],
    "Business + Economy": [
      { id: 5, text: 'Las acciones están subiendo 📈', likes: 10 },
      { id: 6, text: 'Nueva tendencia en startups 🚀', likes: 6 },
    ],
  });

  const [newPost, setNewPost] = useState("");

  const handlePostSubmit = () => {
    if (newPost.trim() === "") return; // Evita publicar vacío

    const newPostObj = {
      id: Date.now(),
      text: newPost,
      likes: 0,
    };

    setPosts(prevPosts => ({
      ...prevPosts,
      [activeTab]: [newPostObj, ...prevPosts[activeTab]] // Agrega el nuevo post al inicio
    }));

    setNewPost("");
  };

  return (
    <div className="feed">
      {["For You", "Following"].includes(activeTab) && (
        <div className="post-input">
          <textarea
            placeholder="What's Happening..."
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
          <button onClick={handlePostSubmit}>Post</button>
        </div>
      )}

      {posts[activeTab] && (
        <section className="feed__section">
          {posts[activeTab].map(post => (
            <Post key={post.id} text={post.text} likes={post.likes} />
          ))}
        </section>
      )}
    </div>
  );
}

export default Feed;