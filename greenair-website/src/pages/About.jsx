import React from 'react';
import image from '../images/leaf pic.jpg'
import '../pages/about.css'
import '../Socials_component/Socials.css'
import Icons from "../Socials_component/Socials.jsx"
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Form from 'react-bootstrap/Form';
// import {
//   Link, renderMatches, 
// } from "react-router-dom";


function  About () {
    return (
        <div className='gridContain'>
        <div style={{padding:'10px'}}>
<h1 style={{textAlign:'center', fontFamily:'Jazz LET, fantasy',position:'relative', left:'100px'}}>Our Mission</h1>
<p style={{textAlign:'center', fontFamily:'Georgia, serif', fontWeight: 'bold', fontSize: '100', maxWidth: '50%', position:'relative', left:'290px'}}>
We are professionals dedicated to improving the health and quality of life for billions of people worldwide, by providing the world with the most accurate and actionable Air-Quality data .
let's together rebuild our world to be better, 
let's make this earth green with various trees 
and plants that are around us. 
So that for the sake of this success, start with small things first, let's plant together, reforest, reforest 
and so on for comfort. our earth let's protect our earth</p></div>
<img src={image} width="700" height="300" style={{position:'relative', left:'10px'}}></img>
<img src={require('../images/rebuild the earth pic.png')} width="400" height="300" style={{position:'relative', left:'250px'}}></img>
<div style={{padding:'10px'}}>
<h1 style={{textAlign:'center', padding:'10px', fontFamily:'Jazz LET, fantasy' }}>Protect and take care of the earth</h1>
<p style={{textAlign:'center', maxWidth: '30%', position:'relative', left:'360px', fontFamily:'Georgia, serif', fontWeight: 'bold'}}>let's together rebuild our world to be better, let's make this earth green with various trees and plants that are around us for the sake of this. So that for the sake of this success, start with small things first, let's plant together, reforest, reforest and so on for comfort. our earth let's protect our earth</p></div>
<div style={{padding:'40px'}}>
<h1 style={{textAlign:'center', fontFamily:'Jazz LET, fantasy'}}>Take the Pledge. 
Be the Change</h1>
<p style={{textAlign:'center', maxWidth: '50%', position:'relative', left:'180px', fontFamily:'Georgia, serif', fontWeight: 'bold'}}>A car-Free day encourages motorists to give up their cars for a day. Organised events are held in some citites and countries. September 22nd is World Car Free Day. According to the washington post, this event promotes improvement of mass transit, cycling and walking, and the development of communities where jobs are closer to home and where shoppping is within walking distance. Studies showed that for short trips in cities, one can reach more quickly using a bicycle rather than using a car.</p></div>
<img src={require('../images/world car free pic.png')} width="400" height="300" style={{position:'relative', left:'300px'}}></img>

<div style={{textAlign:'center'}}><Icons></Icons></div>

</div>

    );
}


 
    
    
export default About;