import React, { useState, useEffect } from 'react';

const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false); // State to manage opacity for fade-out effect

  useEffect(() => {
    // Wait for the window to completely load before starting the timer
    const handleLoad = () => {
      const timer = setTimeout(() => {
        setFadeOut(true); // Trigger fade-out after 5 seconds
      }, 7000); // Wait 7 seconds before starting fade-out

      const hideSplash = setTimeout(() => {
        setShowSplash(false); // Hide splash screen after fade-out
      }, 7500); // Wait 7.5 seconds for complete transition

      return () => {
        clearTimeout(timer);
        clearTimeout(hideSplash);
      };
    };

    // Attach the onload event to start the timer
    window.onload = handleLoad;

    // Clean up the event listener on component unmount
    return () => {
      window.onload = null;
    };
  }, []);

  if (!showSplash) return null; // Hide splash screen after the timer

  return (
    <div
      className={`fixed w-full h-screen flex items-center justify-center bg-black z-50 transition-opacity duration-1000 ease-in-out ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        preload="metadata"
        className="absolute w-full h-full "
      >
        <source src="./landin.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
    </div>
  );
};

export default SplashScreen;
