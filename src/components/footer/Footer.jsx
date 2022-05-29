import React from 'react'
import './footer.css'
import { BsInstagram,BsTwitter,BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      {/* <a href="#" className="footer__logo">Parvej</a> */}
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href=""><BsLinkedin/></a>
        <a href=""><BsInstagram/></a>
        <a href=""><BsTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>
          &copy; ahmadparvej. All rights reserved </small>
      </div>
    </footer>
  )
}

export default Footer