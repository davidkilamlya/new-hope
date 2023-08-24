import React, { useEffect, useState } from "react";
import "./Slider.scss";

import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { images } from "../../Constants";

function Slider() {
  const image = [
    images.randomImage23,
    images.randomImage46,
    images.randomImage45,
    images.randomImage14,
    images.singleStudent,
  ];
  const [CurrentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const handleTouchStart = (event) => {
    setTouchStart(event.touches[0].pageX);
  };

  const handleTouchEnd = (event) => {
    const touchEnd = event.nativeEvent.changedTouches[0].pageX;
    const touchDifference = touchStart - touchEnd;

    if (touchDifference > 0) {
      handleNextSlide();
    } else if (touchDifference < 0) {
      handlePrevSlide();
    }
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === image.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? image.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNextSlide, 10000);

    return () => clearInterval(interval);
  });

  return (
    <div className="slider-main">
      <div
        className="slider-container-main"
        style={{ transform: `translateX(-${CurrentSlide * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {image.map((item, index) => {
          return (
            <div
              className="slider-container-main-slide"
              style={{
                backgroundImage: `url(${item})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%",
                backgroundPosition: "center",
                WebkitBackgroundSize: "cover",
                MozBackgroundSize: "cover",
                OBackgroundSize: "cover",
              }}
              key={index}
            ></div>
          );
        })}
      </div>
      <div className="controlers">
        <div
          className="prev-slide"
          onClick={() => {
            handlePrevSlide();
          }}
        >
          <MdArrowBackIosNew />
        </div>
        <div
          className="next-slide"
          onClick={() => {
            handleNextSlide();
          }}
        >
          <MdArrowForwardIos />
        </div>
      </div>
    </div>
  );
}

export default Slider;
