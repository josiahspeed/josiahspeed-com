import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";
import sample from '../images/sample.mp4';


const Header = () => {
  return (
    <div id="home">
      <div className="typed-text-container">
        <div className="col-12">
          <Typed
              className="typed-text"        
              strings= {["Hello,^1000\n My Name is Josiah Speed"]}
              typeSpeed= {65}
              backSpeed= {0}
              stop           
            />      
        </div>
        <div className="col-12">              
          <Typed
            className="typed-text"          
            strings={["Front End Developer", "UX Designer", "Dog Dad"]}
            typeSpeed={65}
            backSpeed={60}
            loop
          />
        </div>
      </div>
      <video className='header-wraper video-class' autoPlay loop muted>
        <source src={sample} type='video/mp4' />
      </video>
      <div className="col-lg-12 btn-main-container">
        {/*   <Link smooth={true} to="contacts" offset={-110} className="btn-main-offer background-overlay">contact me</Link> */}
      </div>
    </div>
  )
}

export default Header;
