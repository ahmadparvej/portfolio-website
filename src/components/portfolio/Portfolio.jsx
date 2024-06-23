import React from 'react'
import './portfolio.css'
import IMG1 from "../../assets/ac-services-booking-system.png";
import IMG2 from "../../assets/CodeEditor Collab (2).png";
import IMG3 from "../../assets/Gearbest.png";

const data =[
  {
    id:1,
    image:IMG1,
    title:"AC Service Booking System",
    github:"",
    demo:"https://ac-technician.vercel.app/",
    tech:["React","Next Js","Tailwind Css","MongoDB","Shadcn-UI"],
  },
  {
    id:2,
    image:IMG2,
    title:"Code Editor Collab",
    github:"https://github.com/ahmadparvej/online-pair-programming",
    demo:"https://code-together-realtime.herokuapp.com/",
    tech:["React","Express","Socket.io"],
  },
  {
    id:3,
    image:IMG3,
    title:"Gearbest.com clone",
    github:"https://github.com/ahmadparvej/gearbest",
    demo:"https://gearbest-personal-clone.herokuapp.com/",
    tech:["React","Redux","Chakra-UI"],
  }
]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {data.map((elem)=>{
          return (
          <article key={elem.id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={elem.image} alt="work" />
          </div>
          <h3>{elem.title}</h3>
          <p className='portfolio__item-stack'>Tech Stack : <span>{elem.tech.join(" | ")}</span></p>
          <div className="portfolio__item-cta">
          <a href={elem.github} target="_blank" className="btn">Github</a>
          <a href={elem.demo} target="_blank" className="btn btn-primary">Live Demo</a>
          </div>
          </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio