import { motion } from 'framer-motion'
import React from 'react'
import { Tilt } from 'react-tilt'
import "./About.css";
import {styles} from '../styles';
import {services} from "../constants"
import {fadeIn , textVariant} from "../utils/motion";
import { SectionWrapper } from '../hoc';
import canvasImage from "../assets/herobg.png";



const ServiceCard = ({index,title,icon})=>{
  return (
    <Tilt className="skill-card">
      <motion.div className='skill-motion' variants={fadeIn("right","spring",0.5*index ,0.75)}>
      <div className="skill-box" options ={{
        max:45,
        scale:1,
        speed:450
      }} >

<img src={icon} alt={title} className="skill-icon" />
<h3 className="skill-text" >{title}</h3>

      </div>
      </motion.div>
      </Tilt>
  )
}
const About = () => {
  return (
    <div  className='full-about'>
    
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>Introduction</p>
    <h2 className ={styles.sectionHeadText}>Overview.</h2>

    </motion.div>

    <motion.p variants ={fadeIn("","",0.1,1)} className='overview-para'>
    I'm a Java programmer and full-stack web developer with 
    a passion for building scalable and efficient 
    applications. Currently diving into competitive 
    programming to sharpen my problem-solving skills.
     Beyond coding, I enjoy Chess 
    and Lifting, always striving
     for growth.
    </motion.p>
    <div className="stack-cards">
      {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
      )

      )}
    </div>
    </div>
  )
};

export default SectionWrapper(About,"about") ;