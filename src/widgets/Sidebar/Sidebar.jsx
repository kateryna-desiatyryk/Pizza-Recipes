import cls from "./Sidebar.module.css";

import hugeiconsChef from "../../shared/assets/hugeicons_chef.svg";
import materialHome from "../../shared/assets/material-symbols-light_home-outline.svg";
import love from "../../shared/assets/love.svg";
import iconPlan from "../../shared/assets/icon-park-outline_plan.svg";
import boxIcons from "../../shared/assets/boxicons_categories.svg";
import iconamoonProfile from "../../shared/assets/iconamoon_profile-light.svg";
import createIcon from "../../shared/assets/createIcon.svg";
import ThemeToggle from "../../shared/ui/ThemeToggle/ThemeToggle";
import { RouterPath } from "../../shared/config/routerConfig";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={cls.Sidebar}>
      <div className={cls.SidebarTop}>
        <div className={cls.Title}>
          <img src={hugeiconsChef} alt="" />
          <h2>RecipeBox</h2>
        </div>
        <nav className={cls.SidebarNav}>
          <ul>
            <Link to={RouterPath.recipes} className={cls.Link}>
              <li>
                <img src={materialHome} alt="" />
                <p>Recipes</p>
              </li>
            </Link>

            <li>
              <img src={love} alt="" />
              <p>Favorites</p>
            </li>

            <Link to={RouterPath.categories} className={cls.Link}>
              <li>
                <img src={boxIcons} alt="" />
                <p>Categories</p>
              </li>
            </Link>

            <Link to={RouterPath.meal_plan} className={cls.Link}>
              <li>
                <img src={iconPlan} alt="" />
                <p>Meal plan</p>
              </li>
            </Link>

            <Link to={RouterPath.profile} className={cls.Link}>
              <li>
                <img src={iconamoonProfile} alt="" />
                <p>Profile</p>
              </li>
            </Link>

            <Link to={RouterPath.create_recipe} className={cls.Link}>
              <li>
                <img src={createIcon} alt="" />
                <p>Create recipe</p>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
