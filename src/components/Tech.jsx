import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, skills }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-10 min-h-[320px] flex flex-col justify-evenly items-center"
      >
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>

        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {skills.map((skill, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <img
                src={skill.icon}
                alt={`${skill.name}-icon`}
                className="w-6 h-6 object-contain"
              />
              <span className="text-white text-[14px]">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Tech.</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {technologies.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
