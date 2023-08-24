import React from "react";
import "./Contact.scss";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram, AiTwotonePhone } from "react-icons/ai";
import QuickLink from "../QuickLink/QuickLink";
function Contact({ IconColor, position, backgroundColor, color }) {
  return (
    <div
      className="contact"
      style={{
        position: position,
        backgroundColor: backgroundColor,
        color: color,
      }}
    >
      <div className="container">
        <div className="contact-phone-email contact-social">
          <a href="tel:255768777892" className="call">
            <AiTwotonePhone className="icon" style={{ color: IconColor }} />
            <span className="contact-details" style={{ color: color }}>
              +255768777892
            </span>
          </a>
          <a href="mailto:info@newhope.ac.tz" className="call">
            <MdEmail className="icon" style={{ color: IconColor }} />
            <span className="contact-details" style={{ color: color }}>
              info@newhope.ac.tz
            </span>
          </a>
        </div>
      </div>
    
    </div>
  );
}

export default Contact;
