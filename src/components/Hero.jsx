import React from 'react'
import {motion } from 'framer-motion'
import {styles} from "../styles";
import "./Hero.css";
import { ComputersCanvas } from './canvas';
import canvasImage from "../assets/herobg.png";
import { SectionWrapper } from '../hoc';
const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${canvasImage})` }}>
    <div className="hero-container">
      <div className="hero-icon-container">
        <div className="hero-circle"></div>
        <div className="hero-line"></div>
      </div>

      <div className="hero-text">
        <h1 className="hero-head-text">
          Hi, I'm <span className="highlight-text"> Mohamed Saif M S</span>
        </h1>
        <p className="hero-sub-text">
        Building web apps, solving problems, and exploring AI.
        </p>
      </div>
      
    </div>
    <ComputersCanvas />
    
    <div className="scroll-indicator-container">
  <a href="#about" className="scroll-indicator-link">
    <div className="scroll-indicator">
      <motion.div
        animate={{ y: [0, 24, 0] }}
        transition={{ duration: 1.7, repeat: Infinity, repeatType: "loop" }}
        className="scroll-dot"
      />
    </div>
  </a>
</div>

  </section>
  )
}

export default Hero