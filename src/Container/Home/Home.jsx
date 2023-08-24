import React from "react";
import "./Home.scss";
import { NavBar } from "../../Components/NavBar/NavBar";
import Slider from "../../Components/Slider/Slider";

import Testimonial from "../Testimonial/Testimonial";
import ExtraNav from "../../Components/NavBar/ExtraNav";
import About from "../About/About";
import Academics from "../Academics/Academics";
import Admission from "../Admission/Admission";
import NumCount from "../Testimonial/NumCount";
import ContactUs from "../Contactus/ContactUs";
import Footer from "../../Components/Footer/Footer";
import Contact from "../../Components/Contact/Contact";

import Calender from "../../Components/Resources/ResourcesPages/Calender/Calender";
import Whatsapp from "../../Components/Whatsapp/Whatsapp";
import TodayQuote from "../../Components/TodayQuote/TodayQuote";
import QuickLink from "../../Components/QuickLink/QuickLink";
import Copyright from "../../Components/Copyright/Copyright";
import QuickImage from "../../Components/QuickImage/QuickImage";
import QuickText from "../../Components/QuickImage/QickText";
import MapPreview from "../../Components/MapPreview/MapPreview";
import BorderLine from "../../Components/BorderLine/BorderLine";
function Home() {
  return (
    <div className="Home" id="home">
      <Contact position={"sticky"} backgroundColor={"#386641"} />
      <NavBar />
      <BorderLine />
      <Slider />
      <BorderLine />
      <Whatsapp />
      <ExtraNav />

      <QuickImage />
      <BorderLine />

      <About />
      <QuickText />
      <Admission />
      <Academics />
      {/* <BorderLine /> */}
      <Testimonial />
      <BorderLine />

      {/* <MapPreview /> */}
      <ContactUs />
      {/* <BorderLine /> */}

      <Calender />
      <TodayQuote />
      <BorderLine />
      <Footer />
      <Copyright />
      {/*<QuickLink />
       */}
      {/* <NumCount /> */}
    </div>
  );
}

export default Home;
