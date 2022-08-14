import React, { useState, } from "react";
import "../pages/login.css"
import LoginForm from "./LoginForm.js"
import "../App.js"
import Icons from "../Socials_component/Socials.jsx"
import background from"../images/Homepage.jpg";
import image from '../images/logo(light).png'

function Login () {
    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }
    const [user, setUser] = useState({name:'"', email:""});
    const [error, setError]= useState("");



    
    const Login = details => {
        console.log(details);
        if (details.email === adminUser.email &&adminUser.password)
        console.log("logged in");
        else {console.log("details do not match")
    ;}
    }
    const Logout = () => {
        setUser({name:"", email:""});
    }
    return (
         <div className= "App">
           {/* {(user.email !=="") ? (
        //      <div className="welcome"><h2> Welcome,<span>{user.name}</span></h2>
        //      <button onClick={Logout}>Logout</button>
        // </div>
        // ) : ( */}
             <LoginForm Login={Login} error ={error} 
             /> 
<div className="socials">
        <Icons />
        </div>
        
        </div>)
        
    }
export default Login; 