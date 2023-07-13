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
            <h3>Phoenix Technologies</h3>
            <h2>Principal UX Designer</h2>
            <h2>December 2021 - February 2023</h2>
            <ul className="workDescriptions">
              <li>Created and oversaw the UI/UX for an enterprise big data project going to market in 2023</li>
              <li>Architected the front-end from tech stack level to UI designs</li>
              <li>Led meetings between stakeholders in order to generate project feedback</li>
              <li>Built Confluence and Jira setup for the frontend team</li>
              <li>Structured and conducted the frontend team interview process and made key hires</li>
              <li>Successfully developed the core company project for market release</li>
              <li>Created UI/UX E2E test coverage by adding Cypress.io to company projects</li>
            </ul>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Nike</h3>
            <h2>Senior Front-End Developer</h2>
            <h2>August 2021 - December 2021</h2>
            <ul className="workDescriptions">
              <li>Created React components based on UX design that utilized ecommerce data regarding inventory</li>
              <li>Built unit test coverage for the app using Jest</li>
              <li>Successfully achieved all goals for a timely product launch</li>
              <li>Collaborated with the UI/UX team to implement DDS (Design System) designs into reusable React components</li>
              <li>Added new UI testing coverage to the frontend using Jest.js</li>
            </ul>  
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Edgelink</h3>
            <h2>UI/UX Designer & Front-End Developer</h2>
            <h2>October 2020 - August 2021</h2>
            <ul className="workDescriptions">
              <li>Fully re-designed the UI/UX of a web application and oversaw its implementation</li>
              <li>Worked as a front-end developer, making UI changes to client's applications</li>
              <li>Completed web projects as the lead designer and developer for all UK web projects</li>
              <li>Analyzed and identified UI/UX bottlenecks and generated solutions to resolve those issues</li>
              <li>Planned and architected the Epiq React/Redux Epiq template site</li>
            </ul>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Progeny Genetics</h3>
            <h2>Lead UI/UX Designer</h2>
            <h2>August 2017 - March 2020</h2>
            <ul className="workDescriptions">
            <li>Successfully created and managed front-end React.js components for the Progeny Spring Boot Application</li>
              <li>Led UI/UX design efforts, including designing click-through animations, wireframes, and SCRUM tasks for new application features</li>
              <li>Debugged, updated, and wrote tests for features across the entire Java-based technology stack, which were successfully deployed to the Jenkins server</li>
              <li>Collaborated closely with development and production teams to improve the user experience</li>
              <li>Oversaw the implementation of Checkmarx across all Progeny applications</li>
              <li>Created and implemented a standardized UI kit for the development team</li>
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
              <li>Designed application mockups, wireframes, and animations for several small ecommerce businesses</li>
              <li>Created websites and added features to existing applications using React</li>
              <li>Successfully set up and managed clients' SEO using Google Analytics to boost customer interaction</li>
              <li>Bootstrapped clients' sites for better mobile optimization</li>
            </ul>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Automated Controls</h3>
            <h2>Lead UI/UX Designer</h2>
            <h2>June 2016 - March 2017</h2>
            <ul className="workDescriptions">
              <li>Principal UI designer for the Hillsborough Water automation project</li>
              <li>Successfully integrated UI designs with PLC programming</li>
              <li>Conducted UX research that successfully reduced user errors</li>
              <li>Performed human behavioral/interaction research to reduce user-side errors</li>
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
              <li>Provided VB.net support for the University video surveillance program</li>
              <li>Conducted maintenance and hardware installations on USF servers</li>
            </ul>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h1>Education</h1>
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
