import React from 'react';

import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';

//since react v18 this is required instead of "from 'react-dom'"
import ReactDOM from "react-dom/client";



//yusuf commented this out because of adding this in 'Navbar imports' section and consequent error message:
//      Parsing error: Identifier 'ReactDOM' has already been declared. (27:7)
//import ReactDOM from "react-dom/client";

// Old react-router-dom imports
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Forecast from "./Forecast.js";

// I dont know what this is
// import ReactBootstrapPage, {
//   testNamedExport,
//   testNamedExportTwo,
// } from "./react_library_walkthrough/reactBootstrap";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";


// const Routing = () => {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>

//                 <Link to="/">Home</Link>
//                 </li>
//                 <li>

//                 <Link to="forecast">Forecast</Link>
//               </li>
//           </ul>
//         </nav>

//       <Routes>
//         <Route exact path="/" element={<App/>} />
//         <Route exact path="/forecast" element={<Forecast/>} />

//       </Routes>
//       </div>
//     </Router>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// require('react-dom');
// window.React2 = require('react');
// console.log(window.React1 === window.React2);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
