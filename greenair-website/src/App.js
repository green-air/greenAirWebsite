// import logo from './logo.svg';
// import './App.css';


// import { Icons } from './Socials_component/Socials.jsx';

// import React from 'react';



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <Icons />
//         </header>
//     </div>
//   );
// }

//export default App;


// attempt 2 -----------------------------------------------------


// Navbar functional imports: -------------------------------------------------
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Navigation/Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import Forecast from "./Components/Forecast/Forecast.js";
import About from "./Components/About/About.jsx";
import NoPage from "./Components/No_page/NoPage.jsx";
import Contact from "./Components/Contact/contact.js";
import Login from "./Components/Login/Login.js";
// end navbar functional imports ----------------------------------------------

// Navbar style imports: -------------------------------------------------
import "bootstrap/dist/css/bootstrap.min.css";
// end Navbar style imports: -------------------------------------------------


export default function App() {
  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Forecast" element={<Forecast />} />
          <Route path="/About" element={<About />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));