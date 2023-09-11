import React from "react";
import app from "../../../images/applay.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4> Download Our App</h4>
        <p></p>
        <img src={app} alt="our app" />
      </div>

      <div className="midFooter">
        <h1>MIU</h1>
        <p>HIGH QUALITY IS OUR FIRST PRIORITY</p>

        <p>&copy; 2023 - 2023 www.miu.com - All Rights Reserved</p>
      </div>

      <div className="rightFooter">
        <h4> </h4>
        <a href="http://instagram.com/justina">INSTAGRAM</a>
        <a href="http://youtube.com/justina">FACEBOOK</a>
        <a href="http://instagram.com/justina">YOUTUBE</a>
      </div>
    </footer>
  );
};

export default Footer;