import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="social">
            <a href="#" className="social-icon"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#" className="social-icon"><i className="fa-brands fa-twitter"></i></a>
          </div>
        </div>
        <div className="footer-right">
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
      {/* <p className="copyright">© 2022 Designed by Saurav</p> */}
    </footer>
  );
};

export default Footer;
