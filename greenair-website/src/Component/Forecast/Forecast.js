import logo from '../logo.svg';
import '../App.css';

import Icons from '../../Components/Socials_component/Socials.jsx';

import React from 'react';



function Forecast() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is the forecast page!
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