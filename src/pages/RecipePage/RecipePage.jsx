import React from "react";
import cls from "./RecipePage.module.css";
import RecipeDetails from "../RecipeDetailsPage/RecipeDetailsPage";
import RecipeList from "../../widgets/RecipeList/RecipeList";
import { Link } from "react-router-dom";
import { RouterPath } from "../../shared/config/routerConfig";

const RecipePage = () => {
  return (
    <div className={cls.RecipePage}>
      <Link to={RouterPath.home} className={cls.RecipePageLink}> ← Back to home</Link>
      <RecipeList />
    </div>
  );
};

export default RecipePage;
