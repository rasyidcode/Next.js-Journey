'use client'

import Image from "next/image"
import { useState } from "react"

const PromptCard = ({ prompt, handleTagClick, handleEdit, handleDelete }) => {
  const [clipboardPrompt, setClipboardPrompt] = useState('')

  const handleCopy = () => {
    setClipboardPrompt(prompt.prompt);
    navigator.clipboard.writeText(prompt.prompt);
    setTimeout(() => setClipboardPrompt(''), 3000);
  }

  return (
    <div className=" flex-1 break-inside-avoid rounded-lg border
       border-gray-300 bg-white/20 bg-clip-padding p-6 pb-4
        backdrop-blur-lg backdrop-filter md:w-[360px] w-full h-fit">
      <div className=" flex justify-between items-start gap-5">
        <div className=" flex-1 flex justify-start items-center
        gap-3 cursor-pointer">
          <Image
            src={prompt.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className=" rounded-full object-contain" />

          <div className="flex flex-col">
            <h3 className=" font-satoshi font-semibold
            text-gray-900">
              {prompt.creator.username}
            </h3>
            <p className=" font-inter text-sm
            text-gray-500">
              {prompt.creator.email}
            </p>
          </div>
        </div>

        <div className=" w-7 h-7 rounded-full bg-white/10 
          shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)]
           backdrop-blur flex justify-center items-center
           cursor-pointer"
           onClick={handleCopy}>
          <Image
            src={clipboardPrompt === prompt.prompt 
              ? '/assets/icons/tick.svg'
              : '/assets/icons/copy.svg'}
            width={12}
            height={12} />
        </div>
      </div>

      <p className="my-4 font-satoshi text-sm text-gray-700">
        {prompt.prompt}
      </p>
      <p className="font-inter text-sm bg-gradient-to-r from-blue-600 
        to-cyan-600 bg-clip-text text-transparent cursor-pointer" 
        onClick={() => handleTagClick && handleTagClick(prompt.tag)}
        >
        {prompt.tag}
      </p>
    </div>
  )
}

export default PromptCard