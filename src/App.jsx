import React, { useState ,useEffect, useRef } from 'react';
import Detail from './Detail'
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'; 
import Form from './Form';
import SplashScreen from './Loader';
import Footer from './Footer';
import Upper from './Upper';

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



  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const [isSplashFinished, setIsSplashFinished] = useState(false);
     useEffect(() => {
  
    const hideSplash = setTimeout(() => {
      setIsSplashFinished(true);
    }, 8000);
    return () => {
      clearTimeout(hideSplash);
    };
  }, []);

  return (

    <div ref={containerRef} className="scroll-container z-50 bg-black justify-center">
      
      {!isSplashFinished && (
    
      <SplashScreen/>
      )}
      {isSplashFinished && (
    <Detail/>
      )}
    
    
    <Upper/>
    <Form/>
    <Footer/>
    </div>
  )
}

export default App