import React from 'react'
import './portfolio.css'
import IMG1 from "../../assets/pharmeasy.png";
import IMG2 from "../../assets/Snapdeal.png";
import IMG3 from "../../assets/spareshub.png";

const data =[
  {
    id:1,
    image:IMG1,
    title:"Pharmeasy.com-clone",
    github:"https://github.com/ahmadparvej/pharmeasy-clone",
    demo:"https://pharmeasy-clone-website.netlify.app/",
    tech:["React","Redux","CSS","JavaScript"],
  },
  {
    id:2,
    image:IMG2,
    title:"Snapdeal.com-clone",
    github:"https://github.com/AkshayPatil96/Snapdeal-Clone",
    demo:"https://papaya-shortbread-8d7bc4.netlify.app/",
    tech:["HTML","CSS","JavaScript","Bootstap"],
  },
  {
    id:3,
    image:IMG3,
    title:"Sparshub.com automobiles-marketplace clone",
    github:"https://github.com/ahmadparvej/spareshub-automobiles",
    demo:"https://spareshub-clone.netlify.app/",
    tech:["HTML","CSS","JavaScript"],
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