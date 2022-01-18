import React from "react";
import "./footersection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
class footersection extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      position: "",
    };
  }

  render() {
    return (
      <>
        <div className="bg-dark text-white footer">
          <div className="row col-12">
            <div className="col-4">
              <h6>Get In Touch</h6>
              <p>
                <FontAwesomeIcon icon={faPhoneSquare} />
                01028343913
              </p>
              <p>
                <FontAwesomeIcon className="me-3" icon={faEnvelope} />
                arch.samerhassan@gmail.com
              </p>
            </div>
            <div className="col-4 text-center">
              <button className="btn btn-outline-light"> Contact Me </button>
            </div>
            <div className="col-4 text-end">
              <p>
                <FontAwesomeIcon className="me-3" icon={faLinkedin} />
                <FontAwesomeIcon className="me-3" icon={faFacebook} />
                <FontAwesomeIcon className="me-3" icon={faTwitter} />
              </p>
              <p> CopyRight © 2019 KR</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default footersection;
