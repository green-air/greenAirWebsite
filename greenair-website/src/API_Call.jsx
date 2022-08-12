// import { useEffect, useState } from 'react';

  
// window.onload=function(){
    

//     function getLatitude(postcode){
//             fetch(`https://api.postcodes.io/postcodes/${postcode}`)
//             .then(result => result.json())
//             .then(data => {
//                 console.log("data",data) 
//                 let x = (data['result']['latitude'])
//                 console.log (x);
//             })
            
//         } 
         
         
//     function getLongitude(postcode){
//         fetch(`https://api.postcodes.io/postcodes/${postcode}`)
//         .then(result => result.json())
//         .then(data => {
//             console.log("data",data) 
//             let x = (data['result']['longitude'])
//             console.log (x);
//         })
        
//     } 
    
    
    
//     var postcode = document.getElementById("input_postcode");

//     //  function inputLength() {
//     //     return postcode.length;
//     // }

//     function logAfterClick() {
//         input_postcode = (String(postcode.value)).replace(" ", "").toUpperCase();
//         console.log(input_postcode);
//         console.log(getLatitude(input_postcode));
//         console.log(getLongitude(input_postcode));      
//     }

//     var lat = getLatitude(input_postcode);
//     var lon = getLongitude(input_postcode);
//     console.log(lat);
//     console.log(lon);
    
//     // function logAfterKeypress(event) {
//     //     if (inputLength() > 0 && event.keyCode === 13) {
//     //         input = input.replace(" ", "");
//     //         console.log('keypress function ran');
//     //         console.log(input);
//     //     }
//     // }
//     var submitButton = document.getElementById("submitbutton");
//     submitButton.addEventListener("click", logAfterClick)
//     // postcode.addEventListener("keypress", logAfterKeypress) I'd like to also add the same functionality when pressing enter but just wanted to sort the click first
    
    

    
       
        
    
    
//     // function getAQI(latitude=getLatitude(input_postcode), longitude=getLongitude(input_postcode)) {
        

//     //     const options = {
//     //     method: 'GET',
//     //     url: 'https://air-quality.p.rapidapi.com/forecast/airquality',
        
//     //     headers: {
//     //         'X-RapidAPI-Key': '8987017ad2msh1ed6cf9be42e16bp135d26jsnafe82dd68e11',
//     //         'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
//     //     }
//     //     };

//     //     fetch(`https://air-quality.p.rapidapi.com/forecast/airquality?lat=${lat}&lon=${lon}&hours=72`, options)
//     //         .then(response => response.json())
//     //         .then(response => console.log(response))
//     //         .catch(err => console.error(err));



//     // }
//     // console.log(getAQI())
     
    
// }


function API_Call() {
    console.log("calling api");
    let postcode = 'PA175DR';
    const CoordsFetch = fetch(
      `https://api.postcodes.io/postcodes/${postcode}`
    );
  
    Promise.all([CoordsFetch])
      .then(async (response) => {
        const CoordsResponse = await response[0].json();
        
        console.log(CoordsResponse);
  
      })
      .catch((err) => console.log(err));
    
    useEffect(() => {
      console.log(CoordsFetch());
    });
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
  
          {/* <MyForm /> */}
          <p>
            Latitude is
            Longitude is
          </p>
          <CoordsFetch />
        </header>
      </div>
    );
  }
    
  export default API_Call