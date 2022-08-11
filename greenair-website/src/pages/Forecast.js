import logo from '../logo.svg';
import '../App.css';

import Icons from '../Socials_component/Socials.jsx';

import React from 'react';

import APIPage from '../API_call2.jsx' 

function Forecast() {
  return (
    <div className="App">
      <APIPage />
      <Icons />
    </div>
  );
}

export default Forecast;