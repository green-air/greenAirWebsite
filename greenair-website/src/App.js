// Navbar functional imports: -------------------------------------------------
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Navigation/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.js";
import Login from "./pages/Login.js";
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
            <Route path="/About" element={<About />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}