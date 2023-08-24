import React from "react";
import "./Academics.scss";
import Title from "../../Components/Title/Title";

import { images } from "../../Constants";

function Academics() {
  const academicsDetails = [
    {
      classTitle: "Nursery",
      subjects: [
        "Arithmetic",
        "Environment",
        "Writing",
        "Reading",
        "Communication",
        "Relation",
      ],
    },
    {
      classTitle: "Class 1 - Class 2",
      subjects: [
        "Arithmetic",
        "Healthcare & Environment",
        "Writing Skills",
        "Reading Skills",
        "Kusoma",
        "Kuandika",
      ],
    },
    {
      classTitle: "Class 3 - Class 7",
      subjects: [
        "Mathematics",
        "Kiswahili",
        "English",
        "Civic and Moral",
        "Social Studies",
        "Science",
        "Vocational Skills",
      ],
    },
  ];
  return (
    <>
      <Title title={"Academics/Curriculum"} />
      <div className="academics" id="academics">
        {academicsDetails.map((data, index) => {
          return (
            <>
              <h2>{data.classTitle}</h2>
              <div className="academics-container">
                {data.subjects.map((data, index) => {
                  return (
                    <div className="curricula-container">
                      <h4 className="curricula-title">{data}</h4>
                    </div>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Academics;
