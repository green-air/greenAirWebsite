
import React, { useEffect } from "react";

function APIPage() {
  //   const lat = 50;
  //   const lon = 50;
  //   const key = "2bf08277-8b2c-4873-a808-0073964ad270";

  //   useEffect(() => {
  //     fetch(
  //       `https://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=${key}`
  //     ).then(async (response) => {
  //       const jsoncall = await response.json();
  //       const pollution = jsoncall.data.current.pollution;
  //       const weather = jsoncall.data.current.weather;
  //       console.log(pollution);
  //       console.log(weather);
  //     });
  //   }, []);

  //   return <div>test</div>;
  // }
  async function getText(url) {
    let myObject = await fetch(url);
    let myText = await myObject.json();
    let pollution = JSON.stringify(myText.data.current.pollution);
    let weather = JSON.stringify(myText.data.current.weather);
    let pollutioncontainer = document.getElementById("editThisPleaseDOM");
    pollutioncontainer.innerHTML = `<h3>here is pollution data:</h3> <p1>${pollution}</p1>`;
    let weathercontainer = document.getElementById("editThisPleaseDOM2");
    weathercontainer.innerHTML = `<h3>here is weather data:</h3> <p1>${weather}</p1>`;
  }

  const url =
    "https://api.airvisual.com/v2/nearest_city?lat=$50&lon=$50&key=2bf08277-8b2c-4873-a808-0073964ad270";
  getText(url);
  return (
    <div>
      <section id="editThisPleaseDOM">
        <h1>
          notice how this text does not permanently appear because the DOM
          writes to the section instead
        </h1>
      </section>
      <section id="editThisPleaseDOM2">
        <h1>
          notice how this text does not permanently appear because the DOM
          writes to the section instead
        </h1>
      </section>
    </div>
  );
}

export default APIPage;