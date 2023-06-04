import React from 'react'
import Couresel from './couresel'
import About from './about'

const Body = () => {
  return (
    <div className='grid grid-rows-2 absolute top-0 left-0' id='body'>
        <Couresel/>
        <About/>
    </div>
  )
}

export default Body