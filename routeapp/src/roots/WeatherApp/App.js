import React, {useState, useEffect} from 'react';
import Home from './Home';
import Location from './Location.js'
import './App.css';
import background from "./06.png";

function App() {
  


  return (
    <div className = "container" style={{ backgroundImage: `url(${background})` }}>
      <Home/> 
    </div>
  );
}

export default App;
