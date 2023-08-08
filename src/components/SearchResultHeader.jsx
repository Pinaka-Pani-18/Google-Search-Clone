import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import Logo from "../assets/google-logo.png";
import SearchInput from "./SearchInput";
import ProfileIcon from "./ProfileIcon";
import { Context } from "../utils/ContextApi";
import { menu } from "../utils/Constants";

const SearchResultHeader = () => {
  const [selectedMenu, setSelectedMenu] = useState("All");
  const clickHandler = (item) => {
    setSelectedMenu(item.name);
  };

  return (
    <div className="p-[15px] pb-0 md:pr-5 md:pl-20 md:pt-7 border-b border-[#ebebeb] flex md:block flex-col items-center sticky top-0 bg-white">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center grow">
          <img className="hidden md:block w-[92px] mr-10" src={Logo} />
          <SearchInput />
        </div>
        <div className="hidden md:block">
          <ProfileIcon />
        </div>
      </div>
      <div className="flex ml-[-12px] mt-3">
        {menu.map((item, index) => {
          return (
            <span
              key={index}
              className={`flex items-center p-3 text-[#5f6368] rounded-full cursor-pointer relative ${
                selectedMenu === item.name ? "text-[#1a73e8] " : ""
              }`}
              onClick={() => clickHandler(item)}
            >
              <span className="hidden sm:block mr-2 ">{item.icon}</span>
              <span className="text-sm">{item.name}</span>
              {selectedMenu === item.name && (
                <span className="h-[3px] w-[calc(100%-20px)] absolute bg-[#1a73e8] bottom-0 left-[10px]" />
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResultHeader;
