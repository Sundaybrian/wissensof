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
                            <a
                                href="https://instagram.com/wissensof?igshid=iv8806t7u778"
                                target="_blank"
                                rel="noopener"
                            >
                                <FaInstagram className="social__icons" />
                            </a>
                            <a
                                href="https://twitter.com/wissensof?s=09"
                                target="_blank"
                                rel="noopener"
                            >
                                <FaTwitter className="social__icons" />
                            </a>
                            <a
                                href="https://m.facebook.com/Wissensof/"
                                target="_blank"
                                rel="noopener"
                            >
                                <FaFacebook className="social__icons" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/wissensof/"
                                target="_blank"
                                rel="noopener"
                            >
                                <FaLinkedin className="social__icons" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
