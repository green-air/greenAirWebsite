import { useState } from "react";

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
    let pollution = JSON.stringify(myText1.data.current.pollution);
    let weather = JSON.stringify(myText1.data.current.weather);

//write object/data to the DOM
    let postcodeContainer = document.getElementById("postcodeDataOutput");
    postcodeContainer.innerHTML = `<h3>here is postcode data:</h3> <p1>${postcodeLatitude}, ${postcodeLongitude} </p1>`;
    let pollutionContainer = document.getElementById("pollutionDataOutput");
    pollutionContainer.innerHTML = `<h3>here is pollution data:</h3> <p1>${pollution}</p1>`;
    let weatherContainer = document.getElementById("weatherDataOutput");
    weatherContainer.innerHTML = `<h3>here is weather data:</h3> <p1>${weather}</p1>`;
  }
  //this is the HTML that will be returned
  return (
    <div>
  {/* form input for postcode input  */}
      <form onSubmit={handleSubmit}>
      <label>
          Postcode:
          <input
            type="text"
            name="postcode"
            value={inputs.postcode || ""} //default text is nothing, if there is something added, it will write this text to 'inputs.latitude'
            onChange={handleChange}   //if there is any text added in this input tag, execute the function named 'handleChange'
          />
        </label><br></br>
        <input id="fcbutton" type="submit" value="Submit" />
      </form>
{/* Output section of the website */}
      <div>
        <section id="postcodeDataOutput"></section>
        <section id="pollutionDataOutput"></section>
        <section id="weatherDataOutput"></section>
      </div>
    </div>
  );
}

export default ForecastAPI;