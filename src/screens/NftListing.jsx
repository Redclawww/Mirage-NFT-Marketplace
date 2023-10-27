import "../css/NftListing.css";
import logo from '../assets/photos/logo.png'
import Footer from "../components/Footer";

const NftListing = () => {
  return (
    <div className="nft-marketplace">
      <div className="page-layout">
        <div className="content-left">
            <img src={logo} alt="" />
            <div className="marketplace">  
                    <li className="sidebar-heading">Marketplace</li>             
                    <li>Market</li>
                    <li>Active Bid</li>
                    <li>Saved</li>               
            </div>
            <div className="account">
            <li className="sidebar-heading">Account</li>   
                    <li>My Collection</li>
                    <li>Wallet</li>
                    <li>History</li>
                    <li>Settings</li>
            </div>
        </div>
        <div className="content-middle">
          <div className="topbar">
            <input type="text" placeholder="search"/>
            <div className="wallet">1234 ETH</div>
            <div className="notification"></div>
          </div>
        </div>
        <div className="content-right"></div>
      </div>
      <Footer />
    </div>
  );
};

export default NftListing;
