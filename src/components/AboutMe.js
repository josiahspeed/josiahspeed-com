import React from "react";
import author from "../Me&Maeve.png";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
           I am a software developer and application designer with 7+ years experience creating, maintaing, and designing software solutions professionally.
          </p>
          
        </div>
      </div>
    </div>
  )
}

export default AboutMe
