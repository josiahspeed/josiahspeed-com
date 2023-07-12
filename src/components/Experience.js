import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience col-12">
      <div className="d-flex justify-content-center my-5">
        <h1>Experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Edgelink</h3>
            <h2>UI/UX Designer & Developer</h2>
            <h2>October 2020 - Current</h2>
            <ul className="workDescriptions">
              <li>Fully re-designed UI/UX of web application and oversaw its implementation</li>
              <li>Worked as a front-end developer making UI changes to client’s applications</li>
              <li>Completed web projects as lead designer for applications in the UK</li>
              <li>Analyzed and identified UI/UX bottlenecks and generated solutions to resolve them</li>
              <li>Planned and architected site migrations for client applications</li>
            </ul>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Progeny Genetics</h3>
            <h2>Lead UI/UX Designer & Front-End Develope</h2>
            <h2>August 2017 - March 2020</h2>
            <ul className="workDescriptions">
              <li>Successfully created and managed front-end React.js components for Progeny Spring Boot application</li>
              <li>Lead UI/UX designer - Designed click through animations, wireframes, and SCRUM task for new application features</li>
              <li>Debugged, updated, and wrote test for features across entire java based technology stack that were successfully deployed to Jenkins server</li>
              <li>Worked hand and hand with development and production teams to improve user experience</li>
              <li>Oversaw Checkmarx implementation over all Progeny applications</li>
              <li>Created and implemented a standardized UI kit for dev team</li>
            </ul>  
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Rayel Development</h3>
            <h2>Front-End Developer & UI Designer</h2>
            <h2>March 2017 - September 2017</h2>
            <ul className="workDescriptions">
              <li>Designed application mockups, wireframes, and animations for clients</li>
              <li>Created websites for clients and added features to existing applications in React</li>
              <li>Conducted UI/UX consulting of clients application</li>
              <li>Setup and managed clients SEO using Google Analytics</li>
              <li>Bootstrapped clients sites for better mobile optimization</li>
            </ul>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Automated Controls</h3>
            <h2>UI/UX Designer</h2>
            <h2>June 2016 - March 2017</h2>
            <ul className="workDescriptions">
              <li>Conducted UX research that successfully reduced user errors</li>
              <li>Successfully integrated UI designs with PLC program</li>
              <li>Principle UI designer for Hillsborough Water automation project</li>
            </ul> 
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>University of South Florida</h3>
            <h2>Application Support Engineer</h2>
            <h2>May 2014 - June 2016</h2>
            <ul className="workDescriptions">
              <li>Provided University application support to USF Physical Plant Staff</li>
              <li>Co-created VBA inventory program that significantly improved IT inventory problems</li>
              <li>Provided VB.net support for University video surveillance program</li>
            </ul>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h1>EDUCATION</h1>
            <h3>University of South Florida</h3>
            <h2>BS in Information Technology</h2>
            <h2>May 2017</h2>
            <ul className="workDescriptions">
              <li>Senior development project: built application for helping users find clinical trials hosted on the United States clinical trials database</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;
