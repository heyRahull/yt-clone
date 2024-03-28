import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectCategory } from "../utils/categorySlice";

const Button = ({ name, categoryId, categoryData }) => {
  const dispatch = useDispatch();
  const handleCategory = () => {
    const selectedCategory = categoryData.find(
      (category) => category.name === name
    );
    if (selectedCategory) {
      dispatch(selectCategory({ id: selectedCategory.id }));
    } else {
      console.error(`Category "${name}" not found in categoryData array.`);
    }
  };

  return (
    <div>
      <button
        className="bg-gray-200 px-5 py-2 m-2 rounded-lg hover:bg-gray-300"
        onClick={handleCategory}
      >
        {name}:{categoryId}
      </button>
    </div>
  );
};

export default Button;
