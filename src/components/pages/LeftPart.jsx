import React from "react";
import { motion } from "framer-motion";
import { ProfileLottie } from "./lottie/ProfileLottie";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

function LeftPart() {
  return (
    <motion.div
      initial={{ y: 500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="bg-white rounded-[1.5rem] w-[30%] h-full flex flex-col gap-[1.5rem] p-[1.5rem] relative shadow-lg"
    >
      {/* Profile Animation */}
      <div className="absolute top-[-5rem] left-[50%] translate-x-[-50%]">
        {/* <ProfileLottie /> */}
      </div>

      {/* Name */}
      <div className="w-full text-center mt-[3rem]">
        <h2 className="font-h3">HariHaran R</h2>
        <h3 className="font-body text-gray-500">Frontend Developer</h3>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-[1rem]">

        <a
          href="#"
          className="w-[40px] h-[40px] flex items-center justify-center
          border rounded-full text-[18px]
          hover:bg-orange-500 hover:text-white hover:border-orange-500
          transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="#"
          className="w-[40px] h-[40px] flex items-center justify-center
          border rounded-full text-[18px]
          hover:bg-orange-500 hover:text-white hover:border-orange-500
          transition"
        >
          <FaGithub />
        </a>

        <a
          href="#"
          className="w-[40px] h-[40px] flex items-center justify-center
          border rounded-full text-[18px]
          hover:bg-orange-500 hover:text-white hover:border-orange-500
          transition"
        >
          <SiIndeed />
        </a>

      </div>

      {/* Contact Cards */}
      <div className="flex flex-col gap-[1rem]">

        <div className="flex items-center gap-[0.8rem] bg-[#f2f7fb] p-[0.8rem] rounded-[0.8rem]">
          <MdLocationOn className="text-orange-500 text-[20px]" />
          <span className="font-inner-text text-gray-700">
            Tamil Nadu, India
          </span>
        </div>

        <div className="flex items-center gap-[0.8rem] bg-[#ffe9cf] p-[0.8rem] rounded-[0.8rem]">
          <MdPhone className="text-orange-500 text-[20px]" />
          <span className="font-inner-text text-gray-700">
            +91 8248904080
          </span>
        </div>

        <div className="flex items-center gap-[0.8rem] bg-[#f2f7fb] p-[0.8rem] rounded-[0.8rem]">
          <MdEmail className="text-orange-500 text-[20px]" />
          <span className="font-inner-text text-gray-700">
            hariselamuthu@gmail.com
          </span>
        </div>

      </div>

      {/* Resume Button */}
      <div className="mt-auto flex justify-center">

        <button
          className="w-full
          bg-gradient-to-r from-orange-500 to-red-500
          text-white font-body
          py-[0.7rem]
          rounded-[0.8rem]
          hover:scale-105
          transition"
        >
          Download Resume
        </button>

      </div>

    </motion.div>
  );
}

export default LeftPart;