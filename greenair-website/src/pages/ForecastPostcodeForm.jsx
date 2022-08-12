import { useState } from 'react';

//as a convention, functions are defined before the return
function ForecastLocationForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The postcode is: ${inputs.postcode}`);
  }

  //this is the HTML that will be returned
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Postcode:
        <input 
            type="text" 
            name="postcode" 
            value={inputs.postcode || ""} 
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
        </form>
    <p>Postcode: {inputs.postcode}</p>
  </div>
  )

}

export default ForecastLocationForm


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);