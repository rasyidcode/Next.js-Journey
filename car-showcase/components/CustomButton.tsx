'use client'

import { CustomButtonProps } from '@/types'

const CustomButton = ({ 
  title, 
  style, 
  onClick,
  type
}: CustomButtonProps) => {

  return (
    <button
      disabled={false}
      type={type || 'button'}
      className={`flex flex-row relative justify-center items-center 
        py-3 px-6 outline-none ${style}`}
        onClick={onClick}>
      <span className={`flex-1`}>
        {title}
      </span>
    </button>
  )
}

export default CustomButton