import React from "react";
import { useSelector } from "react-redux";

import cls from "./CreatedRecipeList.module.css";

import boxiconsTimer from "../../../shared/assets/boxicons_timer-filled.svg";
import riFire from "../../../shared/assets/ri_fire-line.svg";
import lucide from "../../../shared/assets/lucide_utensils.svg";
import materialChef from "../../../shared/assets/material-symbols-light_chef-hat-outline.svg";
import lovePizza from "../../../shared/assets/lovePizza.svg";
import mealTypeIcon from "../../../shared/assets/meal-type.svg";

const CreatedRecipeList = () => {
  const recipes = useSelector((state) => state.recipes.items);

  return (
    <div className={cls.CreatedRecipeList}>
      <h2>Created recipes</h2>
      {recipes.map((recipe) => (
        <div className={cls.RecipeItem} key={recipe.id}>
          <div className={cls.RecipeItemImage}>
            <img src={recipe.image} alt="" />
          </div>

          <div className={cls.RecipeItemAboutWrapper}>
            <div className={cls.RecipeItemAbout}>
              <div>
                <h3>{recipe.name}</h3>
              </div>

              <div className={cls.RecipeInfo}>
                <span>
                  <img src={boxiconsTimer} alt="" />
                  {recipe.cookTimeMinutes} min
                </span>

                <span>
                  <img src={riFire} alt="" />
                  {recipe.caloriesPerServing} cal
                </span>

                <span>
                  <img src={lucide} alt="" />
                  {recipe.servings} people
                </span>

                <span>
                  <img src={materialChef} alt="" />
                  {recipe.cuisine}
                </span>

                <span>
                  <img src={mealTypeIcon} alt="" />
                  {recipe.mealType}
                </span>
              </div>
            </div>

            <div className={cls.RecipeItemAbsolute}>
              <img src={lovePizza} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CreatedRecipeList;
