import React from "react";
import Title from "../Title";
import "./Contact.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="contact container">
        <Title title="Interested in working together?" />

        <div className="contact__details">
          <div className="contact__email">
            <div className="social">
              <h5>Email Us</h5>
              <Link to="#!">hello@wissensof.com</Link>
            </div>
          </div>

          <div className="contact__social">
            <h5>Follow Us</h5>
            <div className="social__fa">
              <FaInstagram className="social__icons" />
              <FaTwitter className="social__icons" />
              <FaFacebook className="social__icons" />
              <FaLinkedin className="social__icons" />
            </div>
            {/* <Link to="#!">instagram</Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
