import React from 'react'
import "./Works.css";
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion';
import {github ,arrow} from '../assets';
import {projects ,profiles} from "../constants";
import {fadeIn,textVariant} from "../utils/motion";


import { SectionWrapper } from '../hoc';

const ProjectCard = ({index,name,description,tags,image,source_code_link})=>{

  return(
    <motion.div variants={fadeIn("up","spring",index*0.5,0.75)} >
      <Tilt
      options={{
        max:45,
        scale:1,
        speed:450
      }}
      className="the-project"
      >
        <div className="the-project-back">
          <img src={image}
          alt='project_img'
          className='project-image'/>

          <div className="the-project-imgdesc" >
            <div className='the-project-imgdesc-hover'
            onClick={(e) => {
              e.stopPropagation();
              window.open(source_code_link, "_blank");
            }}
            
            >
              <img src={github}
              alt='github'
              className="github-img"/>

            </div>
          </div>
        </div>
        <div className="indv-project">
      <h3 className="project-name">{name}</h3>
      <p className="project-description">{description}</p>

      <div className="tags-container">
        {tags.map((tag, tagIndex) => (
          <p key={`${name}-${tag.name}-${tagIndex}`} className={`tag ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>

      </Tilt>
    </motion.div>

  )

}

const ProfileCard = ({index,name,description,tags,image,source_code_link})=>{

  return(
    <motion.div variants={fadeIn("up","spring",index*0.5,0.75)} >
      <Tilt
      options={{
        max:45,
        scale:1,
        speed:450
      }}
      className="the-project"
      >
        <div className="the-project-back">
          <img src={image}
          alt='project_img'
          className='project-image'/>

          <div className="the-project-imgdesc" >
            <div className='the-project-imgdesc-hover'
            onClick={(e) => {
              e.stopPropagation();
              window.open(source_code_link, "_blank");
            }}
            
            >
              <img src={arrow}
              alt='profile'
              className="github-img"/>

            </div>
          </div>
        </div>
        <div className="indv-project">
      <h3 className="project-name">{name}</h3>
      <p className="project-description">{description}</p>

      <div className="tags-container">
        {tags.map((tag, tagIndex) => (
          <p key={`${name}-${tag.name}-${tagIndex}`} className={`tag ${tag.color}`}>
            {tag.name}
          </p>
        ))}
      </div>
    </div>

      </Tilt>
    </motion.div>

  )

}




const Works = () => {
  return (
    <>
    <motion.div
    variants={ textVariant()}>
      <p className ="section-sub-text">
        My Works
      </p>
      <h2 className="section-head-text">
      The Projects
      </h2>
      </motion.div>
      <div className="project-desc-container">
      <motion.p variants={fadeIn("","",0.1,1)} className="project-description">
      Here are some of the projects I’ve worked on, 
      showcasing my skills in development and problem-solving.
       Each project is linked to its GitHub repository
        for more details on the code and implementation.
       Feel free to explore and check them out
      </motion.p>
      </div>

      <div className="project-cards">

      {projects.map((project,index)=>(
        <ProjectCard key={`project-${index}`}
        index={index} {...project} />
      ))}

      </div>
    
      <motion.div
    variants={ textVariant()}>
      
      <h2 className="section-head-text">
      Profiles
      </h2>
      </motion.div>
      

      <div className="project-cards">

      {profiles.map((project,index)=>(
        <ProfileCard key={`project-${index}`}
        index={index} {...project} />
      ))}

      </div>
    
    
    
    </>
  )
}

export default SectionWrapper(Works,"work") ;