import React, { useState, useEffect } from 'react';
import Scroller from './Scroller'



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
      
          <video  className="w-full absolute top-[-1.2%] z-10" autoPlay loop  muted >
             <source src="./front.mp4" type="video/mp4" />
          </video>
  
      )}

   
    <div className='pt-[55vw]'>

    <Scroller/>
    </div>
    </div>
  )
}

export default Detail