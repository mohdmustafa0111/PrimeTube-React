import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ setSearchQuery, suggestions }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const handleSearch = (searchQuery) => {
    navigate(`results/?search_query=${searchQuery}`);
  };

  if (!suggestions) return null;

  return (
    <div>
      <div className="flex items-center w-[26rem] md:w-[50rem]">
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSearch(query);
            }
          }}
          placeholder="Search"
          className="w-1/2 md:px-4 border border-gray-500 focus:outline-none focus:ring-1 focus:border-blue-500  md:p-2 p-1 placeholder-gray-500 rounded-l-full"
          type="text"
          value={query}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setQuery(e.target.value);
          }}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button
          className="border border-gray-500 md:px-6 px-2 md:py-3 py-2 rounded-r-full focus:outline-none focus:ring-1 focus:border-blue-500 bg-gray-200"
          onClick={() => handleSearch(query)}
        >
          <GoSearch />
        </button>
      </div>
      {showSuggestions && suggestions.length > 0 && (
        <div className="fixed bg-white py-2 px-3 md:w-[29rem] w-[15rem] shadow-lg rounded-lg">
          <ul>
            {suggestions?.map((s) => (
              <li key={s} className="py-2 flex items-center hover:bg-gray-100">
                <GoSearch className="mx-2" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
