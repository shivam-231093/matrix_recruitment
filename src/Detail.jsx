import React, { useState, useEffect } from 'react';
import Scroller from './Scroller'
import Form from './Form';
import SplashScreen from './Loader';
import Footer from './Footer';
import Upper from './Upper';



function Detail() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Track mouse movement
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
 
  return (
    <div className=' bg-black relative'>
      <div
        className="fixed opacity-0 lg:opacity-100 pointer-events-none"
        style={{
          width: '5vw',
          height: '5vw',
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.005s linear',
          zIndex: 1000,
        }}
      >
        <img className='w-full h-full object-contain' src="./mascort.png" alt="" />
      </div>
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