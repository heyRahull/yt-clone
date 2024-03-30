import React, { useEffect, useState } from "react";
import Button from "./Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import IconButton from "@mui/material/IconButton";
import { GOOGLE_API_KEY } from "../utils/constants";

const ButtonList = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      ` https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=+
        ${GOOGLE_API_KEY}`
    );
    const json = await data.json();

    const categories = json.items.map((item) => ({
      name: item.snippet.title,
      id: item.id,
    }));
    setCategoryData(categories);
  };

  return (
    <>
      <div className="flex overflow-x-scroll button-list-container px-16">
        <button className="absolute left-0 p-2 rounded-full bg-white hover:bg-gray-300">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
        </button>
        {categoryData.map((data, index) => {
          return (
            <Button
              name={data.name}
              key={index}
              categoryId={data.id}
              categoryData={categoryData}
            />
          );
        })}
        <button className="absolute right-0 p-2 rounded-full bg-white hover:bg-gray-300">
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </button>
      </div>
    </>
  );
};

export default ButtonList;
