import React from 'react'
import Banner from './pages/Banner'
import HeaderNavBar from './pages/HeaderNavBar'
import HeaderNav from './portFolio/HeaderNav'

function MainPortFolio() {
  return (
    <div className='w-full  bg-[#F2F5F9] h-[100vh] p-[2rem] flex justify-start items-center flex-col'>
      <div className='w-full flex justify-center items-center flex-col h-full bg-[#F2F5F9]  rounded-[1.5rem] overflow-hidden'>
        {/* <HeaderNavBar/> */}
       <Banner/>
      </div>
      {/* <HeaderNav/> */}
    </div>
  )
}

export default MainPortFolio
