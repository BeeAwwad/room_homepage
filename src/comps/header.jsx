import React from 'react'
import { useState } from 'react'

const Header = ({ toggleBackground }) => {

  let [open, setOpen] = useState(false);

  const toggleButton = () => {
    setOpen(!open);
    toggleBackground();
  }

  const Links = [
    {name: 'home',link: '/'},
    {name: 'shop',link: '/'},
    {name: 'about',link: '/'},
    {name: 'contact',link: '/'},
  ];

  const burger = <svg className="text-white w-7 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>;

  const close = <svg className="w-7 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>;


  return (
    <>
      <header className="w-full absolute top-0 left-0 items-center p-6 my-5 font-sparta">
        <nav className='flex justify-end md:justify-start md:gap-4 gap-12'>
          <span className='text-2xl md:text-3xl lg:text-4xl md:ml-10 lg:ml-12 xl:ml-16 font-semibold absolute left-1/2 top-5 transform -translate-x-1/2 md:static text-white z-40'>room</span>
          <div onClick={toggleButton} className='z-50 md:hidden absolute left-2 top-5'>
            {open ? close : burger}
          </div>

          <ul className={`text-lg font-semibold text-black md:text-white items-center md:items-start bg-white w-full h-28 md:h-0 absolute p-5 md:p-0 top-0 right-0 md:static flex justify-end md:justify-normal gap-4 transition-all md:mt-2 md:text-sm lg:text-base xl:text-lg duration-400 z-40 ease-in ${open ? '-top-7': 'top-[-300px]'}`}>
            {
              Links.map((link)=>(
                <li className='cursor-pointer relative group'>
                  <a href={link.link}>{link.name}</a>
                  <div className='h-0.5 bg-transparent group-hover:bg-white absolute bottom-0 left-0 right-0 transition-all ease-in-out duration-500'></div>
                </li>
              ))
            }
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header