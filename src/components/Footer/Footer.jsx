import React from "react";
import "./Footer.css";
import { ImFacebook } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";




const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <div className="logo-section">
            <img src="https://assets.inshorts.com/website_assets/images/logo_footer.png" alt="" />
          </div>
          <div className="company-info">
            <p>Inshorts Pte. Ltd.</p>
            <p className="copyright">©COPYRIGHT 2024</p>
          </div>
        </div>

        <div className="footer-center">
          <a href="/contact">Contact Us</a>
          <a href="/terms">Terms & conditions</a>
          <a href="/privacy">Privacy Policies</a>
        </div>

        <div className="footer-right">
          <div className="social-icons">
          <ImFacebook size={26} color="white" />
          <FaTwitter  size={26} color="white" />
          <FaLinkedinIn size={26} color="white" />

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;