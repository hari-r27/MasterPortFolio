import React from "react";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";
import ResumeSkills from "./ResumeSkills";
import Home from "./HomeContainerPage";

function Banner() {
  return (
    <div className="flex justify-between items-center
    w-full bg-[#f1f4f9]  h-full p-[1rem] relative">
      <LeftPart/>
      {/* <RightPart/> */}
      <Home/>
      {/* <ResumeSkills/> */}
    </div>
  );
}

export default Banner;
