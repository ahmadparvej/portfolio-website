import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article></article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
        <article></article>
      </div>
    </section>
  )
}

export default Services