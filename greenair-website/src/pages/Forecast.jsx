import '../App.css';
import background from"../images/2022-07-28 1.jpg";
import Icons from '../Socials_component/Socials.jsx';
import './Forecast.css'
import React from 'react';


import ForecastLocationForm from './ForecastPostcodeForm.jsx';
// import ForecastForm from './ForecastForm.jsx';
import ForecastAPI from './ForecastAPI.jsx';
import ForecastPostcode from './ForecastPostcode.jsx'

function Forecast() {
  return (
    <div style = {{height:"100vh"}} className="App">
      <ForecastLocationForm />
      <ForecastAPI />
      <ForecastPostcode />
      <Icons />
    </div>
  );
}

export default Forecast;