import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer-section">
      <div className="boost-your-link">
        <h1 className="boost-your-link--title">Boost your links today</h1>
        <button className="footer--get-started-btn">Get Started</button>
      </div>
      <div className="footer-bottom">
        <img src="images\logo-white.svg" alt="shortly-white-logo" />
        <div className="footer--features">
          <h3 className="footer--features-title">Features</h3>
          <p className="footer--features-element">Link shortening</p>
          <p className="footer--features-element">Branded Links</p>
          <p className="footer--features-element">Analytics</p>
        </div>
        <div className="footer--resources">
          <h3 className="footer--resources-title">Resources</h3>
          <p className="footer--resources-element">Blog</p>
          <p className="footer--resources-element">Developers</p>
          <p className="footer--resources-element">Support</p>
        </div>
        <div className="footer--company">
          <h3 className="footer--company-title">Company</h3>
          <p className="footer--company-element">About</p>
          <p className="footer--company-element">Our Team</p>
          <p className="footer--company-element">Careers</p>
          <p className="footer--company-element">Contact</p>
        </div>
        <div className="social-icons">
          <img
            src="images/icon-facebook.svg"
            alt="facebook"
            className="social-icon"
          />
          <img
            src="images/icon-twitter.svg"
            alt="twitter"
            className="social-icon"
          />
          <img
            src="images/icon-pinterest.svg"
            alt="pinterest"
            className="social-icon"
          />
          <img
            src="images/icon-instagram.svg"
            alt="instagram"
            className="social-icon"
          />
        </div>
      </div>
    </section>
  );
}

export default Footer;
