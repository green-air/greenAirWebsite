import * as React  from 'react';
import "../App.js"
import './contact.css'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Form from 'react-bootstrap/Form';
// import {
//   Link, renderMatches, 
// } from "react-router-dom";
import Icons from "../Socials_component/Socials.jsx"
import { useState } from 'react';
import background from '../images/Contact.png'

// Contact us Form //
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
      left: '600px',
      top:'100px',
      height:'60vh',
      backgroundImage:'linear-gradient(#3C4A3F, #9EAFA2, #8BC398)',
      borderRadius:'90px 60px'   
  }}>
      <h3 className="TEXT-CENTRE MB-5" style={{
        color:'white'
      }}>Talk to us!</h3>
      <div className="form-group" style={{
        color:'white'
      }}>
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
      <div className='form-group' style={{
        color:'white'
      }}>
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
      <div className='="form-group' style={{
        color:'white'
      }}>
        <label htmlFor='message'>Message</label>
        <textarea
          name="message"
          rows="5"
          className='form-control'
          value={message}
          onChange={handleChange}
        />
      </div>
      <div style={{textAlign:'center', padding:'45px'}}>
        <input type="Send" value="Send" className="btn btn-primary"  style={{backgroundColor:''}} id='button'/>
      </div>
    </form>
    <div><Icons /></div>
    </div>  
    
  );  

  };
