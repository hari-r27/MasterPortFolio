import React from 'react'
import Banner from './pages/Banner'
import HeaderNavBar from './pages/HeaderNavBar'

function MainPortFolio() {
  return (
    <div className='w-full bg-[#FF9C1A]  h-[100vh] p-[2rem] flex justify-center items-center flex-col'>
      <div className='w-full flex justify-center items-center flex-col h-full bg-[#F2F5F9] shadow-2xl  rounded-[1.5rem] overflow-hidden'>
        <HeaderNavBar/>
       <Banner/>
      </div>
    </div>
  )
}

export default MainPortFolio
