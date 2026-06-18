import React from "react";
import cls from "./IngredientsList.module.css";

const IngredientsList = ({ ingredients }) => {
  return (
    <div className={cls.IngredientsListWrapper}>
      <h3>Ingredients</h3>
      <div className={cls.IngredientsList}>
        {ingredients.map((item, index) => (
          <ul key={index}>
            <li className={cls.CircleList}>
              <div className={cls.Circle}></div>
              <span>{item}</span>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default IngredientsList;
