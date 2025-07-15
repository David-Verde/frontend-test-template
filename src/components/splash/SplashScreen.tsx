'use client';

import { useState, useEffect } from 'react';

export const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Oculta el splash screen después de 5 segundos (5000ms)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        playsInline 
        onEnded={() => setIsVisible(false)} 
      >
        <source src="/videos/GamerShop.webm" type="video/webm" />
        <source src="/videos/GamerShop.mp4" type="video/mp4" />
      </video>
    </div>
  );
};