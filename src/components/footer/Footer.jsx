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
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/parvej-ahmad-627674207/" target="_blank"><BsLinkedin/></a>
        <a href="https://www.instagram.com/parvej.ahmad.01/" target="_blank"><BsInstagram/></a>
        <a href="https://twitter.com/codemagzine" target="_blank"><BsTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>
          &copy; ahmadparvej. All rights reserved </small>
      </div>
    </footer>
  )
}

export default Footer