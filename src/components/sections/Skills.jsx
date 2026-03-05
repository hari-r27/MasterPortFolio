function Skills() {

  const skills = [
    "React",
    "Next.js",
    "JavaScript",
    "TailwindCSS",
    "HTML",
    "CSS",
    "Ruby on Rails",
    "Git",
    "REST API"
  ];

  return (

    <div className="mt-12">

      <h2 className="text-3xl font-bold dark:text-white mb-6">
        Skills
      </h2>

      <div className="flex flex-wrap gap-3">

        {skills.map((skill,index)=>(
          <span
          key={index}
          className="bg-gray-200 dark:bg-gray-700
          px-4 py-2 rounded-lg text-sm dark:text-white"
          >
            {skill}
          </span>
        ))}

      </div>

    </div>

  );
}

export default Skills;