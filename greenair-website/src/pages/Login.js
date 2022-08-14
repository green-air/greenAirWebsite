import React, { useState, } from "react";
import "../pages/Login.css"
import LoginForm from "./LoginForm.js"
import "../App.js"
import Icons from "../Socials_component/Socials.jsx"

function Login() {
    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }
    // this is proof of concept and is not yet fully functional
    // const [setUser] = useState({ name: '"', email: "" });
    const [error] = useState("");

    const Login = details => {
        console.log(details);
        if (details.email === adminUser.email && adminUser.password)
            console.log("logged in");
        else {
            console.log("details do not match")
                ;
        }
    }
    // this is proof of concept and is not yet fully functional
    // const Logout = () => {
    //     setUser({ name: "", email: "" });
    // }
    return (
        <div className="LoginForm">
            <LoginForm Login={Login} error={error}
            />
            <div className="socials">
                <Icons />
            </div>

        </div>)
}

export default Login; 