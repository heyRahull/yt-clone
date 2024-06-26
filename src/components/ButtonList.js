import React, { useEffect, useState } from "react";
import Button from "./Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import IconButton from "@mui/material/IconButton";
import { GOOGLE_API_KEY } from "../utils/constants";
import { VIDEO_CATEGORIES_API } from "../utils/constants";
import Loader from "./Loader";

const ButtonList = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `${VIDEO_CATEGORIES_API}&key=
        ${GOOGLE_API_KEY}`
    );
    const json = await data.json();

    const categories = json.items.map((item) => ({
      name: item.snippet.title,
      id: item.id,
    }));
    setCategoryData(categories);
    setLoading(false);
  };

  return loading ? (
    <Loader />
  ) : (
    <>
      <div className="flex overflow-x-scroll button-list-container md:px-6">
        {/* <button className=" scroll_btn_mobille absolute left-16 p-2 rounded-full bg-white hover:bg-gray-300">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
        </button> */}
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
        {/* <button className=" scroll_btn_mobille absolute right-0 p-2 rounded-full bg-white hover:bg-gray-300">
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </button> */}
      </div>
    </>
  );
};

export default ButtonList;
