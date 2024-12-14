import React, { useState, useEffect } from 'react';
import Scroller from './Scroller'



function Detail() {
 
  return (
    <div className=' bg-blackrelative'>
          <video  className="w-full absolute top-[-1.2%] z-50" autoPlay loop  muted >
             <source src="./front.mp4" type="video/mp4" />
          </video>

    <div className=' pt-[55vw]'>
    <Scroller/>
    
    </div>

   
    </div>
  )
}

export default Detail