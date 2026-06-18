import React from "react";
import cls from "./CuisineItem.module.css";

const CuisineItem = ({ item, onClick }) => {
  return (
    <div className={cls.CuisineItem} onClick={onClick}>
      <img src={item.image} alt="" />
      <div className={cls.CuisineInfo}>
        <h3>{item.cuisine}</h3>
        <p>{item.recipesCount} recipes</p>
      </div>
    </div>
  );
};

export default CuisineItem;
