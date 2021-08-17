import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import resume from "../documents/JosiahSpeedResume.pdf";

const Downloads = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">Downloads</h1>
      <div className="container">
        <div className="row">
          <div href={resume} className="col-lg-6 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFilePdf} size="2x" /></div>
              <h3>Resume</h3>
              <p>Click here to download my resume.</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFilePdf} size="2x" /></div>

              <h3>Portfolio</h3>
              <p>Your website will be build with an new proven technologies.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Downloads;
