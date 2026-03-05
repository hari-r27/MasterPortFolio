import React from "react";
import { motion } from "framer-motion";
function RightPart() {
  return (
    <motion.div
      initial={{ x: 400, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="bg-white w-[60%] z-10  rounded-[1.5rem] flex justify-start items-center flex-col gap-[1rem] absolute right-[1rem] bottom-[1rem] top-[1rem] p-[2rem]"
    >
      <div className="flex justify-start items-start flex-col gap-[1rem] w-full ">
        <motion.div
              initial={{ x: 700, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
       transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="font-h3"
        >
          About Me
        </motion.div>
        <motion.div
         initial={{ x: 700, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
       transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="font-inner-text">
      Hello there! I’m excited to welcome you to my portfolio.
      I am a passionate Frontend Developer with a strong interest
      in building clean, responsive, and user-friendly web interfaces.
      I enjoy turning designs into functional websites using modern
      frontend technologies.
        </motion.div>
      </div>
      <div className="flex justify-start items-start flex-col gap-[1rem] w-full">
         <motion.div
         initial={{ x: 700, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
       transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="font-h3">
            What I Do
         </motion.div>
         <div className="w-full flex justify-between items-center flex-row gap-[1rem]">
            <div className="flex justify-start items-start flex-col gap-[1rem] bg-[#ffe9cf] rounded-[1.5rem] p-[1rem] ">
              <motion.div
              className="font-h4">
                 Web Development
              </motion.div>
              <motion.div
              className="font-inner-text">
                I build responsive and interactive websites using modern frontend technologies. I focus on clean code, performance, and creating smooth user experiences across all devices.
              </motion.div>
            </div>
            <div className="flex justify-start items-start flex-col gap-[1rem] bg-[#f2f7fb] rounded-[1.5rem] p-[1rem] ">
              <motion.div
              className="font-h4">
                 React & Next.js Development
              </motion.div>
              <motion.div
              className="font-inner-text">
                I develop dynamic and scalable user interfaces using React and Next.js. I enjoy breaking complex UIs into reusable components, managing application state efficiently, and building fast, SEO-friendly web applications.
              </motion.div>
            </div>
         </div>
      </div>
    </motion.div>
  );
}

export default RightPart;
