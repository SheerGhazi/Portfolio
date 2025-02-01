import React from 'react'
import { LucideIcon } from 'lucide-react'

interface Iprop {
  title: string;
  icon?: LucideIcon;
  desc: string;
  pro: string;
}

const Specialization = ({ title, icon: Icon, desc, pro }: Iprop) => {
  return (
    <div className='h-fit border border-[#565656] p-8 rounded-3xl hover:border-tertiary'>
      <div className='flex justify-between'>
        <h2 className='text-xl font-thin lg:text-2xl'>{title}</h2>
        {Icon && <Icon className="inline-block ml-2 text-tertiary " />}
      </div>
      <p className='text-primary text-base pt-2 '>{desc}</p>
      <h5 className='pt-8 '>{pro}</h5>
    </div>
  )
}

export default Specialization