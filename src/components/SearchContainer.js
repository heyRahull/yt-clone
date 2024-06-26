import React, { useEffect, useState } from "react";
import SearchCard from "./SearchCard";
import { Link, useLocation } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constants";
import { YOUTUBE_SEARCHBYKEYWORD_API } from "../utils/constants";
import Loader from "./Loader";

const SearchContainer = () => {
  const [loading, setLoading] = useState(true);
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
      `${YOUTUBE_SEARCHBYKEYWORD_API}&q=${query}&key=${GOOGLE_API_KEY}`
    );
    const json = await data.json();

    setSearchResults(json.items);
    setLoading(false);
    // console.log(json.items);
  };
  // console.log(searchResults);
  return loading ? (
    <Loader />
  ) : (
    <div className="md:max-w-screen-xl searchPageContainer_mbl">
      {searchResults.map((searchResult) => {
        if (searchResult.id.kind === "youtube#video") {
          return (
            <Link
              to={"/watch?v=" + searchResult.id.videoId}
              key={searchResult.id.videoId}
            >
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
