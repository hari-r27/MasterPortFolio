import { motion } from "framer-motion";
import { pageAnimation } from "../animations/pageAnimation"


function Sidebar() {

  return (

    <motion.div
    variants={pageAnimation}
    initial="hidden"
    animate="visible"
    className="w-[320px] bg-white dark:bg-gray-900
    p-6 rounded-3xl shadow"
    >

      <img
      src="/profile.jpg"
      className="w-32 h-32 mx-auto rounded-xl"
      />

      <h2 className="text-center text-xl font-bold mt-4
      dark:text-white">
        Your Name
      </h2>

      <p className="text-center text-gray-500">
        Frontend Developer
      </p>

      <button
      className="mt-6 w-full py-3 rounded-xl text-white
      bg-gradient-to-r from-orange-500 to-red-500"
      >
        Download Resume
      </button>

    </motion.div>
  );
}

export default Sidebar;