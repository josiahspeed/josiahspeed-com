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
            Hello! My name is Josiah, I enjoy spending my time as a software developer, UI/UX designer, musician, and outdoor enthusiast.
            On this site you can view my UI/UX portfolio, download my resume, and find me on social media!
           </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
