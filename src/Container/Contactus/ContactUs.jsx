import React from "react";
// import Title from "../../Components/Title/Title";
import "./ContactUs.scss";

function ContactUs() {
  return (
    <div className="contact-us-container">
      <div className="contactUs" id={`contact`}>
        <div className="contactus-form-title">
          <div className="contact-form-title">
            <div className="contact-title">
              <h1 className="contact-title-h1">Contact us</h1>
            </div>
            <div className="contact-form">
              <input
                type="text"
                name="userName"
                id="userName"
                className="userName input"
                placeholder="your name"
              />
              <input
                type="email"
                name="userEmail"
                id="userEmail"
                className="userEmail input"
                placeholder="Your Email"
              />

              <textarea
                name="message"
                id="message"
                className="message input"
                placeholder="message"
              ></textarea>
            </div>
            <div className="contact-btn">
              <button className="contact-submit">submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
