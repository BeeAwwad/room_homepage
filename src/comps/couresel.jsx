import React from 'react'
import { useState, useEffect } from 'react';

const Couresel = () => {

    const [current, setCurrent] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const images = [
        {id: 1, src: './img/desktop-image-hero-1.jpg', mobsrc: './img/mobile-image-hero-1.jpg', title: 'Discover innovative ways to decorate', alt: 'furniture' ,text:`We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`},
        {id: 2, src: './img/desktop-image-hero-2.jpg', mobsrc: './img/mobile-image-hero-2.jpg', title: 'We are available all across the globe', alt: 'second' ,text:`With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`},
        {id: 3, src: './img/desktop-image-hero-3.jpg', mobsrc: './img/mobile-image-hero-3.jpg', title: 'Manufactured with the best materials', alt: 'third' ,text:`Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`}
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
    <div className='absolute top-0 left-0'>
        <div id="carousel" className="w-full relative">
            <img className='w-full' src={imageSource} alt={images[current].alt} title={images[current].title} key={images[current].id} />
            <div className="flex justify-end absolute bottom-0 right-0 ">
                <button onClick={prevSlide} className="bg-gray-900 hover:bg-gray-700 text-gray-800 font-bold py-2 px-4 transition-all ease-out duration-500">
                <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fill-rule="evenodd"/></svg>
                </button>
                <button onClick={nextSlide} className="bg-gray-900 hover:bg-gray-700 text-gray-800 font-bold py-2 px-4 transition-all ease-out duration-500">
                <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fill-rule="evenodd"/></svg>
                </button>
            </div>
        </div>

        <div>
            <div>
                <h1 className='text-2xl'>{images[current].title}</h1>
                <p>{images[current].text}</p>
                <div className='flex items-center'>
                    <span>SHOP NOW</span>
                    <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fill-rule="nonzero"/></svg>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Couresel