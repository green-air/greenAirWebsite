import React from "react";
// import './Home.css';
// import "../App.css";

// import background from"../images/Homepage.jpg";
import { useEffect } from 'react';
import Socials from "../Socials_component/Socials.jsx";
//import ForecastLocationForm from "./ForecastPostcodeForm.jsx";
//import ForecastPostcode from "./ForecastPostcode.jsx";
import logo from '../images/logo.png';
// import ForecastLocationForm from "./ForecastPostcodeForm.jsx";
// import ForecastForm from './ForecastForm.jsx';
// import ForecastAPI from "./ForecastAPI.jsx";
// import ForecastPostcode from "./ForecastPostcode.jsx";
import ForecastAPI from "./ForecastAPI";


//Weather Widget Code//
const x = `<html> <script id='myScript'>
(function(d, s, id) {
    if (d.getElementById(id)) {
        if (window.__TOMORROW__) {
            window.__TOMORROW__.renderWidget();
        }
        return;
    }
    const fjs = d.getElementsByTagName(s)[0];
    const js = d.createElement(s);
    js.id = id;
    js.src = "https://www.tomorrow.io/v1/widget/sdk/sdk.bundle.min.js";

    fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'tomorrow-sdk');
</script>

<div class="tomorrow"
   data-location-id="122795,000032,064500"
   data-language="EN"
   data-unit-system="METRIC"
   data-skin="dark"
   data-widget-type="current6"
   style="padding-bottom:22px;position:relative;"
>
  <a
    href="https://www.tomorrow.io/weather/"
    rel="nofollow noopener noreferrer"
    target="_blank"
    style="position: absolute; bottom: 0; transform: translateX(-50%); left: 50%;"
  >
    <img
      alt="Powered by Tomorrow.io"
      src="https://weather-website-client.tomorrow.io/img/powered-by-tomorrow.svg"
      width="120"
      height="15"
    />
  </a>
</div></html>`;

// The following line was added to remove a warning which displays when running npm start
/*eslint-disable no-eval */

//Main Body of page//
function Home() {
  useEffect (() => {
    const script = document.getElementById('myScript').innerHTML;
    window.eval(script);
  }, [])
    return (
//Background image//
      <div>       
        <div
        className= "bg">
           <img src={logo} className="App-logo" alt="logo"></img>
        <div className="App">
{/* Form input and DOM output will be rendered using this component: */}
        <ForecastAPI />
          <div
          style={{
            padding: "10px",
            position: "relative",
            left: "380px",
            top: "30px",}}
        ></div>
        <div
          style={{
            padding: "10px",
            position: "relative",
            left: "400px",
            top: "800px",
          }}
        >
          <div
            style={{ left: "700px" }}
            dangerouslySetInnerHTML={{ __html: x }}
          ></div>
         </div>
        </div>
          <Socials />
        </div>
        
      </div>
    );
  }

export default Home;