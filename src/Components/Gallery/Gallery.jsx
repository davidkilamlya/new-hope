import React, { useRef, useState } from "react";

import "./Gallery.scss";
import images from "../../Constants/images";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

import { easeInOut, motion } from "framer-motion";
import { MdCancel } from "react-icons/md";
import { useLocation } from "react-router-dom";

import PageHeader from "../PageHeader/PageHeader";

import { Helmet } from "react-helmet-async";
import BorderLine from "../BorderLine/BorderLine";
// Use the imported images as needed
const officialImages = [
  { image: images.allTeachers, title: "Image 0" },
  { image: images.allTeachers, title: "Image 1" },
  { image: images.schoolview1, title: "Image 2" },
  { image: images.prePrimary, title: "Image 3" },
  { image: images.raiseHands, title: "Image 4" },
  { image: images.singleStudent, title: "Image 5" },
  { image: images.smallStudents, title: "Image 6" },
  { image: images.standup, title: "Image 7" },
  { image: images.teachers, title: "Image 8" },
  { image: images.teacherTalk, title: "Image 9" },
  { image: images.allFunTeachers, title: "Image 10" },
  { image: images.classTeach, title: "Image 11" },

  // Additional images
  { image: images.randomImage1, title: "Image 12" },
  { image: images.randomImage2, title: "Image 13" },
  { image: images.randomImage3, title: "Image 14" },
  { image: images.randomImage4, title: "Image 15" },
  { image: images.randomImage5, title: "Image 16" },
  { image: images.randomImage6, title: "Image 17" },
  { image: images.randomImage7, title: "Image 18" },
  { image: images.randomImage8, title: "Image 19" },
  { image: images.randomImage9, title: "Image 20" },
  { image: images.randomImage10, title: "Image 21" },
  { image: images.randomImage11, title: "Image 22" },
  { image: images.randomImage12, title: "Image 23" },
  { image: images.randomImage13, title: "Image 24" },
  { image: images.randomImage14, title: "Image 25" },
  { image: images.randomImage15, title: "Image 26" },
  { image: images.randomImage16, title: "Image 27" },
  { image: images.randomImage17, title: "Image 28" },
  { image: images.randomImage18, title: "Image 29" },
  { image: images.randomImage19, title: "Image 30" },
  { image: images.randomImage20, title: "Image 31" },
  { image: images.randomImage21, title: "Image 32" },
  { image: images.randomImage22, title: "Image 33" },
  { image: images.randomImage23, title: "Image 34" },
  { image: images.randomImage24, title: "Image 35" },
  { image: images.randomImage25, title: "Image 36" },
  { image: images.randomImage26, title: "Image 37" },
  { image: images.randomImage27, title: "Image 38" },
  { image: images.randomImage28, title: "Image 39" },
  { image: images.randomImage29, title: "Image 40" },
  { image: images.randomImage30, title: "Image 41" },
  { image: images.randomImage31, title: "Image 42" },
  { image: images.randomImage32, title: "Image 43" },
  { image: images.randomImage33, title: "Image 44" },
  { image: images.randomImage34, title: "Image 45" },
  { image: images.randomImage35, title: "Image 46" },
  { image: images.randomImage36, title: "Image 47" },
  { image: images.randomImage37, title: "Image 48" },
  { image: images.randomImage38, title: "Image 49" },
  { image: images.randomImage39, title: "Image 50" },
  { image: images.randomImage40, title: "Image 51" },
  { image: images.randomImage41, title: "Image 52" },
  { image: images.randomImage42, title: "Image 53" },
  { image: images.randomImage43, title: "Image 54" },
  { image: images.randomImage44, title: "Image 55" },
  { image: images.randomImage45, title: "Image 56" },
  { image: images.randomImage46, title: "Image 57" },
  { image: images.randomImage47, title: "Image 58" },
  { image: images.randomImage48, title: "Image 59" },
  { image: images.randomImage49, title: "Image 60" },
  { image: images.randomImage50, title: "Image 61" },
  { image: images.randomImage51, title: "Image 62" },
  { image: images.randomImage52, title: "Image 63" },
  { image: images.randomImage53, title: "Image 64" },
];


function Gallery() {
  const imageRef = useRef();
  const galleryRef = useRef();
  const [imageHolder, setImageHolder] = useState();
  const { pathname, search } = useLocation();
  console.log("path ", pathname, " search ", search);

  const handleClick = (id) => {
    setImageHolder(officialImages[id].image);
    imageRef.current.style.height = "100%";
    imageRef.current.style.width = "100vw";
    imageRef.current.style.padding = "50px";
  };
  const handleCancel = () => {
    imageRef.current.style.height = "0vh";
    imageRef.current.style.padding = "0px";
  };
  return (
    <div>
      <Helmet>
        <title>Gallery</title>
        <meta name="description" content="View New Hope school gallery" />
        <link rel="canonical" href="/gallery" />
      </Helmet>
      <Contact position={"sticky"} color={"#386641"} IconColor={"#386641"} />
      <div className="gallery-container">
        <PageHeader title={"New Hope/Gallery"} />

        <motion.div
          initial={{ y: [0, 100] }}
          whileInView={{ y: [-300, 0] }}
          transition={{ duration: 2, ease: easeInOut }}
          className="gallery-card-image"
          ref={galleryRef}
        >
          {officialImages.map((item, index) => {
            console.log(item, index);
            return (
              <div className="gallery-card" key={index}>
                <div className="gallery-image">
                  {item.image ? (
                    <img
                      src={item.image}
                      onClick={() => handleClick(index)}
                      alt="gallery"
                      className="gallery-image-image"
                    />
                  ) : (
                    <h4>loading.....</h4>
                  )}
                </div>
                <div className="gallery-tittle">
                  <span className="gallery-tittle-h2">{item.title}</span>
                  {/* <span className="gallery-tittle-date">{item.date}</span> */}
                </div>
              </div>
            );
          })}
          <div
            className="image-holder"
            ref={imageRef}
            onClick={() => handleCancel()}
          >
            <div className="image-holder-icon">
              <MdCancel
                className="cancel-icon"
                onClick={() => handleCancel()}
              />
            </div>
            <div className="image-holder-container">
              {" "}
              <img
                src={imageHolder}
                alt="gallery"
                className="image-holder-image"
                onClick={() => handleCancel()}
              />
            </div>
          </div>
        </motion.div>
      </div>
      <BorderLine />
      <Footer />
    </div>
  );
}

export default Gallery;
