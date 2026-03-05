import { motion } from "framer-motion";
import { pageAnimation } from "../animations/pageAnimation"

function Resume() {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="visible"
      className="mt-12"
    >
      <h2 className="text-3xl font-bold dark:text-white mb-8">
        Resume
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Education */}
        <div className="bg-orange-100 dark:bg-gray-800 p-6 rounded-xl">
          <p className="text-gray-500">2020 – 2024</p>

          <h3 className="text-xl font-semibold dark:text-white">
            B.Tech – Information Technology
          </h3>

          <p className="text-gray-600 dark:text-gray-300">
            Mahendra Institute of Technology
          </p>

          <p className="text-gray-500">
            CGPA: 8.27
          </p>
        </div>

        {/* Experience */}
        <div className="bg-orange-100 dark:bg-gray-800 p-6 rounded-xl">
          <p className="text-gray-500">Dec 2024 – Present</p>

          <h3 className="text-xl font-semibold dark:text-white">
            Frontend Developer
          </h3>

          <p className="text-gray-600 dark:text-gray-300">
            Begalileo
          </p>
        </div>

      </div>
    </motion.div>
  );
}

export default Resume;