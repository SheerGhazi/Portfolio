import React from 'react'
import Introduction from './Introduction'
import Resume from './Resume'
import About from './About'

const Main = () => {
  return (
    <div className='pt-10  pb-40 '  >
      <Introduction/>
      <About/>
      <Resume/>
     
    </div>
  )
}

export default Main
