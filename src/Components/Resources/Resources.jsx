import "./Resources.scss";
import Contact from "../Contact/Contact";
import PageHeader from "../PageHeader/PageHeader";
import ResourceListNav from "../ResourceListNav/ResourceListNav";
import { Outlet, useLocation } from "react-router-dom";
import HandBook from "./ResourcesPages/Handbook/HandBook";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import BorderLine from "../BorderLine/BorderLine";
import Footer from "../Footer/Footer";

function Resources() {
  const [initial, setInitial] = useState(true);
  const resourcesData = [
    { title: "Student Handbook", link: "handBook" },
    { title: "Curriculum Guides", link: "curriculumGuide" },
    { title: "Academic Calendars", link: "calender" },
    { title: "Study Resources", link: "study" },
    { title: "Parent Resources", link: "parent" },
    { title: "Health and Wellness", link: "healthWellness" },
    { title: "Library Resources", link: "library" },
    // { title: "Extracurricular Activities", link: "extra" },
  ];

  const { pathname } = useLocation();

  const updateInitial = (value) => {
    setInitial(value);
  };

  useEffect(() => {
    if (pathname !== "/resources") {
      setInitial(false);
    }
  }, [initial]);

  return (
    <>
      <Helmet>
        <title>Resources</title>
        <meta
          name="description"
          content=" Explore different resources for students and parents at New Hope  school"
        />
        <link rel="canonical" href="/resources" />
      </Helmet>
      <div className="resources">
        <Contact position={"sticky"} color={"#386641"} IconColor={"#386641"} />
        <div className="resources-container">
          <PageHeader title={"New Hope/Resources"} />
          <BorderLine />
          <div className="resources-container-main">
            <div className="resources-main">
              <ResourceListNav
                updateInitial={updateInitial}
                resourcesData={resourcesData}
              />
              {initial && <HandBook />}
              <Outlet />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Resources;
