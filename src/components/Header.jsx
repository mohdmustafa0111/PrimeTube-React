import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { BsFillPlayBtnFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  // This Search is using
  // - Live API
  // - Debouncing
  // - Caching

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    // Update in the Cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  useEffect(() => {
    // API call
    // Make an API call after every key press
    // But if the difference between 2 API call is less than 200ms
    // then decline the API call
    // (Debouncing)

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="fixed top-0 left-0 right-0 md:grid md:grid-flow-col p-3 shadow-lg bg-white flex items-center">
      <div className="flex items-center md:col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-6 hidden md:block cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/8182/8182885.png"
          alt="Hamberger Menu"
        />
        <Link to={"/"} className="flex items-center">
          <BsFillPlayBtnFill className="text-blue-600 text-2xl md:ml-2 ml-1" />
          <h3 className="font-extrabold md:text-2xl text-xl ml-1 text-blue-600">
            PrimeTube
          </h3>
        </Link>
      </div>

      <div id="search" className="md:col-span-10 md:ml-72 ml-2">
        <SearchBar setSearchQuery={setSearchQuery} suggestions={suggestions} />
      </div>

      <div className="md:col-span-1 flex items-center">
        <IoMdNotificationsOutline className="hidden md:block text-[1.7rem] text-gray-500" />
        <FaUserCircle className="hidden md:block ml-6 text-2xl text-gray-500" />
      </div>
    </div>
  );
};

export default Header;
