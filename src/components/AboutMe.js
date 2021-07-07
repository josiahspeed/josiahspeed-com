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
           I am a software developer and application designer with 5+ years experience creating, maintaing, and designing software solutions professionally.
          </p>
          <p>
          At my role at Progeny Genetics I worked as a front-end focused full-stack
software engineer, and quickly took on the role of lead UI/UX developer. In
this role I successfully bringing our entire software suite into a standardized
UI kit. I also led the design of three software modules that were successfully
added to our software kit during my tenure there.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
