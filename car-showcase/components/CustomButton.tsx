'use client'

import { MouseEventHandler } from 'react'

const CustomButton = ({ 
  title, 
  customStyle, 
  type,
  onClick,
}: {
  title: string,
  customStyle?: string,
  type?: 'button' | 'submit'
  onClick?: MouseEventHandler<HTMLButtonElement>
}) => {

  return (
    <button
      disabled={false}
      type={type || 'button'}
      className={`flex flex-row relative justify-center items-center 
        py-3 px-6 outline-none ${customStyle}`}
        onClick={onClick}>
      <span className={`flex-1`}>
        {title}
      </span>
    </button>
  )
}

export default CustomButton