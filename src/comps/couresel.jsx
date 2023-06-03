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
    <div className='absolute top-0 left-0 md:flex md:h-4/6'>
        <div id="carousel" className="w-full relative md:h-full md:w-7/12">
            <img className='w-full md:h-full md:w-full object-cover' src={imageSource} alt={images[current].alt} title={images[current].title} key={images[current].id} />
            <div className="flex justify-end absolute bottom-0 right-0 md:transform md:translate-x-full">
                <button onClick={prevSlide} className="bg-gray-900 hover:bg-gray-700 text-gray-800 font-bold lg:py-5 py-3 lg:px-8 px-6 transition-all ease-out duration-500">
                <svg className='' width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fill-rule="evenodd"/></svg>
                </button>
                <button onClick={nextSlide} className="bg-gray-900 hover:bg-gray-700 text-gray-800 font-bold lg:py-5 py-3 lg:px-8 px-6 transition-all ease-out duration-500">
                <svg  className='' width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fill-rule="evenodd"/></svg>
                </button>
            </div>
        </div>

        <div className='m-7 md:h-full md:w-5/12 md:m-3 lg:m-4 md:p-10 lg:p-24'>
            <h1 className='py-6 md:mb-2 lg:mb-5 text-4xl md:text-2xl lg:text-5xl font-bold'>{images[current].title}</h1>
            <p className='font-medium text-gray-400 text-lg md:text-sm lg:text-lg'>{images[current].text}</p>
            <div className='md:my-2 flex items-center my-4 py-6 hover:text-gray-400 transition-all ease-in duration-300 gap-3'>
                <span className='tracking-[1em] font-bold md:text-sm lg:text-xl text-medium'>SHOP NOW</span>
                <svg className='' width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fill-rule="nonzero"/></svg>
            </div>
        </div>
    </div>
  )
}

export default Couresel