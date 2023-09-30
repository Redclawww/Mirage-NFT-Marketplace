import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/Footer.css'
import logo from '../assets/photos/logo.png'

const Footer = () => {
  return (
    <footer>
    <div className="logo-div">
    <img src={logo} alt='Logo' />
     <p>Lorem ispum is simply dummy text of <br />printing and typesetting industry</p>
    </div>
     <div className='box1'>
        <p id="start">Mirage</p>
        <p>Explore</p>
        <p>How it works</p>
        <p>Create</p>
        <p>Support</p>
     </div>
     <div className='box2'>
        <p id="start">Community</p>
        <p>Discussion</p>
        <p>Docs</p>
        <p>Contact</p>
        </div>
     <div className='box3'>
        <p id="start">Social Media</p>
        <div className="icons">
        <FontAwesomeIcon icon="fa-brands fa-facebook" />
        <FontAwesomeIcon icon="fa-brands fa-instagram" />
        <FontAwesomeIcon icon="fa-brands fa-pnkedin" />
        <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
        </div>
        </div>
    </footer>
  )
}

export default Footer;
