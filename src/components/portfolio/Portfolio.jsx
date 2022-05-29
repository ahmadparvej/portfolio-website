import React from 'react'
import './portfolio.css'
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";

const data =[
  {
    id:1,
    image:IMG1,
    title:"Sparshub.com automobiles-marketplace",
    github:"https://github.com/ahmadparvej/spareshub-automobiles",
    demo:"https://spareshub-clone.netlify.app/",
    tech:["HTML","CSS","JavaScript"],
  },
  {
    id:2,
    image:IMG2,
    title:"Sparshub.com automobiles-marketplace",
    github:"https://github.com/ahmadparvej/spareshub-automobiles",
    demo:"https://spareshub-clone.netlify.app/",
    tech:["HTML","CSS","JavaScript"],
  },
  {
    id:3,
    image:IMG3,
    title:"Sparshub.com automobiles-marketplace",
    github:"https://github.com/ahmadparvej/spareshub-automobiles",
    demo:"https://spareshub-clone.netlify.app/",
    tech:["HTML","CSS","JavaScript"],
  }
]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
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