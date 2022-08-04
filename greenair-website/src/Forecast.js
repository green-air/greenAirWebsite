import logo from './logo.svg';
import './App.css';

import Icons from './Socials_component/Socials.js';

import React from 'react';



function Forecast() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
        <Icons />
        </header>
    </div>
  );
}

export default Forecast;
