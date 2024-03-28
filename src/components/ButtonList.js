import React, { useEffect, useState } from "react";
import Button from "./Button";

const ButtonList = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=AIzaSyBhrrKf3_EMYVLD-JPU9NcO_I__IIKXXvY"
    );
    const json = await data.json();

    const categories = json.items.map((item) => ({
      name: item.snippet.title,
      id: item.id,
    }));
    setCategoryData(categories);
  };

  return (
    <div className="flex flex-wrap">
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
    </div>
  );
};

export default ButtonList;
