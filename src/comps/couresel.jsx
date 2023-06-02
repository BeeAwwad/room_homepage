import React from 'react'
import { useState, useEffect } from 'react';

const Couresel = () => {

    const [current, setCurrent] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const images = [
        {src: './img/desktop-image-hero-1.jpg', mobsrc: './img/mobile-image-hero-1.jpg', title: 'Discover innovative ways to decorate', alt: 'furniture' ,text:`We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`},
        {src: './img/desktop-image-hero-2.jpg', mobsrc: './img/mobile-image-hero-2.jpg', title: 'We are available all across the globe', alt: 'second' ,text:`With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`},
        {src: './img/desktop-image-hero-3.jpg', mobsrc: './img/mobile-image-hero-3.jpg', title: 'Manufactured with the best materials', alt: 'third' ,text:`Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`}
      ]

      const nextSlide = () => {
        if (current === images.length - 1) {
          setCurrent(0);
        } else {
          setCurrent(current + 1);
        }
      };

      function prevSlide() {
        if (current === 0) {
          setCurrent(images.length - 1);
        } else {
          setCurrent(current - 1);
        }
      };

      const handleResize = () => {
        setIsMobile(window.innerWidth <= 767);
      };
    
      useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
      const imageSource = isMobile ? images[current].mobsrc : images[current].src;

  return (
    <>
        <div className="carousel">
            <img src={imageSource} alt={images[current].alt} title={images[current].title} />
        </div>

        <div>
            <div className="inline-flex">
                <button onClick={prevSlide} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                Prev
                </button>
                <button onClick={nextSlide} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                Next
                </button>
            </div>
            <div>
                <h1 className='text-2xl'>{images[current].title}</h1>
                <p>{images[current].text}</p>
            </div>
        </div>
    </>
  )
}

export default Couresel