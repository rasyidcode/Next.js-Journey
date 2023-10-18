import Link from 'next/link'
import React from 'react'
import { CustomButton } from '.'
import { FaCarSide } from 'react-icons/fa'

const Navbar = () => {
    return (
        <header className='w-full absolute z-10'>
            <nav className='max-w-[1440px] mx-auto flex justify-between items-center 
                px-6 sm:px-16 py-4 bg-transparent'>
                <Link
                    href='/'
                    className='flex items-center gap-2'>
                    <FaCarSide
                        className='text-2xl text-teal-600' />
                    <h1 className='font-extrabold text-xl'>
                        CarShow
                    </h1>
                </Link>

                <CustomButton
                    title='Sign in'
                    type='button'
                    customStyle='text-teal-600 rounded-full bg-white
                    min-w-[130px]' />
            </nav>
        </header>
    )
}

export default Navbar