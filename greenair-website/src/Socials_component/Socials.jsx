import {AiFillInstagram} from "react-icons/ai";
import {FaTelegram} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {AiOutlineWhatsApp} from "react-icons/ai";
import React from 'react';
import './Socials.css';

class Icons extends React.Component {
    render() {
      return (<div className="socials">
      
      <a className = "footer-icon" href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebook /></a>
      <a className = "footer-icon"href = "https://telegram.org/" target="_blank" rel="noreferrer"><FaTelegram /></a>
      <a className = "footer-icon"href="https://whatsapp.com" target="_blank" rel="noreferrer"><AiOutlineWhatsApp /></a>
      <a className = "footer-icon"href = "https://instagram.com" target="_blank" rel="noreferrer"><AiFillInstagram /></a>
      </div>)
    }
  }

export default Icons;