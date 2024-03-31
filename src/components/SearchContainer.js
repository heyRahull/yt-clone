import React, { useEffect, useState } from "react";
import SearchCard from "./SearchCard";
import { Link, useLocation } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constants";

const SearchContainer = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("search_query");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchResults([]);
    fetchSearchResult();
  }, [query]);

  const fetchSearchResult = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&key=${GOOGLE_API_KEY}`
    );
    const json = await data.json();

    setSearchResults(json.items);
    // console.log(json.items);
  };

  return (
    <div className="ml-16 md:max-w-screen-xl">
      {searchResults.map((searchResult) => {
        if (searchResult.id.kind === "youtube#video") {
          return (
            <Link to={"/watch?v=" + searchResult.id.videoId}>
              <SearchCard
                data={searchResult}
                thumbnail={searchResult.snippet.thumbnails.high.url}
              />
            </Link>
          );
        }
      })}
    </div>
  );
};

export default SearchContainer;
