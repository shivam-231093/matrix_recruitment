import React from 'react'
import AboutPage from './About'

function Scroller() {
  return (
    <div >
    <div className=' w-full mb-16 inline-flex overflow-y-hidden overflow-x-hidden '>
        <div className=' text-[8vw] text-stroke font-sans tracking-tighter font-bold  inline-flex gap-8 mr-8 animate-slideIn'>
            <h4 className='hover:bg-custom-text font-bold bg-clip-text  text-transparent inline  bg-contain transition duration-3000 ease-in-out'>MATRIX </h4>
            <h4 className='hover:bg-custom-text font-bold bg-clip-text  text-transparent inline  bg-contain transition duration-3000 ease-in-out'>THE</h4> 
            <h4 className='hover:bg-custom-text font-bold bg-clip-text  text-transparent inline  bg-contain transition duration-3000 ease-in-out'>TECHNICAL</h4>
            <h4 className='hover:bg-custom-text font-bold bg-clip-text  text-transparent inline  bg-contain transition duration-3000 ease-in-out'>COMMUNITY</h4>
            <h4 className='hover:bg-custom-text font-bold bg-clip-text  text-transparent inline  bg-contain transition duration-3000 ease-in-out'>OF</h4>
            <h4 className='hover:bg-custom-text font-bold bg-clip-text  text-transparent inline  bg-contain transition duration-3000 ease-in-out'>JEC</h4>
        </div>
        <div className=' text-[8vw] text-stroke font-sans tracking-tighter font-bold inline-flex gap-8 animate-slideIn'>
            <h4 className='hover:bg-custom-text font-bold bg-clip-text  text-transparent inline  bg-contain transition duration-3000 ease-in-out'>MATRIX </h4>
            <h4 className='hover:bg-custom-text font-bold bg-clip-text  text-transparent inline  bg-contain transition duration-3000 ease-in-out'>THE</h4> 
            <h4 className='hover:bg-custom-text font-bold bg-clip-text  text-transparent inline  bg-contain transition duration-3000 ease-in-out'>TECHNICAL</h4>
            <h4 className='hover:bg-custom-text font-bold bg-clip-text  text-transparent inline  bg-contain transition duration-3000 ease-in-out'>COMMUNITY</h4>
            <h4 className='hover:bg-custom-text font-bold bg-clip-text  text-transparent inline  bg-contain transition duration-3000 ease-in-out'>OF</h4>
            <h4 className='hover:bg-custom-text font-bold bg-clip-text  text-transparent inline  bg-contain transition duration-3000 ease-in-out'>JEC</h4>
        </div>
    </div>
    <AboutPage/>
    </div>
  )
}

export default Scroller