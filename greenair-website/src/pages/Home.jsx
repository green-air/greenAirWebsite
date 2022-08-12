import React from 'react';
import './Home.css';
import background from"../images/Homepage.jpg";
import { useEffect } from 'react';

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
      width="140"
      height="15"
    />
  </a>
</div></html>`

//Main Body of page//
function Home() {
useEffect (()=>{
  const script = document.getElementById('myScript').innerHTML;
  window.eval(script);
}, [])
    return (
      //Background image//
     <div>
      <h3>Home</h3>
     <div style={{ backgroundImage: `url(${background})`,
      height:'100vh',
      width:'100%',
      backgroundSize: '100% 100%' }} > 
      <div style={{padding:'10px', position:'relative', left:'500px', top:'700px'}}><div style={{left:'700px'}} dangerouslySetInnerHTML={{__html:  x}}  ></div></div>
      </div> 
</div>   
    );
}
export default Home;


