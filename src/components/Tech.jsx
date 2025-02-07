import React from 'react'
import {BallCanvas} from './canvas'
import {technologies } from "../constants"
import { SectionWrapper } from '../hoc'
import "./Tech.css";
const Tech = () => {
  return (
    <div className ="tech-container">
      {technologies.map((tech)=>(
        <div className="tech-ball" key={tech.name}>
          <BallCanvas icon= {tech.icon}/>
          <p className="tech-name">{tech.name}</p>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech,"") ;