import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  return (
    <>
      <div
      className='container my-5 mx-auto p-5 md:bg-red-500'>
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
        <div className='col-span-2 p-5 bg-red-500'>Display Grid</div>
        <div className='p-5 bg-red-500'></div>
        <div className='p-5 bg-red-500'></div>
        <div className='p-5 bg-red-500'></div>
        <div className='p-5 bg-red-500'></div>
      </div>

      <p className='lg:text-5xl lg:text-red-500 md:text-2xl md:text-blue-500 sm:text-1xl sm:text-green-500 text-purple-500'>Hello world</p>
    
      <div className='border-purple-500 border-4 border-double rounded-full p-5 bg-red-500'>Border Radius</div>
    
      <div className='shadow-xl shadow-white p-5 m-5'>Box Shadow</div>
    
      <img className='animate-spin rounded-xl border-white border-4 p-5' src="" alt="" />

    </>

  )
}

export default App
