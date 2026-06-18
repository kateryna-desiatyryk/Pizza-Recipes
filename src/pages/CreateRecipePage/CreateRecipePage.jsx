import React from "react";
import cls from "./CreateRecipePage.module.css";
import RecipeForm from "../../features/AddRecipe/ui/RecipeForm";
import Sidebar from "../../widgets/Sidebar/Sidebar";
import CreatedRecipeList from "../../features/AddRecipe/ui/CreatedRecipeList";

const CreateRecipePage = () => {
  return (
    <div className={cls.CreateRecipePage}>
      <Sidebar />
      <RecipeForm />
    </div>
  );
};

export default CreateRecipePage;
