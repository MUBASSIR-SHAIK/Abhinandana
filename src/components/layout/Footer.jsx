import React from "react";
import "./Footer.scss";
import { 
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import logo1 from "../../assets/images/svg/app-left-logo.svg";
import logo2 from "../../assets/images/svg/app-right-logo.svg";
import { AiFillLinkedin } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__map">
          <iframe
            src="https://www.google.com/maps?q=17.4468,78.3736&z=15&output=embed"
            title="Company Location"
            loading="lazy"
          ></iframe>
        </div>
        <div className="footer__contact-group">
          {[1, 2, 3].map((item, index) => (
            <div className="footer__contact-box" key={index}>
              <p className="footer__contact-title">LOREM ISP</p>
              <p className="footer__contact-desc">There are many variations</p>
              <p className="footer__contact-info">
                <FaPhoneAlt /> 123 456 7890
              </p>
              <p className="footer__contact-info">
                <FaEnvelope /> Info@loremispsum.com
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="footer__divider"></div>

      <div className="footer__bottom">
        <div className="footer__info">
          <div className="footer__logos">
            <img
              src={logo2}
              alt="Abhinandana Avenues"
              className="footer__logo"
            />
            <img src={logo1} alt="Abhinandana Group" className="footer__logo" />
          </div>
          <div className="footer__address">
            <h4>Contact Us</h4>
            <p>Call: +91 80198 40808</p>
            <p>
              Cyber Gateway, BUILDING-1, Wing 1, Level 3, HITEC City, Hyderabad,
              Telangana 500081
            </p>
            <p>Email: info@refly.com</p>
          </div>
        </div>

        <div className="footer__links">
          <div className="footer__link-group">
            <h4>EXPLORE</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Ventures</li>
              <li>Services</li>
              <li>Developments</li>
              <li>Awards</li>
            </ul>
          </div>
          <div className="footer__link-group">
            <h4>VENTURES</h4>
            <ul>
              <li>Hyderabad</li>
              <li>Guntur</li>
              <li>Vizag</li>
              <li>Vijayawada</li>
              <li>Bengaluru</li>
            </ul>
          </div>
          <div className="footer__social">
            <h4>LOREM ISP</h4>
            <div className="footer__icons">
              <FaFacebook color="#708037" size={24} />
              <AiFillInstagram color="#708037" size={24} />
              <AiFillLinkedin color="#708037" size={24} />
              <FaYoutube color="#708037" size={24} />
            </div>
            <p>Lorem Ispm Lorem Ispm Lorem Ispm</p>
            <p>Lorem Ispm</p>
            <button className="footer__cta">Get Started</button>
          </div>
        </div>
      </div>

      <div className="footer__copyright">
        © 2025 Abhinandana Pvt. Ltd. All rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
