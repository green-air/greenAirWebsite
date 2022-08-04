// import logo from './logo.svg';
import './App.css';
import Icons from './Socials_component/Socials.js';

import React from 'react';
import {
  BrowserRouter as Router, Link, Route, Routes
} from "react-router-dom"
import Contact from './contact';
import Home from './Home';



function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        
        {/* <Link to='/contact' >Contact Us</Link> */}
        {/* <Icons /> */}
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
           </Routes>
          
        
        </header>
    </div>
    </Router>
  );
}

export default App;
