import { ConnectWallet } from '@thirdweb-dev/react'
import '../css/Navbar.css'
import logo from '../assets/photos/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
    <img src={logo} alt="Logo" />
    <ul>
        <Link to='/' style={{ textDecoration: 'none' }}><li>Home</li></Link>
        <Link to='/nftlisting' style={{ textDecoration: 'none' }}><li>Marketplace</li></Link>
        <Link to='/aboutus' style={{ textDecoration: 'none' }}><li>About us</li></Link>
        <li><ConnectWallet /></li>
        <Link to='/login' style={{ textDecoration: 'none' }}><li><button>Login</button></li></Link>
        <Link to='/signup'><li><button>Signup</button></li></Link>
    </ul>
    </nav>
  )
}

export default Navbar
