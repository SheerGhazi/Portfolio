import React from 'react'
import BtnSecondary from '../Button/BtnSecondary'
import { Mail } from 'lucide-react'
import Specialization from './Specialization'

const Services = () => {
  return (
    <div>
      <BtnSecondary title='Services' Icon={Mail} />
      <h1 className="pt-10 text-3xl tracking-widest leading-snug">
        My
         <span className="text-tertiary"> Specializations </span>
      </h1>
      <div className='pt-10 flex flex-col gap-5 '>
        <Specialization title={"Website design"} icon={Mail} desc={"I created digital products with unique ideas use Figma & Framer"} pro={"24 Projects"} />
        <Specialization title={"Website design"} icon={Mail} desc={"I created digital products with unique ideas use Figma & Framer"} pro={"24 Projects"} />
        <Specialization title={"Website design"} icon={Mail} desc={"I created digital products with unique ideas use Figma & Framer"} pro={"24 Projects"} />
      </div>
    </div>
  )
}

export default Services