import React, { useEffect, useState } from "react";
import SearchCard from "./SearchCard";

const SearchContainer = () => {
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    fetchSearchResult();
  }, []);

  const fetchSearchResult = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=tmkoc&key=AIzaSyBhrrKf3_EMYVLD-JPU9NcO_I__IIKXXvY"
    );
    const json = await data.json();

    setSearchResults(json.items);
    console.log(searchResults);
  };

  return (
    <div className="ml-16 md:max-w-screen-xl">
      {searchResults.map((searchResult) => {
        if (searchResult.id.kind === "youtube#video") {
          return (
            <SearchCard
              data={searchResult}
              thumbnail={searchResult.snippet.thumbnails.high.url}
            />
          );
        }
      })}
    </div>
  );
};

export default SearchContainer;
