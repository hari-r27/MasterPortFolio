import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code } from "lucide-react";

function ResumeSkills() {
  const skills = [
    "React.js",
    "Next.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Ruby on Rails",
    "Responsive Design",
    "Git",
    "REST API",
  ];

  return (
    <motion.div
      initial={{ x: 400, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white w-[60%] rounded-[1.5rem] flex flex-col gap-[2rem] 
      absolute right-[1rem] bottom-[1rem] top-[1rem] p-[2rem] overflow-y-auto"
    >
      {/* Title */}
      <motion.h2
        initial={{ x: 700, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="font-h3"
      >
        Resume
      </motion.h2>

      {/* Education */}
      <div className="flex flex-col gap-[1rem]">
        <div className="flex items-center gap-2">
          <GraduationCap size={20} />
          <h3 className="font-h5">Education</h3>
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#fff3e6] p-[1.3rem] rounded-[1rem] border-l-[5px] border-orange-400"
        >
          <p className="font-h6">
            Mahendra Institute of Technology
          </p>

          <p className="font-inner-text text-gray-600">
            Tiruchengode, Tamil Nadu
          </p>

          <p className="font-inner-text text-gray-600">
            2020 – 2024 | CGPA: 8.27
          </p>
        </motion.div>
      </div>

      {/* Experience */}
      <div className="flex flex-col gap-[1rem]">
        <div className="flex items-center gap-2">
          <Briefcase size={20} />
          <h3 className="font-h5">Experience</h3>
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#e8f4ff] p-[1.3rem] rounded-[1rem] border-l-[5px] border-blue-400"
        >
          <p className="font-inner-text text-gray-700">
            Currently building personal projects and modern UI applications
            using React.js and Next.js while improving frontend development
            skills.
          </p>
        </motion.div>
      </div>

      {/* Skills */}
      <div className="flex flex-col gap-[1rem]">
        <div className="flex items-center gap-2">
          <Code size={20} />
          <h3 className="font-h5">Skills</h3>
        </div>

        <div className="flex flex-wrap gap-[0.6rem]">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="bg-[#f2f7fb] px-[0.9rem] py-[0.5rem] 
              rounded-[0.7rem] font-inner-text cursor-pointer"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ResumeSkills;