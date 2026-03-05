import React from "react";
import { motion } from "framer-motion";

function PortFolioImagesShower() {

  const sections = [
    {
      title: "English Games",
      projects: [
        {
          title: "Word Builder",
          description: "A fun English game to build words and improve vocabulary."
        },
        {
          title: "Spell Checker Game",
          description: "Interactive spelling challenge game for students."
        }
      ]
    },

    {
      title: "Math Tools",
      projects: [
        {
          title: "Calculator Tool",
          description: "A responsive calculator for quick mathematical operations."
        },
        {
          title: "Unit Converter",
          description: "Convert different measurement units easily."
        }
      ]
    },

    {
      title: "Math Games",
      projects: [
        {
          title: "Number Guessing Game",
          description: "Guess the correct number with hints."
        },
        {
          title: "Math Quiz Game",
          description: "Solve math questions and test your speed."
        }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ x: 400, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white w-[60%] rounded-[1.5rem] absolute right-[1rem] bottom-[1rem] top-[1rem] p-[2rem] overflow-y-auto flex flex-col gap-[2rem]"
    >
      <h2 className="font-h3">Portfolio</h2>

      {sections.map((section, i) => (

        <div key={i} className="flex flex-col gap-[1rem]">

          {/* Section Title */}
          <h3 className="font-h4 text-orange-500">
            {section.title}
          </h3>

          {/* Project Cards */}
          <div className="grid grid-cols-2 gap-[1.5rem]">

            {section.projects.map((project, index) => (

              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-[#f2f7fb] rounded-[1rem] shadow-md p-[1rem] flex flex-col gap-[0.5rem] cursor-pointer"
              >

                {/* Placeholder Image */}
                <div className="h-[140px] bg-gray-200 rounded-[0.6rem] flex justify-center items-center text-gray-500 text-sm">
                  Screenshot Coming Soon
                </div>

                {/* Title */}
                <h4 className="font-h5">
                  {project.title}
                </h4>

                {/* Description */}
                <p className="font-inner-text text-gray-600 text-sm">
                  {project.description}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      ))}

    </motion.div>
  );
}

export default PortFolioImagesShower;