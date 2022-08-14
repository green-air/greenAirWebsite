// function ForecastPostcode() {
// //postcode API
//   async function getText(url) {
      
//       let data = await fetch(url);
//       let object = await data.json();
//       let text0 = JSON.stringify(object.result.latitude);
//       let latitudeContainer = document.getElementById("latitude");
//       latitudeContainer.innerHTML = `<h3>here is the latitude:</h3> <p1>${text0}</p1>`;
//       let text1 = JSON.stringify(object.result.longitude);
//       let longitudeContainer = document.getElementById("longitude");
//       longitudeContainer.innerHTML = `<h3>here is the longitude:</h3> <p1>${text1}</p1>`;
//     }

// //    const postcode = "PA175DR";
  
//     const url = `https://api.postcodes.io/postcodes/${postcode}`
//     getText(url);
//     return (
//       <div>
//         <section id="latitude">
//           <h1>
//             notice how this text does not permanently appear because the DOM
//             writes to the section instead
//           </h1>
//         </section>
//         <section id="longitude">
//           <h1>
//             notice how this text does not permanently appear because the DOM
//             writes to the section instead
//           </h1>
//         </section>
//       </div>
//     );
//   }
  
//   export default ForecastPostcode;