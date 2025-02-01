import React from 'react'
import Introduction from './Introduction'
import Resume from './Resume'
import About from './About'
import Services from './Services'
import Skills from './Skills'

const Main = () => {
  return (
    <div className='pt-10  pb-40 '  >
      <Introduction/>
      <About/>
      <Resume/>
      <Services/>
      <Skills/>
     
    </div>
  )
}

export default Main
