// components/Search.js
"use client";
import { useState } from "react";
import ShowSearch from "./ShowSearch";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [show, setShow] = useState(false);
  const handleSearch = async () => {
    try {
      const encodedTerm = encodeURIComponent(searchTerm);
      const response = await fetch(`/api/search?q=${encodedTerm}`);
      const data = await response.json();
      setSearchResults(data || []);
      setShow(true);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setShow(false);
    }
  };
  return (
    <div>
      <form
        className="searchForm"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <label htmlFor="search" className="searchLabel">
          Search
        </label>
        <div className="relative">
          <input
            type="search"
            id="search"
            className="searchInput"
            placeholder="what are you looking for ?"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) =>
              (e.target.placeholder = "what are you looking for ?")
            }
            required
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <button type="submit" className="searchButton">
            Search
          </button>
        </div>
      </form>
      {show && (
        <ShowSearch
          result={searchResults}
          searchTerm={searchTerm}
          isEmpty={searchTerm === ""}
        />
      )}
    </div>
  );
};

export default Search;
