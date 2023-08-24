import React from "react";
import "./Admission.scss";
import images from "../../Constants/images";
import { Helmet } from "react-helmet-async";

function Admission() {
  return (
    <div className="admission" id="admission">
      <div className="admission-container">
        <div className="admission-container-description-div">
          <div className="list-div">
            <a href="/admission" className="list-button-link">
              <button className="list-button">Apply Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admission;
