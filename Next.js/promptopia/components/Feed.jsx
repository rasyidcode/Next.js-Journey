'use client'

import { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 space-y-6 py-8 sm:columns-2 sm:gap-6
      xl:columns-3">
        {data.map((prompt) => (
          <PromptCard
            key={prompt._id}
            prompt={prompt}
            handleTagClick={handleTagClick} />
        ))}
    </div>
  )
}

const Feed = () => {
  const [prompts, setPrompts] = useState([]);

  const [searchQuery, setSearchQuery] = useState('');

  const handleQuerySearchChange = (e) => {

  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();

      setPrompts(data);
    }

    fetchPosts();
  }, []);

  return (
    <section className=" mt-16 mx-auto w-full max-w-xl flex justify-center
       items-center flex-col gap-2">
        <form className="relative w-full flex justify-center items-center">
          <input
            type="text"
            placeholder="Search for a tag or a username"
            value={searchQuery}
            onChange={handleQuerySearchChange}
            required
            className=" block w-full rounded-md border border-gray-200
               bg-white py-2.5 font-satoshi pl-5 pr-12 text-sm 
                shadow-lg font-medium focus:border-black
                focus:outline-none focus:ring-0"/>
        </form>

        <PromptCardList
          data={prompts}
          handleTagClick={() => {}}
          />
    </section>
  )
}

export default Feed