import { useState } from "react";

//as a convention, functions are defined before the return
function ForecastAPI() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const apikey = "96c726bc-ee97-4594-88b1-ec72b5364c7d";
    const url = `https://api.airvisual.com/v2/nearest_city?lat=${inputs.latitude}&lon=${inputs.longitude}&key=${apikey}`;
    console.log(url);

    let myObject = await fetch(url);
    let myText = await myObject.json();
    let pollution = JSON.stringify(myText.data.current.pollution);
    let weather = JSON.stringify(myText.data.current.weather);
    let pollutioncontainer = document.getElementById("editThisPleaseDOM");
    pollutioncontainer.innerHTML = `<h3>here is pollution data:</h3> <p1>${pollution}</p1>`;
    let weathercontainer = document.getElementById("editThisPleaseDOM2");
    weathercontainer.innerHTML = `<h3>here is weather data:</h3> <p1>${weather}</p1>`;
  }

  //this is the HTML that will be returned
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Latitude:
          <input
            type="text"
            name="latitude"
            value={inputs.latitude || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Longitude:
          <input
            type="text"
            name="longitude"
            value={inputs.longitude || ""}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>
        <section id="editThisPleaseDOM"></section>
        <section id="editThisPleaseDOM2"></section>
      </div>
    </div>
  );
}

export default ForecastAPI;