import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../images/logo2.PNG";
import "./Footer.css";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="footer-container">
      <img src={logo} alt="logo" height="70px" />
      <p>IWoLvEs © 2021 All Rights Reserved.</p>
      <div className="social-icons">
        <FontAwesomeIcon icon={faFacebook} size="lg" color="white" />
        <FontAwesomeIcon icon={faInstagram} size="lg" color="white" />
        <FontAwesomeIcon icon={faTwitter} size="lg" color="white" />
        <FontAwesomeIcon icon={faYoutube} size="lg" color="white" />
        <FontAwesomeIcon icon={faLinkedin} size="lg" color="white" />
      </div>
    </div>
  );
};

export default Footer;
