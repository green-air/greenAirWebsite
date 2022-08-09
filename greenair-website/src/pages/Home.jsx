import React from 'react';
import './Home.css';

function Home() {
    return (
        <div>
            <h1 
                align="center"
                id="blinking">
                    Please be patient, this project website is...
                </h1>
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Under-Construction-Bulldozer.gif" 
                alt="bulldozer gif" 
                width="100%" />
            <img 
                align="center"
                width="100%"
                src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Under-construction5.gif" 
                alt="under construction gif" />
        </div>
    );
}

export default Home;