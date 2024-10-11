import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src="" alt="" />
          <p>Order your favorite meals with just a few clicks, and have them delivered fresh to your doorstep. Discover exciting deals, new restaurants, and a seamless food delivery experience with #Ghar ka khana.
          </p>
          <div className="footer-social-icons">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <div className="footer-content-center">
        <h2>COMPANY</h2>
        <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Delivery</li>
        <li>Privecy policy</li>
        </ul>
        </div>
        <div className="footer-content-right">
        <h2>GET IN TOUCH</h2>
        <ul>
        <li>+1-333-444-5677</li>
        <li>content@gharkakhana.com</li>
        </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024 © Gharkakhana.com - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
