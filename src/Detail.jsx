import React, { useState, useEffect } from 'react';
import Scroller from './Scroller'
import Form from './Form'
import AboutPage from './About'


function Detail() {
  const [isSplashFinished, setIsSplashFinished] = useState(false);
   useEffect(() => {

  const hideSplash = setTimeout(() => {
    setIsSplashFinished(true);
  }, 6000);
  return () => {
    clearTimeout(hideSplash);
  };
}, []);


  return (
    <div className='relative'>

{isSplashFinished && (
      
          <video className="w-full absolute top-[-1.2%] -z-0" autoPlay loop  muted src="./front.mp4"></video>
  
      )}

   
    <div className='pt-[55vw]'>

    <Scroller/>
    </div>
    </div>
  )
}

export default Detail