import React, { useState ,useEffect, useRef } from 'react';

import Loader from './Loader';
import InfiniteSlider from "./InfiniteSlider";
import Upper from './upper'
import Detail from './Detail'
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'; 
import Form from './Form';
import SplashScreen from './Loader';
import Footer from './Footer';

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialize Locomotive Scroll
    const locomotiveScroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
    });

    // Update Locomotive Scroll when the component is updated
    locomotiveScroll.on('scroll', () => {
      console.log('Scrolling...');
    });

    // Cleanup on component unmount
    return () => {
      locomotiveScroll.destroy();
    };
  }, [])


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);


  return (

    <div ref={containerRef} className="scroll-container">
      <SplashScreen/>
    <Detail/>
    
    
   
    <Form/>
    <Footer/>
    </div>
  )
}

export default App