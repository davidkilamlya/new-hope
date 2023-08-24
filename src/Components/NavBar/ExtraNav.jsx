import React from "react";
import "./ExtraNav.scss";
import { documents } from "../../Constants";

function ExtraNav() {
  const extraNav = [
    {
      title: "Admission",
      link: "/admission",
    },
    {
      title: "News and Updates",
      link: "/updates",
    },
    {
      title: "Gallery",
      link: "/gallery",
    },
    {
      title: "Resources",
      link: "/resources",
    },
    {
      title: "Co-curricular",
      link: "/curricular",
    },
    {
      title: "Student Life",
      link: "/life",
    },
    {
      title:"Registration Form",
      link:`${documents.registration}`
    }
  ];

  return (
    <div className="extraNav">
      <div className="extraNav-container">
        {extraNav.map((item, index) => {
          return (
            <div className="extraNav-nav" key={index}>
              <a href={item.link} className="extraNav-nav-link">
                {item.title}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExtraNav;
