import cls from "../RecipeItem/RecipeItem.module.css";

import boxiconsTimer from "../../../../shared/assets/boxicons_timer-filled.svg";
import riFire from "../../../../shared/assets/ri_fire-line.svg";
import lucide from "../../../../shared/assets/lucide_utensils.svg";
import materialChef from "../../../../shared/assets/material-symbols-light_chef-hat-outline.svg";
import lovePizza from "../../../../shared/assets/lovePizza.svg";
import { Link } from "react-router-dom";
import { RouterPath } from "../../../../shared/config/routerConfig";

const RecipeItem = ({
  id,
  name,
  image,
  totalTime,
  caloriesPerServing,
  servings,
  cuisine,
}) => {
  return (
    <Link to={`/recipe/${id}`}>
      <div className={cls.RecipeItem}>
        <div className={cls.RecipeItemImage}>
          <img src={image} alt="" />
        </div>

        <div className={cls.RecipeItemAboutWrapper}>
          <div className={cls.RecipeItemAbout}>
            <div>
              <h3>{name}</h3>
            </div>
            <div className={cls.RecipeInfo}>
              <span>
                <img src={boxiconsTimer} alt="" />
                {totalTime}
              </span>
              <span>
                <img src={riFire} alt="" />
                {caloriesPerServing}
              </span>
              <span>
                <img src={lucide} alt="" />
                {servings}
              </span>
              <span>
                <img src={materialChef} alt="" />
                {cuisine}
              </span>
            </div>
          </div>
          <div className={cls.RecipeItemAbsolute}>
            <img src={lovePizza} alt="" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeItem;
