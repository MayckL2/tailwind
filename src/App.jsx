import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div
      className='container my-5 mx-auto p-5 md:bg-red-500 w-20'>
      </div>

      <div className='md:columns-3 sm:columns-2 gap-3'>
        <div className='p-5 bg-red-500'></div>
        <div className='p-5 bg-red-500'></div>
        <div className='p-5 bg-red-500'></div>
        <div className='p-5 bg-red-500'></div>
        <div className='p-5 bg-red-500'></div>
        <div className='p-5 bg-red-500'></div>
      </div>
 <br />
      <div className='grid grid-cols-2 gap-4'>
        <div className='col-span-2 p-5 bg-red-500'></div>
        <div className='p-5 bg-red-500'></div>
        <div className='p-5 bg-red-500'></div>
        <div className='p-5 bg-red-500'></div>
        <div className='p-5 bg-red-500'></div>
      </div>

      <p className='lg:text-5xl lg:text-red-500 md:text-2xl md:text-blue-500 sm:text-1xl sm:text-green-500 text-purple-500'>Hello world bitches</p>
    
      
    </>

  )
}

export default App
