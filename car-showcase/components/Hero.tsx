'use client'

import React from 'react'
import { CustomButton } from '.'
import Image from 'next/image'

const Hero = () => {
  const handleScroll = () => { }

  return (
    <>
      {/* hero */}
      <div className='flex flex-col xl:flex-row gap-5 relative z-0
      max-w-[1440px] mx-auto'>

        <div className='flex-1 pt-36 px-6 sm:px-16'>
          {/* hero__title */}
          <h1 className='text-[50px] sm:text-[64px] 2xl:text-[72px] font-extrabold'>
            Find, book, rent a car -- quick and super easy!
          </h1>

          {/* hero__subtitle */}
          <p className='text-[27px] text-[#2B2C35] font-light mt-5'>
            Streamline your car rental experience with our effortless booking process.
          </p>

          <CustomButton
            title='Explore Cars'
            customStyle='bg-[#2B59FF] text-white rounded-full mt-10'
            onClick={handleScroll} />
        </div>

        {/* hero__image-container */}
        <div className='xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen'>
          {/* hero__image */}
          <div className='relative xl:w-full w-[90%] xl:h-full h-[590px] z-0'>
            <Image
              src='/hero.png'
              alt='hero'
              className='object-contain'
              fill />
          </div>

          {/* hero__image-overlay */}
          <div className={`absolute xl:-top-24 -right-1/4 xl:-right-1/2 
            bg-[url('/hero-bg.png')] bg-repeat-round h-[590px]
            -z-10 w-full xl:h-screen overflow-hidden`}></div>
        </div>
      </div>
    </>
  )
}

export default Hero