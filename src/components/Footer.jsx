import '../css/Footer.css'
import logo from '../assets/photos/logo.png'
import facebook from '../assets/photos/facebook.png'
import instagram from '../assets/photos/instagram.png'
import linkedin from '../assets/photos/linkedin.png'
import twitter from '../assets/photos/twitter.png'

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
         <img src={facebook} alt="" />
         <img src={instagram} alt="" />
         <img src={linkedin} alt="" />
         <img src={twitter} alt="" />
        </div>
        </div>
    </footer>
  )
}

export default Footer;
