import React from 'react'
import Profile_Image from "../../../public/me.jpg"
import Image from 'next/image'

const SidebarMain = () => {
  return (
    <div className='p-4 content-center text-center xl:p-2'>
        <div className='flex justify-center'>
      <Image className='rounded-3xl w-64 ' src={Profile_Image} alt="" />
      </div>
      <div className='leading-loose pt-5  text-gray-300 text-2xl xl:text-xl '>
        <h2 className=''>sher.ghazi2192@gmail.com</h2>
        <h2>Base in Lahore, Pakistan</h2>
        <p className='text-primary text-sm pt-4'>© 2022 Ghazi. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default SidebarMain
