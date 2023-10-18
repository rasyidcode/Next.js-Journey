import React from 'react'
import { CustomButton } from '.'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-5 relative z-0
      max-w-[1440px] mx-auto'>
      {/* Hero Title */}
      <div className='flex-1 pt-36 px-6 sm:px-16'>
        <h1 className='text-5xl sm:text-6xl 2xl:text-7xl leading-normal 
          sm:leading-normal 2xl:leading-normal font-extrabold'>
          Find, book, rent a car -- quick and super easy!
        </h1>
        <p className='text-3xl leading-normal text-neutral-600 
          font-light mt-5'>
            Streamline your car rental experience with our effortless booking process.
        </p>
        <CustomButton
          title='Explore Cars'
          customStyle='bg-teal-600 text-white rounded-full
           mt-10'/>
      </div>

      {/* Hero Image */}
      <div className='flex-[1.5] flex justify-end items-end w-full xl:h-screen'>
        <div className='h-[590px] xl:h-full relative w-11/12 xl:w-full z-0'>
          <Image
            src='/hero.png'
            alt='hero'
            className='object-contain'
            fill />
        </div>

        {/* Overlay */}
        <div className={`bg-[url('/hero-bg2.png')] h-[590px] 
          xl:h-screen w-full bg-repeat-round absolute -z-10 xl:-top-24
          xl:-right-1/2 -right-1/4 overflow-hidden`}></div>
      </div>
    </div>
  )
}

export default Hero