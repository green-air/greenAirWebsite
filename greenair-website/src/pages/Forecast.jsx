import '../App.css';

import Icons from '../Socials_component/Socials.jsx';

import React from 'react';


import ForecastLocationForm from './ForecastPostcodeForm.jsx';
// import ForecastForm from './ForecastForm.jsx';
import ForecastAPI from './ForecastAPI.jsx';
import ForecastPostcode from './ForecastPostcode.jsx'

function Forecast() {
  return (
    <div className="App">
      <ForecastLocationForm />
      <ForecastAPI />
      <ForecastPostcode />
      <Icons />
    </div>
  );
}

export default Forecast;