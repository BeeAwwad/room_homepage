import React from 'react'
import Couresel from './couresel'
import About from './about'

const Body = ({ isBackgroundGray }) => {
  return (
  <div className={`md:grid md:grid-rows-auto font-sparta ${isBackgroundGray ? 'brightness-50 bg-gray-100' : ''}`} id='body'>
        <Couresel/>
        <About/>
    </div>
  )
}

export default Body