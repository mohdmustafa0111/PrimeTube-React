import { GoSearch } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  // This Search is using
  // - Live API
  // - Debouncing
  // - Caching

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
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

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="fixed top-0 left-0 right-0 grid grid-flow-col p-3 shadow-lg bg-white">
      <div className="flex items-center col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-6 cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/8182/8182885.png"
          alt="Hamberger Menu"
        />
        <a href="/">
          <h3 className="font-extrabold text-2xl pl-2 text-blue-600">
            PrimeTube
          </h3>
        </a>
      </div>

      <div className="col-span-10 pl-60">
        <div>
          <div className="flex items-center">
            <input
              placeholder="Search"
              className="w-1/2 px-4 border border-gray-500 focus:outline-none focus:ring-1 focus:border-blue-500  p-2 placeholder-gray-500 rounded-l-full"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <button className="border border-gray-500 px-6 py-3 rounded-r-full focus:outline-none focus:ring-1 focus:border-blue-500 bg-gray-200">
              <GoSearch />
            </button>
          </div>
          {showSuggestions && (
            <div className="fixed bg-white py-2 px-3 w-[29rem] shadow-lg rounded-lg">
              <ul>
                {suggestions.map((s) => (
                  <li
                    key={s}
                    className="py-2 flex items-center hover:bg-gray-100"
                  >
                    <GoSearch className="mx-2" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="col-span-1">
        <img
          className="h-8 pt-1"
          src="https://t3.ftcdn.net/jpg/05/17/79/88/360_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Header;
