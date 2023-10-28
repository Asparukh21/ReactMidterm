import React, { useState, useEffect } from 'react';
import PostList from './PostList';
import Search from './Search';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
  }, []); 

  const handleSearch = (query) => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  return (
    <div className="home">
      <h1>Home Page</h1>
      <Search handleSearch={handleSearch} />
      <PostList posts={filteredPosts.length > 0 ? filteredPosts : posts} />
    </div>
  );
};

export default Home;
