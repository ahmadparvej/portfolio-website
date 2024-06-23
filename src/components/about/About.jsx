import React from 'react'
import ME  from "../../assets/ParvejProfile2.png";
import { FaAward } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { MdOutlineWeb } from "react-icons/md";
import './about.css'
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="about-me" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>
            <article className="about__card">
              <GiSkills className="about__icon"/>
              <h5>Skills</h5>
              <small>10+ Professional</small>
            </article>
            <article className="about__card">
              <MdOutlineWeb className="about__icon"/>
              <h5>Projects</h5>
              <small>4+ Completed</small>
            </article>
          </div>
          <p>An enthusiastic and results-driven Full-stack Web Developer with nearly 2 years of experience as a Software Engineer. Proven expertise in building optimized, user-focused websites and contributing to over three major projects. Seeking a challenging role where I can directly impact both the company's growth and my career development.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About