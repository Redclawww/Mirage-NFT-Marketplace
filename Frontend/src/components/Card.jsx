import '../css/Card.css'
import genie from '../assets/photos/genie.jpg'
const Card = () => {
  return (
    <div className='Card'>
        <img src={genie} alt="" />
        <div className='.card-text' >
          <h3>Dino House - Genie</h3>
          
           <h3> 0.0ETH</h3>
              
          <button>BUY</button>        
        </div>
    </div>
  )
}

export default Card