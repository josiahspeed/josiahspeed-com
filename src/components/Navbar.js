import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-scroll";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import navMenuBtn from "../images/navMenuBtn.png";
const Navbar = () => {
 
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">

        <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..." /></a>
        <button className="navMenuBtn"  type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <img src={navMenuBtn}></img>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active background-overlay">
              <Link smooth={true} to="home" className="nav-link" href="#">Home<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item background-overlayTwo">
              <Link smooth={true} to="about" offset={-110} className="nav-link" href="#">About me</Link>
            </li>
            <li className="nav-item background-overlayThree">
              <Link smooth={true} to="services" offset={-110} className="nav-link" href="#">Services</Link>
            </li>
            <li className="nav-item background-overlayFour">
              <Link smooth={true} to="experience" offset={-110} className="nav-link" href="#">Experience</Link>
            </li>
            <li className="nav-item background-overlayFive">
              <Link smooth={true} to="portfolio" offset={-110} className="nav-link" href="#">Portfolio</Link>
            </li>
            <li className="nav-item background-overlaySix">
              <Link smooth={true} to="contacts" offset={-110} className="nav-link" href="#">Contact Me</Link>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  )
}

export default Navbar
