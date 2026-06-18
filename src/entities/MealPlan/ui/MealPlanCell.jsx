import React from "react";
import cls from "./MealPlanCell.module.css";

import breakfastIcon from "../../../shared/assets/breakfast.svg";
import lunchIcon from "../../../shared/assets/lunch.svg";
import dinnerIcon from "../../../shared/assets/dinner.svg";
import snackIcon from "../../../shared/assets/snack.svg";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack"];

const mealTypeImages = {
  Breakfast: breakfastIcon,
  Lunch: lunchIcon,
  Dinner: dinnerIcon,
  Snack: snackIcon,
};

const MealPlanCell = () => {
  return (
    <div className={cls.MealPlanCell}>
      <h2>Meal plan</h2>

      <div className={cls.Grid}>
        <div></div>

        {days.map((day) => (
          <div className={cls.DayHeader} key={day}>
            {day}
          </div>
        ))}

        {mealTypes.map((mealType) => (
          <div className={cls.Row}>
            <div key={mealType} className={cls.mealType}>
              <img src={mealTypeImages[mealType]} alt="" />
              <span>{mealType}</span>
            </div>

            {days.map((day) => (
              <div className={cls.Cell} key={`${day}-${mealType}`}>
                + Add recipe
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealPlanCell;
