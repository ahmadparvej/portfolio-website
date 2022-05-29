import React from 'react'
import './header.css'
import CTA from "./CTA";
import ME from "../../assets/ParvejProfile2-removebg-preview.png";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="iAm">
          <h5>Hello I'm</h5>
          <h1>Parvej Ahmad</h1>
          <h5 className="text-light">Full-Stack Developer</h5>
          <CTA/>
          <HeaderSocials/>
        </div>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        {/* <a href="#contact" className="scroll__down">scroll down</a> */}
      </div>
    </header>
  )
}

export default Header