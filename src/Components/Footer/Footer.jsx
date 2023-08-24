import React from "react";
import "./Footer.scss";
// import LinkList from "../Links-list/LinkList";
// import { images } from "../../Constants";
// import Contact from "../Contact/Contact";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram, AiTwotonePhone } from "react-icons/ai";
import images from "../../Constants/images";
function Footer() {
  const linkName = [
    {
      name: "About Goodwill",
      href: "./aboutus",
    },
    {
      name: "Contact support",
      href: "./contactSupport",
    },
    {
      name: "Be our sponsor",
      href: "./sponsor",
    },
    {
      name: "Our services",
      href: "./services",
    },
  ];

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="top-footer">
          <div className="footer-quick-links">
            <a href="#about_us" className="ancar-footer" id="about">
              About
            </a>
            <a href="#admission" className="ancar-footer" id="about">
              Admission
            </a>
            <a href="#contact" className="ancar-footer" id="about">
              Contact
            </a>
          </div>
          <div className="contacts-links">
            <span>Contact Us</span>
            <div className="contact-icons">
              <div className="icon-title">
                <BsFacebook className="quick-icon" />
                <span>newhope Academy</span>
              </div>
              <div className="icon-title">
                <BsLinkedin className="quick-icon" />
                <span>newhope Academy</span>
              </div>
              <div className="icon-title">
                <AiFillInstagram className="quick-icon" />
                <span>newhope Academy</span>
              </div>
              <div className="icon-title">
                <MdEmail className="quick-icon" />
                <a
                  href="mail:info@newhope.ac.tz"
                  className="ancar-footer"
                  id="about"
                  alt="email"
                >
                  info@newhope.ac.tz
                </a>
              </div>

              <div className="icon-title">
                <AiTwotonePhone className="quick-icon" />
                <span>+255 768777892</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contacts">
          <span>Quick links</span>
          <div className="icons">
            <a href="https://www.nacte.go.tz">
              <img
                src={images.nacte_logo}
                className="footer-quick-logo"
                alt="nacte"
              />
            </a>
            <a href="https://www.necta.go.tz">
              <img
                src={images.necta_logo}
                className="footer-quick-logo"
                alt="necta"
              />
            </a>

            <a href="https://www.rita.go.tz">
              <img
                src={images.rita_logo}
                className="footer-quick-logo"
                alt="rita"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
