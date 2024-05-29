import Image from 'next/image';
import React from 'react';

const Search = () => {
  return (
    <div className="flex w-72">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="w-72 rounded-md border-2 border-white bg-[#F5F5F5] py-2 pl-5 pr-3"
      />
      <div className="my-auto -ml-8 h-full">
        <Image
          src={'icons/search.svg'}
          alt="send-icon"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default Search;
