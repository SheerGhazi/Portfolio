import React from 'react'
import BtnSecondary from '../Button/BtnSecondary'
import SkillInner from './SkillInner'

const Skills = () => {
  return (
    <div className='pt-20'>
      <BtnSecondary title={"My Skills"} />
      <h1 className="pt-10 text-3xl tracking-widest leading-snug">
        My
         <span className="text-tertiary"> Skills </span>
      </h1>
      <SkillInner/>
    </div>
  )
}

export default Skills
