import React from 'react'

const App = () => {
  return (
    <div>
      <div className='text-3xl font-bold underline text-center text-green-400 border-4 border-blue-600'>
      Working tailwind
    </div>
    <div className='text-3xl text-center text-red-500 border-b-4 border-l-3 border-black '>
      Working tailwind2
    </div>
    <div className='inline-block p-4 text-black bg-white border rounded-lg shadow-md transition hover:ease-in'>
      Hello everyone
      <button className='px-3 py-2 rounded-lg shadow-md cursor-pointer bg-cyan-400 animate-bounce'>View more</button>
    </div>
   
    </div>
   
  )
}

export default App
