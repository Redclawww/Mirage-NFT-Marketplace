import React from 'react'
import '../css/Navbar.css'
import logo from '../assets/photos/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
    <img src={logo} alt="Logo" />
    <ul>
        <li>Home</li>
        <li>Marketplace</li>
        <li><Link to='/aboutus'>About us</Link></li>
        <li>More</li>
        <li><button>Login</button></li>
        <li><button>Signup</button></li>
    </ul>
    </nav>
  )
}

export default Navbar
