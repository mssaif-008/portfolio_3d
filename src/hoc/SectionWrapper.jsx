import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles.js";
import { staggerContainer } from "../utils/motion";
import "./SectionWrapper.css";

const StarWrapper=(Component ,idName)=>
    function HOC(){
        return (
            <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{once: true,amount:0.25}}
            className="section-wrap"

            >
                <span className="hash-span" id={idName} >
                    &nbsp;
                </span>
                <Component />
            </motion.section>
        );
    }

export default StarWrapper;