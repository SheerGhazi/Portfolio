import React from 'react'
import Figma from "../../../public/figma.png"
import Image from 'next/image'

const SkillInner = () => {
  return (
    <div className=''>
      <div className='p-4 border border-[#565656] rounded-3xl w-fit'>
        <Image src={Figma} alt="" />
        <h2 className='text-tertiary text-xl'>92%</h2>
      </div>
    </div>
  )
}

export default SkillInner
