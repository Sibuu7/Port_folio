import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-bl from-indigo-900 via-black to-black text-white py-[30rem] md:py-[8rem]'>

      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div className='pb-8'>
          <p className='text-4xl front-bold inline border-b-4 border-gray-500'>
            About 
          </p>
        </div>

        <p className='text-xl mt-20 tracking-wider'>
       Hello, I'm Siba Sankar Pradhan, a pre-final undergrad at NIT Rourkela pursuing a B.Tech in Electrical Engineering. 

Welcome to my digital corner! I'm passionate and dedicated,  with a strong love for all things tech. I'm not just a coder; I'm a problem solver. I thrive on challenges and enjoy finding elegant solutions to complex problems. I'm a strong believer in the power of teamwork, open communication, and continuous learning. Collaboration with diverse teams has enriched my perspective and enhanced my ability to deliver top-notch solutions.Throughout my career, I've had the privilege of working on a variety of exciting projects. You can explore some of my best work in my portfolio section.
        </p>

      </div>
    </div>
  )
}

export default About
