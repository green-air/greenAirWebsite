// import logo from './logo.svg';
import './App.css';
import Icons from './Socials_component/Socials.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, {useState} from 'react';
import {
  BrowserRouter as Router, Link, Route, Routes
} from "react-router-dom"
import Contact from './contact';
import Home from './Home';



<<<<<<< HEAD


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <Icons />
//         </header>
//     </div>
//   );
// }

//export default App;


// attempt 2 -----------------------------------------------------


// Navbar functional imports: -------------------------------------------------
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Navigation/Layout.jsx";
import Home from "./pages/Home.jsx";
import Forecast from "./pages/Forecast.js";
import About from "./pages/About.jsx";
import NoPage from "./pages/NoPage.jsx";
// end navbar functional imports ----------------------------------------------

// Navbar style imports: -------------------------------------------------
import "bootstrap/dist/css/bootstrap.min.css";
// end Navbar style imports: -------------------------------------------------


export default function App() {
  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Forecast" element={<Forecast />} />
          <Route path="/About" element={<About />} />
          <Route path="/Home" element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
=======
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
        <Route exact path="/contact" element={<Contact />}/>
           </Routes>
          
        
        </header>
>>>>>>> topic/-changes
    </div>
    </Router>
  );
}

export default App;
