import { useState } from "react";
import './ForecastAPI.css'

//as a convention, functions are defined before the return
function ForecastAPI() {
  const [inputs, setInputs] = useState({}); //initialise these two variables to exist and have state

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("submit button clicked")

    // postcode API call
    const url0 = `https://api.postcodes.io/postcodes/${inputs.postcode}`
    let myObject0 = await fetch(url0);
    let myText0 = await myObject0.json();

    //manipulate postcode API call returned data
    let postcodeLatitude = JSON.stringify(myText0.result.latitude);
    let postcodeLongitude = JSON.stringify(myText0.result.longitude);

    // forecast API call
    const apikey = "96c726bc-ee97-4594-88b1-ec72b5364c7d";
    const url1 = `https://api.airvisual.com/v2/nearest_city?lat=${postcodeLatitude}&lon=${postcodeLongitude}&key=${apikey}`;
    let myObject1 = await fetch(url1);
    let myText1 = await myObject1.json();
    //manipulate forecast API call returned data
    let pollutionAqius = JSON.stringify(myText1.data.current.pollution.aqius);
    let pollutionMainus = JSON.stringify(myText1.data.current.pollution.mainus).replace(/[^\w ]/g, '');

    let weatherTemp = JSON.stringify(myText1.data.current.weather.tp);
    let weatherAtmosP = JSON.stringify(myText1.data.current.weather.pr);
    let weatherHumidity = JSON.stringify(myText1.data.current.weather.hu);
    let weatherWindSpd = JSON.stringify(myText1.data.current.weather.ws);
    let weatherWindDir = JSON.stringify(myText1.data.current.weather.wd);

    //write object/data to the DOM: explanation of the API data
    let pollutionContainer = document.getElementById("pollutionDataOutput");
    pollutionContainer.innerHTML = `<p>Air Quality Index - <br> AQI value based on US EPA standard: ${pollutionAqius}</p>
                                    <p>Main pollutant for US AQI: ${pollutionMainus}</p>`;

    let weatherContainer = document.getElementById("weatherDataOutput");
    weatherContainer.innerHTML = `<p>Temperature: ${weatherTemp}°C</p>
                                  <p>Atmospheric pressure: ${weatherAtmosP} hPa</p>
                                  <p>Humidity: ${weatherHumidity}%</p>
                                  <p>Wind speed: ${weatherWindSpd} m/s</p>
                                  <p>Wind direction, as an angle of 360° (N=0, E=90, S=180, W=270): ${weatherWindDir}°</p>`;

    let postcodeContainer = document.getElementById("postcodeDataOutput");
    postcodeContainer.innerHTML = `<p>The GPS co-ordinates of your forecast are: ${postcodeLatitude}, ${postcodeLongitude}</p>`;
  }

  const [{ items }, setItems] = useState({ items: [] });
  
  const addItem = () => {
    items.push(<div style={{ padding: '10px' }}>
{/* Output the forecastAPI data in a responsive white box: */}
      <div className="white-box">
        <section id="pollutionDataOutput"></section>
        <section id="weatherDataOutput"></section>
        <section id="postcodeDataOutput"></section>
      </div>
    </div>);
    setItems({ items: [...items] });
  };

  //this is the HTML that will be returned
  return (
    <div>
      {/* form input for postcode input  */}
      <form id="zvalue" onSubmit={handleSubmit}>
        <label>
          Postcode:
          <input
            type="text"
            name="postcode"
            value={inputs.postcode || ""} //default text is nothing, if there is something added, it will write this text to 'inputs.latitude'
            onChange={handleChange}
          //if there is any text added in this input tag, execute the function named 'handleChange'
          />
        </label><br></br>
        <input id="fcbutton" type="submit" value="Submit" onClick={addItem} />
      </form>
      {/* Output section of the website */}
      <div>
        {items}
      </div>
    </div>
  );
}

export default ForecastAPI;
