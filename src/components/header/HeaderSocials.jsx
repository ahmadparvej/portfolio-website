import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/parvej-ahmad-627674207/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/ahmadparvej" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://twitter.com/codemagzine" target="_blank" rel="noreferrer"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials