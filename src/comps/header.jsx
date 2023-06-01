import React from 'react'

const Header = () => {
  return (
    <>
      <header className="items-center flex justify-between p-5 my-5">
        <nav>
          <div id='burger' className='md:hidden'>
            <svg className="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>

          <ul className="flex gap-8">
            <li>home</li>
            <li>shop</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header