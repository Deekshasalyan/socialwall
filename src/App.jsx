// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddPost from './pages/AddPost';
import About from './pages/About';
import './App.css';


function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  return (
    <BrowserRouter>
      <nav>
        <Link to="/" className="add-post-link">Home</Link> | 
        <Link to="/add" className="add-post-link">Add Post</Link> | 
        <Link to="/about" className="add-post-link">About</Link>
      </nav>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/add" element={<AddPost addPost={addPost} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
