import React, { useEffect, useState } from "react";
import MainPortFolio from "./components/MainPortFolio";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth < 1000) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div>
      {isMobile && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100]">
          <div className="bg-white p-8 rounded-xl text-center shadow-lg">
            <h2 className="text-xl font-bold mb-2">Desktop Only</h2>
            <p>Please open this portfolio on a desktop for the best experience.</p>
          </div>
        </div>
      )}

      <MainPortFolio />
    </div>
  );
}

export default App;

// export default App

// import React from 'react'
// import MainPortFolio from './components/MainPortFolio'
// import { ThemeProvider } from './components/context/ThemeContext.jsx'
// import Home from './components/page/Home'

// function App() {
//   return (
//         <ThemeProvider>

//       <Home />

//     </ThemeProvider>
//   )
// }

// export default App

