    import React, { useState } from "react";
import RightPart from "./RightPart";
import ResumeSkills from "./ResumeSkills";
import HeaderNavBar from "./HeaderNavBar";
import PortFolioImagesShower from "./PortFolioImagesShower";
import Contact from "../sections/Contact";
// import HeaderNavBar from "../layout/HeaderNavBar";
// import RightPart from "../layout/RightPart";
// import ResumeSkills from "../layout/ResumeSkills";

function Home() {

  const [active, setActive] = useState(0);

  const renderPage = () => {
    switch (active) {
      case 0:
        return <RightPart />;
      case 1:
        return <ResumeSkills />;
      case 2:
        return <PortFolioImagesShower/>;
      case 3:
        return <Contact/>;
      default:
        return <RightPart />;
    }
  };

  return (
    <div>
        <div className="absolute z-50 top-0 right-0">
      <HeaderNavBar active={active} setActive={setActive} />
      </div>

      {renderPage()}
    </div>
  );
}

export default Home;