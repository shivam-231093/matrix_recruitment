import React, { useState, useEffect } from 'react';

const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 5000); // Set splash duration to 5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!showSplash) return null; // Hide splash screen after timer

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      
    </div>
  );
};

export default SplashScreen;
