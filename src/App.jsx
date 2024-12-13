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


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);


  return (

    <div ref={containerRef} className="scroll-container justify-center">
      <SplashScreen/>
    <Detail/>
    
    
    <Upper/>
    <Form/>
    <Footer/>
    </div>
  )
}

export default App