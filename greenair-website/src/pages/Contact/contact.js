import * as React  from 'react';
import "../App.js.js"
// import './contact.css'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Form from 'react-bootstrap/Form';
// import {
//   Link, renderMatches, 
// } from "react-router-dom";
// import Icons from './Socials_component/Socials.js';
import { useState } from 'react';
import background from '../images/Contact.png'

export default function Contact() {
  const [data, setData] = useState({
    name:"",
    email:"",
    message:"",
  });

  const {name, email, message} = data

  const handleChange = e=> {
    setData({...data, [e.target.name]: e.target.value});
  };

  const handleSubmit = async e=> {
    e.preventDefault();

    try{
      const response = await fetch("https://v1.nocodeapi.com/habashi/google_sheets/RJGcUhyxeoSpDiHZ?tabId=Sheet1", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify([[name, email, message, new Date().toLocaleDateString()]])
      }
      );
      await response.json()
      setData({...data, name:'', email:'', message:''})
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div style={{
      backgroundImage: `url(${background})`,
      height:'100vh',
      width:'100%',
      backgroundSize: '100% 100%'
      
    }}>
    <form className="card shadow-lg mt-5 p-5 form" onSubmit={handleSubmit} style={{
      width:'80vh',
      position: 'relative',
      left: '1100px',
      top:'100px',
      padding:'5px'
  }}>
      <h3 className="TEXT-CENTRE MB-5">Talk to us!</h3>
      <div className="form-group">
        <label htmlFor='name'>Name</label>
        <input 
          type="text"
          className="form-control"
          name="name"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input
          type="text"
          className='form-control'
          name="email"
          autoComplete='off'
          value={email}
          onChange={handleChange}
        />
      </div>
      <div className='="form-group'>
        <label htmlFor='message'>Message</label>
        <textarea
          name="message"
          rows="5"
          className='form-control'
          value={message}
          onChange={handleChange}
        />
      </div>
      <div>
        <input type="submit" value="Submit" className="btn btn-primary" />
      </div>

    </form>
    
    </div>
    
  );  

  };
