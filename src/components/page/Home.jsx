import React from 'react'
import Sidebar from '../layout/Sidebar';
import Navbar from '../layout/Navbar';
import About from '../sections/About';
import Resume from '../sections/Resume';
import Work from '../sections/Work';
import Contact from '../sections/Contact';
// import Sidebar from "../components/layout/Sidebar";
// import Navbar from "../components/layout/Navbar";

// import About from "../components/sections/About";
// import Resume from "../components/sections/Resume";
// import Work from "../components/sections/Work";
// import Contact from "../components/sections/Contact";

function Home() {

  return (

    <div className="flex gap-6 p-6 bg-gray-100 dark:bg-black min-h-screen">

      <Sidebar />

      <div className="flex-1 bg-white dark:bg-gray-900 rounded-3xl p-8">

        <Navbar />

        <About />
        <Resume />
        <Work />
        <Contact />

      </div>

    </div>

  );
}

export default Home;


