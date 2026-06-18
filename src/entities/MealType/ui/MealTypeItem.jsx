import React from "react";
import cls from "./MealTypeItem.module.css";

const MealTypeItem = ({ item, onClick }) => {
  return (
    <div className={cls.MealTypeItem} onClick={onClick}>
      <img src={item.image} alt="" />
      <p>{item.title}</p>
    </div>
  );
};

export default MealTypeItem;
