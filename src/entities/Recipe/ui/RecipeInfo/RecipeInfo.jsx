import React from "react";
import cls from "./RecipeInfo.module.css";

import boxiconsTimer from "../../../../shared/assets/boxicons_timer-filled.svg";
import riFire from "../../../../shared/assets/ri_fire-line.svg";
import lucide from "../../../../shared/assets/lucide_utensils.svg";
import materialChef from "../../../../shared/assets/material-symbols-light_chef-hat-outline.svg";
import mealTypeIcon from "../../../../shared/assets/meal-type.svg";
import star from "../../../../shared/assets/star.svg";

const RecipeInfo = ({
  image,
  difficulty,
  name,
  prepTimeMinutes,
  cookTimeMinutes,
  caloriesPerServing,
  servings,
  cuisine,
  mealType,
  tags,
  rating,
  reviewCount,
}) => {
  return (
    <div className={cls.RecipeInfoWrapper}>
      <div className={cls.RecipeItemImage}>
        <img src={image} alt="" />
      </div>

      <div className={cls.RecipeItemAboutWrapper}>
        <div className={cls.RecipeItemAbout}>
          <div className={cls.RecipeItemAboutStar}>
            <p>{difficulty}</p>
            <div className={cls.RecipeItemAboutStarWrapper}>
              <img src={star} alt="star" />
              <p>{rating}</p>
              <p>({reviewCount} reviews)</p>
            </div>
          </div>
          <div>
            <h3>{name}</h3>
          </div>
          <div className={cls.RecipeInfo}>
            <span>
              <img src={boxiconsTimer} alt="" />
              <div>
                <span>Prep Time</span>
                {prepTimeMinutes} mints
              </div>
            </span>

            <span>
              <img src={boxiconsTimer} alt="" />
              <div>
                <span>Cook Time</span>
                {cookTimeMinutes} mints
              </div>
            </span>

            <span>
              <img src={lucide} alt="" />
              <div>
                <span>Servings</span>
                {servings}
              </div>
            </span>

            <span>
              <img src={materialChef} alt="" />
              <div>
                <span>Cuisine</span>
                {cuisine}
              </div>
            </span>

            <span>
              <img src={riFire} alt="" />
              <div>
                <span>Calories</span>
                {caloriesPerServing} kcal
              </div>
            </span>

            <span>
              <img src={mealTypeIcon} alt="" />
              <div>
                <span>Meal Type</span>
                {mealType}
              </div>
            </span>
          </div>
        </div>
        <div className={cls.TagsWrapper}>
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeInfo;
