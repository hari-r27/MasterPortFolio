import React from 'react'
import { motion } from "framer-motion";
import { ProfileLottie } from './lottie/ProfileLottie';
function LeftPart() {
  return (
    <motion.div
    initial={{ y: 500, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
          transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
     className='bg-white rounded-[1.5rem] w-[30%] h-full flex justify-start items-center flex-col gap-[1rem] p-[0.8rem] relative'>
        <div className='absolute top-[-5rem]'>
                  <ProfileLottie/>
        </div>
        {/* name div */}
       <div className=' w-full p-[0.6rem]'>
           <h2 className='font-h3'>HariHaran R</h2>
           <h3 className='font-body'>Frontend Developer</h3>
       </div>
       {/* social link div */}
       <div className=' w-full p-[0.6rem]'>

       </div>
       {/* personal details */}
       <div className=' w-full p-[0.6rem] flex justify-center items-center '>
           <button
           className='bg-[linear-gradient(to_right,#f83600_0%,#f9d423_100%)] font-body text-white p-[0.5rem]
           rounded-[1rem]'
           >Download</button>
       </div>
    </motion.div>
  )
}

export default LeftPart
