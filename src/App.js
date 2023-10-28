import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import Footer from './Footer'

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/post:id" element={<Post/>} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <Footer/>  
    </Router>
  );
};


export default App;
