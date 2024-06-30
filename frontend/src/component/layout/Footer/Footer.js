import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>Bakery Mania.</h1>
        <p>High Quality is our first priority</p>

        <p className="copRight">
          Copyrights 2024 &copy;{" "}
          <a href="(https://www.instagram.com/rohit_thakur5949?igsh=MWIxOGxlZmFveDlnaA==">
            Rohit Kumar Thakur
          </a>
        </p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/rohit_thakur5949?igsh=MWIxOGxlZmFveDlnaA==">
          Instagram
        </a>
               <a href="https://www.linkedin.com/in/rohit-kumar-thakur-468961222/">
          Linkedin
        </a>
              </div>
    </footer>
  );
};

export default Footer;
