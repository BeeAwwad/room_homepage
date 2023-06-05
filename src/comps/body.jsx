import React from 'react'
import Couresel from './couresel'
import About from './about'
import { useState, useEffect } from 'react'

const Body = ({ isBackgroundGray }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (
  <div className={`md:grid md:grid-rows-auto font-sparta ${isMobile && isBackgroundGray ? 'brightness-50 bg-gray-100' : ''}`} id='body'>
        <Couresel/>
        <About/>
    </div>
  )
}

export default Body