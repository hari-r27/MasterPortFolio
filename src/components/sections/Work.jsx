import { motion } from "framer-motion";
import { pageAnimation } from "../animations/pageAnimation"

function Work() {

const projects = [
{
title:"Student Learning Games",
tech:"React"
},
{
title:"Math Learning Tools",
tech:"React"
},
{
title:"3D Learning Components",
tech:"Three.js"
},
{
title:"Parent Dashboard",
tech:"Ruby on Rails"
}
];

return(

<motion.div
variants={pageAnimation}
initial="hidden"
animate="visible"
className="mt-12"
>

<h2 className="text-3xl font-bold dark:text-white mb-8">
Portfolio
</h2>

<div className="grid md:grid-cols-2 gap-6">

{projects.map((project,index)=>(
<div
key={index}
className="bg-orange-100 dark:bg-gray-800
p-6 rounded-xl hover:scale-105
transition duration-300"
>

<h3 className="text-xl font-semibold dark:text-white">
{project.title}
</h3>

<p className="text-gray-500">
{project.tech}
</p>

</div>
))}

</div>

</motion.div>
)

}

export default Work