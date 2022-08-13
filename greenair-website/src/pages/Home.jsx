import React from "react";
import './Home.css';
import background from"../images/Homepage.jpg";
import { useEffect } from 'react';
import "../App.css";
import Socials from "../Socials_component/Socials.jsx";


// import ForecastLocationForm from "./ForecastPostcodeForm.jsx";
// import ForecastForm from './ForecastForm.jsx';
// import ForecastAPI from "./ForecastAPI.jsx";
// import ForecastPostcode from "./ForecastPostcode.jsx";
import APIPollutionWeather from "./APIPollutionWeather";

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
      <div style={{
        backgroundImage: `url(${background})`,
        height: "100vh",
        width: "100%",
        backgroundSize: "100% 100%",
      }}>
        {/* <h3>Home</h3> */}
        <img alt="greenair logo" src={require('../images/logo(light).png')} height="120 px"/>
        <div
        
      >
        <div className="App">
        <APIPollutionWeather />
          <div
          style={{
            padding: "10px",
            position: "relative",
            left: "380px",
            top: "30px",
          }}
        >
          <div
            style={{ alignSelf : "auto" }}
            dangerouslySetInnerHTML={{ __html: x }}
          ></div>
        </div>
          <Socials />
        </div>
        
      </div>
    </div>
  );
}

export default Home;