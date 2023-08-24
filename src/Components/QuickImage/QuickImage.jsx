import React, { useState } from "react";
import { images } from "../../Constants";
import "./QuickImage.scss";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

const quickImage = [
  images.teacherCare,
  images.teacherTalk,
  images.singleStudent2,
];

function QuickImage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBack = (e) => {
    setCurrentSlide((prev) => prev + 1);
  };
  const handleForward = (e) => {
    setCurrentSlide((prev) => prev - 1);
  };
  return (
    <div className="quick-image">
      <div className="quick-image-title">
        <p className="quick-image-title-title">
          New Hope is the <span className="quick-image-title-focus">Pre-primary </span> and
          
          <span className="quick-image-title-focus"> Primary</span> schools
        </p>
      </div>
      <div className="arrow-back">
        <IoMdArrowBack onClick={(e) => handleBack(e)} />
      </div>

      <div className="quick-image-container">
        {quickImage.map((image, index) => {
          return (
            <div
              className="quick-image-div"
              key={index}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              // ref={(ref)=>ref=quickDivRef.current[0]}
            >
              <img src={image} alt={image} className="quick-image-image" />
            </div>
          );
        })}
      </div>
      <div className="arrow-forward" onClick={() => handleForward()}>
        <IoMdArrowForward />
      </div>
    </div>
  );
}

export default QuickImage;
