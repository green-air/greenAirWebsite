import React from 'react'
import {
     Link, 
  } from "react-router-dom"
  import Icons from './Socials_component/Socials.js';
  

export default function Home() {
  return (
    <div className='mainPage'>Home

    <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
  <br></br>
  <Link to='/contact' >Contact Us</Link>
  <Icons/>
  </div>
  )
  
  
}
