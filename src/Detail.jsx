import React, { useState, useEffect } from 'react';
import Scroller from './Scroller'
import Form from './Form';
import SplashScreen from './Loader';
import Footer from './Footer';
import Upper from './Upper';



function Detail() {
 
  return (
    <div className=' bg-black relative'>
          <video  className="w-full absolute top-[-1.2%] z-50" autoPlay loop  muted >
             <source src="./front.mp4" type="video/mp4" />
          </video>

    <div className=' pt-[55vw]'>
    <Scroller/>
    
    </div>
    <Upper/>
    <Form/>
    <Footer/>
   
    </div>
  )
}

export default Detail