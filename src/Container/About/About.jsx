import React, { useEffect, useState } from "react";
import "./About.scss";
import { images } from "../../Constants";
import { motion } from "framer-motion";

import Title from "../../Components/Title/Title";

export default function About() {
  const [image, setimage] = useState([]);
  useEffect(() => {
    if (window.screen.availWidth < 601) {
      setimage([images.singleStudent]);
    } else {
      setimage([images.schoolview1, images.singleStudent]);
    }
  }, []);
  return (
    <div className="About" id="about_us">
      <div className="about-container">
        <Title title={"About New Hope Academy"} />

        <div className="about-description">
          <div className="about-description-details">
            <p className="about-paragraph">
              New Hope English medium pre & primary schools is a day school that
              accommodates both boys and girls. All subjects are taught in
              English except Kiswahili which is spoken during period concerned.
              The school doesn’t rely on religion, tribe or ethics in one or
              another. We invite pupils of all kind at age of three years in pre
              primary school.
            </p>
            <p className="about-paragraph">
              New Hope English medium pre & primary school is at Kikwe, Meru
              district, Arusha region, 2km from Arusha namanga by pass road
              (East Africa Road). The school has a conducive environment that
              allows smooth learning atmosphere for any pupil to do better
              academically. The school had competitive and experienced teaching
              and non – non teaching staff who makes the school to be in the
              chart of good schools in Arusha region.
            </p>
          </div>

          <div className="about-images-container">
            {image.map((item, index) => {
              return (
                <div className="about-images" key={index}>
                  <img src={item} alt={item} className="about-image" />
                </div>
              );
            })}
          </div>
        </div>
        {/* <button className="about-us-button">
          <a href="/about">Read More</a>
        </button> */}
      </div>
    </div>
  );
}
