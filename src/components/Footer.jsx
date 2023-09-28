import React from 'react'
import '../css/Footer.css'

const Footer = () => {
  return (
    <footer>
    <div id='box1'>
    <img src={logo} alt='Logo' />
     <p>Lorem ispum is simply dummy text of printing and typesetting industry</p>
    </div>
     <div id='box2'>
     <ul>
        <li>Mirage</li>
        <li>Explore</li>
        <li>How it works</li>
        <li>Create</li>
        <li>Support</li>
     </ul>
     </div>
     <div id='box3'>
     <ul>
        <li>Community</li>
        <li>Discussion</li>
        <li>Docs</li>
        <li>Contact</li>
        </ul>
     </div>
     <div id='box4'>
     <ul>
        <li>Social Media</li>
        <li><FontAwesomeIcon icon="fa-brands fa-facebook" /></li>
        <li><FontAwesomeIcon icon="fa-brands fa-instagram" /></li>
        <li><FontAwesomeIcon icon="fa-brands fa-linkedin" /></li>
        <li><FontAwesomeIcon icon="fa-brands fa-x-twitter" /></li>
        </ul>
     </div>

     
    </footer>
  )
}

export default Footer;
