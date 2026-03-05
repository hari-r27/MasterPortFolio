// import React from "react";

// function HeaderNavBar() {
//   const icon = (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="currentColor"
//       viewBox="0 0 24 24"
//       className="w-[30px] h-[30px]"
//     >
//       <path d="M12,11A5,5,0,1,0,7,6,5.006,5.006,0,0,0,12,11Zm0-8A3,3,0,1,1,9,6,3,3,0,0,1,12,3ZM3,22V18a5.006,5.006,0,0,1,5-5h8a5.006,5.006,0,0,1,5,5v4a1,1,0,0,1-2,0V18a3,3,0,0,0-3-3H8a3,3,0,0,0-3,3v4a1,1,0,0,1-2,0Z"/>
//     </svg>
//   );
//     const icon2 = (
//     <svg xmlns="http://www.w3.org/2000/svg" 
//       fill="currentColor"
//       viewBox="0 0 24 24"
//       className="w-[30px] h-[30px]"><path d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,2a9.01,9.01,0,0,1,8.941,8H16a1,1,0,0,0-.929.629L14,14.307,10.929,6.629a1,1,0,0,0-1.857,0L7.323,11H3.059A9.01,9.01,0,0,1,12,3Zm0,18a9.01,9.01,0,0,1-8.941-8H8a1,1,0,0,0,.928-.629L10,9.692l3.071,7.679a1,1,0,0,0,1.858,0L16.677,13h4.264A9.01,9.01,0,0,1,12,21Z"/></svg>
//   );

//   return (
//     <div className="w-full flex justify-end items-center p-[0.5rem]">
//     <div className="
//     flex justify-end items-center gap-[1rem] flex-row
//      w-fit border border-gray-300 shadow-lg p-[0.8rem] rounded-[1.5rem]">
//       <div className="
//       w-[3rem] 
//         flex justify-center items-center
//         border 
//         cursor-pointer
//         text-black
//         hover:bg-orange-500
//         hover:text-white
//         transition-colors duration-200
//         rounded-[50%]
//         p-[0.4rem]
//       ">
//         {icon}
//       </div>
//             <div className="
//       w-[3rem] 
//         flex justify-center items-center
//         border 
//         cursor-pointer
//         text-black
//         hover:bg-orange-500
//         hover:text-white
//         transition-colors duration-200
//         rounded-[50%]
//         p-[0.4rem]
//       ">
//         {icon2}
//       </div>
//             <div className="
//       w-[3rem] 
//         flex justify-center items-center
//         border 
//         cursor-pointer
//         text-black
//         hover:bg-orange-500
//         hover:text-white
//         transition-colors duration-200
//         rounded-[50%]
//         p-[0.4rem]
//       ">
//         {icon}
//       </div>
//             <div className="
//       w-[3rem] 
//         flex justify-center items-center
//         border 
//         cursor-pointer
//         text-black
//         hover:bg-orange-500
//         hover:text-white
//         transition-colors duration-200
//         rounded-[50%]
//         p-[0.4rem]
//       ">
//         {icon2}
//       </div>
//     </div>
//     </div>
//   );
// }

// export default HeaderNavBar;

import React from "react";

function HeaderNavBar({ active, setActive }) {

  const iconClass = (index) =>
    `w-[2rem] h-[2rem] flex justify-center items-center border cursor-pointer 
    transition-colors duration-200 rounded-[50%] p-[0.4rem]
    ${active === index ? "bg-orange-500 text-white" : "text-black hover:bg-orange-500 hover:text-white"}
    `;

  const icon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
      viewBox="0 0 24 24" className="w-[30px] h-[30px]">
      <path d="M12,11A5,5,0,1,0,7,6,5.006,5.006,0,0,0,12,11Zm0-8A3,3,0,1,1,9,6,3,3,0,0,1,12,3ZM3,22V18a5.006,5.006,0,0,1,5-5h8a5.006,5.006,0,0,1,5,5v4a1,1,0,0,1-2,0V18a3,3,0,0,0-3-3H8a3,3,0,0,0-3,3v4a1,1,0,0,1-2,0Z"/>
    </svg>
  );

  const icon2 = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
      viewBox="0 0 24 24" className="w-[30px] h-[30px]">
      <path d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,2a9.01,9.01,0,0,1,8.941,8H16a1,1,0,0,0-.929.629L14,14.307,10.929,6.629a1,1,0,0,0-1.857,0L7.323,11H3.059A9.01,9.01,0,0,1,12,3Zm0,18a9.01,9.01,0,0,1-8.941-8H8a1,1,0,0,0,.928-.629L10,9.692l3.071,7.679a1,1,0,0,0,1.858,0L16.677,13h4.264A9.01,9.01,0,0,1,12,21Z"/>
    </svg>
  );

  return (
    <div className="w-full flex justify-end items-center p-[0.5rem]">
      <div className="flex gap-[1rem]   p-[0.8rem] rounded-[1.5rem]">

        <div className={iconClass(0)} onClick={() => setActive(0)}>
          {icon}
        </div>

        <div className={iconClass(1)} onClick={() => setActive(1)}>
          {icon2}
        </div>

        <div className={iconClass(2)} onClick={() => setActive(2)}>
          {icon}
        </div>

        <div className={iconClass(3)} onClick={() => setActive(3)}>
          {icon2}
        </div>

      </div>
    </div>
  );
}

export default HeaderNavBar;