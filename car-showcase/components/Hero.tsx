'use client'

import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'

const Hero = () => {
  const handleScroll = () => {
    const test = 't\'s'
  }
  return (
    <div className='flex xl:flex-row flex-col gap-5 
      relative z-0 max-w-[1440px] mx-auto'>
      <div className='flex-1 pt-36 px-6 sm:px-16'>
        <h1 className='text-[50px] sm:text-[64px] 2xl:text-[72px] font-extrabold'>
          Find, book, or rent a car -- quickly and easily!
        </h1>

        <p className='text-[27px] text-[#2B2C35] font-light m-5'>
          Streamline your car rental experience with our
          effortless booking process
        </p>

        <CustomButton
          title='Explore Cars'
          style='bg-[#2B59FF] text-white rounded-full
          mt-10'
          onClick={handleScroll} />
      </div>

      <div className='flex xl:flex-[1.5] justify-end items-end w-full
        xl:h-screen'>
        <div className='relative w-[90%] xl:w-full
          h-[590px] xl:h-full z-0'>
          <Image
            src='/hero.png'
            alt='hero'
            fill
            className='object-contain' />
        </div>

        <div className={`absolute xl:-top-24 xl:-right-1/2 bg-hero-bg 
            bg-repeat-round -z-10 w-full h-[590px] xl:h-screen 
            overflow-hidden bg-[url('/hero-bg.png')]`}></div>
      </div>
    </div>
  )
}

export default Hero