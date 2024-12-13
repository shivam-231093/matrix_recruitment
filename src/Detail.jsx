import React from 'react'
import Scroller from './Scroller'
import Form from './Form'
import AboutPage from './About'


function Detail() {
  return (
    <div className='relative'>
    <div className='realtive '>
      <video className='w-full absolute top-[-1.2%] -z-0' autoPlay loop muted src="./front.mp4"></video>
    </div>
    <div className='pt-[96vh]'>

    <Scroller/>
    </div>
    </div>
  )
}

export default Detail