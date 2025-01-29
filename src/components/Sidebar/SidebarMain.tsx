import React from 'react'
import Profile_Image from "../../../public/me.jpg"
import Image from 'next/image'

const SidebarMain = () => {
  return (
    <div className='p-4 content-center text-center'>
        <div className='flex justify-center'>
      <Image className='rounded-3xl w-64 ' src={Profile_Image} alt="" />
      </div>
      <div className='leading-loose pt-5  text-gray-300 text-2xl'>
        <h2>hello@drake.design</h2>
        <h2>Base in Los Angeles, CA</h2>
        <p className='text-primary text-sm pt-4'>© 2022 Drake. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default SidebarMain
