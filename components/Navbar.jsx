import React from 'react'

const Navbar = () => {
  return (
    <>
      <header className='bg-white container mx-auto shadow p-4 flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>My Portfolio</h1>

        <nav className='flex space-x-4'>
            <button className='text-sm font-medium hover: text-blue-600'>Blog</button>
            <button className='text-sm font-medium hover: text-blue-600'>Resume</button>
            <button className='text-sm font-medium hover: text-blue-600'>Projects</button>
            <button className='text-sm font-medium hover: text-blue-600'>Contact</button>

        </nav>

      </header>
    </>
  )
}

export default Navbar
