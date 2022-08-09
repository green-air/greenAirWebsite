import {AiFillInstagram} from 'react-icons/ai';
import {FaTelegram} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {AiOutlineWhatsApp} from 'react-icons/ai';
import React from 'react';

class Icons extends React.Component {
    render() {
      return (<div>
      <FaFacebook />
      <FaTelegram />
      <AiOutlineWhatsApp />
      <AiFillInstagram />
      </div>)
    }
  }

export default Icons;