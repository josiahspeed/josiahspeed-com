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
          <ul className="navbar-nav background-overlay ml-auto">
            <li className="nav-item active">
              <Link smooth={true} to="home" className="nav-link specialLinkColorsOne" href="#">Home<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="about" offset={-110} className="nav-link specialLinkColorsTwo" >About me</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="services" offset={-110} className="nav-link specialLinkColorsThree" href="#">Services</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="experience" offset={-110} className="nav-link specialLinkColorsFour" >Experience</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="portfolio" offset={-110} className="nav-link specialLinkColorsOneFive" >Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="contacts" offset={-110} className="nav-link specialLinkColorsSix" >Contact Me</Link>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  )
}

export default Navbar
