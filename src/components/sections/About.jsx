import { motion } from "framer-motion";
import { pageAnimation } from "../animations/pageAnimation";

function About() {

  return (

    <motion.div
    variants={pageAnimation}
    initial="hidden"
    animate="visible"
    className="mb-10"
    >

      <h1 className="text-3xl font-bold dark:text-white">
        ABOUT ME
      </h1>

      <p className="mt-5 text-gray-600 dark:text-gray-300 max-w-[700px]">
        Hello! I'm a passionate Frontend Developer specializing
        in React, Next.js and modern web technologies.
      </p>

    </motion.div>

  );
}

export default About;