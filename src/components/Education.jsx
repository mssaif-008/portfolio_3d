import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import "./Education.css";

import { education } from "../constants"; // Corrected import
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const EducationCard = ({ educationItem }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid   #232631" }}
      date={educationItem.date}
      iconStyle={{ background: educationItem.iconBg }}
      icon={
        educationItem.icon ? (
          <div className="icon-container">
            <img
              src={educationItem.icon}
              alt={educationItem.company_name}
              className="icon-img"
            />
          </div>
        ) : null
      }
    >
      <div>
        <h3 className="education-title">{educationItem.title}</h3>
        <p className="education-institution">{educationItem.company_name}</p>
      </div>

      <ul className="education-list">
        {educationItem.points.map((point, index) => (
          <li key={`education-point-${index}`} className="education-point">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
       
        <h2 className="section-head-text">Education</h2>
      </motion.div>

      <div className="timeline-container">
        <VerticalTimeline>
          {education.map((educationItem, index) => (
            <EducationCard key={`education-${index}`} educationItem={educationItem} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "");
