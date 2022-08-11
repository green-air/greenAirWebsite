import React, { useState } from "react"
// import "./ForecastForm.css"

function ForecastForm() {
  const [state, setState] = useState({    
    lat: "",    
    lon: "",  
    })
  const handleChange = e => {
    setState({      
        ...state,      [e.target.input]: e.target.value,    })  }

  return (
    <div>
      <h1>Please input the latitude and longitude:</h1>
      <form>
      <label>
        Lat
        <input type="text" name="lat" />
      </label>
      <label>
        Lon:
        <input type="text" name="lon" />
      </label>
      <input type="submit" value="Submit" />
      </form>
    <h5>
        Location: {state.lat} {state.lon}      
    </h5>
    </div>
  )
}

export default ForecastForm