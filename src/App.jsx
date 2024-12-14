import React, { useState ,useEffect, useRef } from 'react';
import Detail from './Detail'
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'; 
import Form from './Form';
import SplashScreen from './Loader';
import Footer from './Footer';
import Upper from './Upper';

function App() {
  //


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

    <div className="">
      
      {!isSplashFinished && (
    
      <SplashScreen/>
      )}
      
      {isSplashFinished && (
    <>
    
    <Detail/>
    
    </>
  
    )}
    
      
    
    
    
    </div>
  )
}

export default App