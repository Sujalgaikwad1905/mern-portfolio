import React from 'react'

const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row bg-gray-200 item-center justify-betweem p-8 min-h-[80vh] '>
      <div className='max-w-xl text-center md:text-left'>
        <h1 className='text-4xl md:text-5xl font-bold mb-4 text-gray-700'>
          Hi, I'm Sujal.
        </h1>
        <p className='text-lg md:text-xl mb-6 text-gray-600'>
          I'm a passionate MERN STACK DEVELOPER who builds Meaningfull digital experiences.
        </p>
        <div className='flex justify-center md:justify-start gap-4'
        >
          <a href='#projects' className='bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300'>
            View Projects
          </a>
          <a href='./resume.pdf' className='bg-gray-300 flex px-6 py-2 rounded hover:bg-gray-400 transition duration-300'>
            Download Resume
          </a>
        
        </div>
        <div className='mt-8 md:mt-4'>
            <img src="../photos/me.jpg" alt="profile" className='w-64 h-64 object-contain' />
          </div>


      </div>
      


    </section>
  )
}

export default Hero
