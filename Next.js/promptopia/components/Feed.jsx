'use client'

import { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 space-y-6 py-8 sm:columns-2 sm:gap-6
      xl:columns-3">
        {data.length > 0 ? 
          data.map((prompt) => (
            <PromptCard
            key={prompt._id}
            prompt={prompt}
            handleTagClick={handleTagClick} />
          )) : <div>No Data</div>}
    </div>
  )
}

const Feed = () => {
  const [allPrompts, setAllPrompts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedPrompts, setSearchedPrompts] = useState([]);

  const fetchPrompts = async () => {
    const response = await fetch('/api/prompt');
    const data = await response.json();

    setAllPrompts(data);
  };

  const filterPrompts = (query) => {
    const regex = new RegExp(query, 'i'); // 'i' flag for case-insensitive search
    return allPrompts.filter(
      (item) => 
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };

  const handleSearchQueryChange = (e) => {
    clearTimeout(searchTimeout);

    setSearchQuery(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResults = filterPrompts(e.target.value);
        setSearchedPrompts(searchResults);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchQuery(tagName);

    const searchResults = filterPrompts(tagName);
    setSearchedPrompts(searchResults);
  }

  useEffect(() => {
    fetchPrompts();
  }, []);

  return (
    <section className=" mt-16 mx-auto w-full max-w-xl flex justify-center
       items-center flex-col gap-2">
        <form className="relative w-full flex justify-center items-center">
          <input
            type="text"
            placeholder="Search for a tag or a username"
            value={searchQuery}
            onChange={handleSearchQueryChange}
            required
            className=" block w-full rounded-md border border-gray-200
               bg-white py-2.5 font-satoshi pl-5 pr-12 text-sm 
                shadow-lg font-medium focus:border-black
                focus:outline-none focus:ring-0 peer"/>
        </form>

        { searchQuery ? (
          <PromptCardList
            data={searchedPrompts}
            handleTagClick={handleTagClick}
          />
        ) : (
          <PromptCardList
            data={allPrompts}
            handleTagClick={handleTagClick}
          />
        ) }
        
    </section>
  )
}

export default Feed