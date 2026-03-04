import React from "react";
import { motion } from "framer-motion";
function ResumeSkills() {
  return (
    <motion.div
      initial={{ x: 400, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="bg-white w-[60%]  rounded-[1.5rem] flex justify-start items-center flex-col gap-[1rem] absolute right-[1rem] bottom-[1rem] top-[1rem] p-[2rem]"
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
          Resume
        </motion.div>
        <div className="flex justify-start items-center flex-row
        border border-red-500 w-full">
            <div className="flex justify-start items-center flex-col
        border border-green-500 gap-[1rem]">
               <h3 className="font-h5">Education</h3>
               <div className="justify-start items-center flex-col
               bg-[#ffe2ba] p-[1rem] w-full rounded-[0.5rem]">
                    <span>
               </div>
            </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ResumeSkills;
