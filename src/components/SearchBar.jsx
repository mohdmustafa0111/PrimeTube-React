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

  return (
    <div>
      <div className="flex items-center">
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSearch(query);
            }
          }}
          placeholder="Search"
          className="w-1/2 px-4 border border-gray-500 focus:outline-none focus:ring-1 focus:border-blue-500  p-2 placeholder-gray-500 rounded-l-full"
          type="text"
          value={query}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setQuery(e.target.value);
          }}
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
