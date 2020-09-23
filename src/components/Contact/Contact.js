import React from "react";
import Title from "../Title";
import "./Contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="contact container">
        <Title title="Interested in working together?" />

        <div className="contact__details">
          <div className="contact__social">
            <h5>Follow Us</h5>
            <Link to="#!">instagram</Link>
          </div>

          <div className="contact__email">
            <div className="social">
              <h5>Email Us</h5>
              <Link to="#!">hello@wissensof.com</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
