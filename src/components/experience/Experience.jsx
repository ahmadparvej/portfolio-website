import React from 'react'
import { BsFillPatchCheckFill } from "react-icons/bs";
import './experience.css'
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience_content">
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>HTML5</h4>
                <small className="text-light">Advanece</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>CSS3</h4>
                <small className="text-light">Advance</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>JavaScript</h4>
                <small className="text-light">Advance</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon"/>
               <div>
               <h4>React</h4>
                <small className="text-light">Advance</small>
               </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon"/>
               <div>
               <h4>Next Js</h4>
                <small className="text-light">Advance</small>
               </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>Redux</h4>
                <small className="text-light">Advance</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>TypeScript</h4>
                <small className="text-light">Advance</small>
                </div>
              </article>
            </div>
        </div>
        <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience_content">
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>Node JS</h4>
                <small className="text-light">Advance</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon"/>
               <div> <h4>Express JS</h4>
                <small className="text-light">Advance</small></div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>Mongo DB</h4>
                <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
        </div>
        
      </div>
    </section>
  )
}

export default Experience