import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";

const SearchInput = () => {
  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState(query || "");
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && searchQuery.length > 0) {
      navigate(`${searchQuery}/${1}`);
    }
  };

  return (
    <div
      id="searchBox"
      className="h-[46px] w-full md:w-[584px] rounded-full flex items-center gap-3 px-4 border border-[#dfe1e5] hover:bg-white hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:bottom-0"
    >
      <AiOutlineSearch size={18} color="#9aa0a6" />
      <input
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={searchQueryHandler}
        className="grow outline-0 text-black/[0.87]"
        value={searchQuery}
        autoFocus
      />
      <div className="flex items-center gap-3">
        {searchQuery && (
          <IoMdClose
            size={24}
            color="#70757a"
            className="cursor-pointer"
            onClick={() => {
              setSearchQuery("");
            }}
          />
        )}
        <img src={MicIcon} className="w-6 h-6 cursor-pointer" />
        <img src={ImageIcon} className="w-6 h-6 cursor-pointer" />
      </div>
    </div>
  );
};

export default SearchInput;
