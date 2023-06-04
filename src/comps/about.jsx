import React from 'react'

const About = () => {
  return (
    <div className='row-span-1 md:h-fit lg:h-[47%]'>
        <div id='about' className='md:h-full flex flex-col md:flex-row w-full'>
            <img className='md:w-[30%]' src="./img/image-about-dark.jpg" alt="light-image" />
            <div className='md:w-2/5 m-5 p-3  lg:p-6'>
                <h2 className='text-base md:text-sm font-bold uppercase tracking-[.3em]'>About our furniture</h2>
                <p className='md:text-xs text-base text-gray-400 py-2 lg:text-sm'> Our multifunctional collection blends design and function to suit your individual taste.
                Make each room unique, or pick a cohesive theme that best express your interests and what
                inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                or anything in between. Product specialists are available to help you create your dream space.</p>
            </div>
            <img className='md:w-[30%]' src="./img/image-about-light.jpg" alt="dark-image" />
        </div>
    </div>
  )
}

export default About