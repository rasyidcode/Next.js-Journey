'use client'

import { useSession } from "next-auth/react"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { IPrompt } from "@/models/prompt"

const PromptCard = ({ prompt, handleTagClick, handleEdit, handleDelete }: {
  prompt: IPrompt,
  handleTagClick: (tag: string) => void
}) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [clipboardPrompt, setClipboardPrompt] = useState('');

  const handleCopy = () => {
    setClipboardPrompt(prompt.prompt);
    navigator.clipboard.writeText(prompt.prompt);
    setTimeout(() => setClipboardPrompt(''), 3000);
  };

  const handleProfileClick = () => {
    if (prompt.creator._id === session?.user.id) return router.push('/profile');

    router.push(`/profile/${prompt.creator._id}?name=${prompt.creator.username}`);
  };

  return (
    <div className=" flex-1 break-inside-avoid rounded-lg border
       border-gray-300 bg-white/20 bg-clip-padding p-6 pb-4
        backdrop-blur-lg backdrop-filter md:w-[360px] w-full h-fit">
      <div className=" flex justify-between items-start gap-5">
        <div className=" flex-1 flex justify-start items-center
        gap-3 cursor-pointer"
          onClick={handleProfileClick}>
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
            height={12}
            alt="User Image" />
        </div>
      </div>

      <p className="my-4 font-satoshi text-sm text-gray-700">
        {prompt.prompt}
      </p>

      <p className="font-inter text-sm bg-gradient-to-r from-blue-600 
        to-cyan-600 bg-clip-text text-transparent cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(prompt.tag)}
      >
        #{prompt.tag}
      </p>

      {session?.user.id === prompt.creator._id &&
        pathName === '/profile' &&
        (
          <div className=" mt-5 flex justify-center items-center gap-4
           border-t border-gray-100 pt-3">
            <p className=" font-inter text-sm cursor-pointer
               bg-gradient-to-r from-green-400 to-green-500 
               bg-clip-text text-transparent"
              onClick={handleEdit}>
              Edit
            </p>
            <p className=" font-inter text-sm cursor-pointer
              bg-gradient-to-r from-amber-500 via-orange-600
              to-yellow-500 bg-clip-text text-transparent"
              onClick={handleDelete}>
              Delete
            </p>
          </div>
        )
      }
    </div>
  )
}

export default PromptCard