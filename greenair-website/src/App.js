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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Navigation/Layout.jsx";
import Home from "./pages/Home.jsx";
import Forecast from "./pages/Forecast.jsx";
import About from "./pages/About.jsx";
import NoPage from "./pages/NoPage.jsx";
import Contact from "./pages/Contact.js";
import Login from "./pages/Login.js"
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
            <Route path="/Contact" element={<Contact />} />
            <Route path= "/Login" element={<Login/>}/>
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

//ReactDOM.render(<App />, document.getElementById("root"));
