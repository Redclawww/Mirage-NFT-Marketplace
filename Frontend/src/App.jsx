import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./screens/Home";
import AboutUs from "./screens/AboutUs";
import './App.css'
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import NftListing from "./screens/NftListing";
// import { AppProps } from "next/app";
// import { ThirdwebProvider } from "@thirdweb-dev/react";
// //import Navbar from "../components/Navbar";

// const activeChain = "Sepolia";

function App() {

  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/nftlisting" element={<NftListing />} /> 
        </Routes>
      </Router>          
  )
}

export default App;

/*function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      
        <Navbar />
        <Component {...pageProps} />
      
    </ThirdwebProvider>
  );
}*/


