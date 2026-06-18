import React, { useState } from "react";
import cls from "./RecipeForm.module.css";
import CreatedRecipeList from "./CreatedRecipeList";
import boxiconsTimer from "../../../shared/assets/boxicons_timer-filled.svg";
import riFire from "../../../shared/assets/ri_fire-line.svg";
import lucide from "../../../shared/assets/lucide_utensils.svg";
import materialChef from "../../../shared/assets/material-symbols-light_chef-hat-outline.svg";
import mealTypeIcon from "../../../shared/assets/meal-type.svg";
import borscht from "../../../shared/assets/borscht.png";
import { useDispatch } from "react-redux";
import { addRecipe } from "../../../entities/Recipe/model/recipeSlice";

const RecipeForm = () => {
  const dispatch = useDispatch();

  const [recipe, setRecipe] = useState({
    name: "",
    cookTimeMinutes: "",
    caloriesPerServing: "",
    servings: "",
    cuisine: "",
    mealType: "",
  });

  const [error, setError] = useState("");

  const handleChange = (field, value) => {
    setRecipe({
      ...recipe,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!recipe.name.trim()) {
      setError("Recipe name is required");
      return;
    }
    if (!recipe.cookTimeMinutes) {
      setError("Cooking time is required");
      return;
    }
    if (!recipe.caloriesPerServing) {
      setError("Calories is required");
      return;
    }
    if (!recipe.servings) {
      setError("Servings is required");
      return;
    }
    if (!recipe.cuisine) {
      setError("Cuisine is required");
      return;
    }
    if (!recipe.mealType) {
      setError("Meal type is required");
      return;
    }

    setError("");

    dispatch(
      addRecipe({
        id: Date.now(),
        image: borscht,
        ...recipe,
      }),
    );

    setRecipe({
      name: "",
      cookTimeMinutes: "",
      caloriesPerServing: "",
      servings: "",
      cuisine: "",
      mealType: "",
    });
  };

  return (
    <div className={cls.RecipeForm}>
      <h1>Create recipe</h1>
      <form className={cls.Form} onSubmit={handleSubmit}>
        <input
          className={cls.RecipeNameInput}
          type="text"
          placeholder="Recipe name"
          value={recipe.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />

        <div className={cls.FieldsWrapper}>
          <div className={cls.Field}>
            <img src={boxiconsTimer} alt="" />

            <div>
              <span>Cooking time</span>
              <input
                type="number"
                placeholder="45"
                min="3"
                value={recipe.cookTimeMinutes}
                onChange={(e) =>
                  handleChange("cookTimeMinutes", e.target.value)
                }
              />
            </div>
          </div>

          <div className={cls.Field}>
            <img src={riFire} alt="" />

            <div>
              <span>Calories</span>
              <input
                type="number"
                placeholder="300"
                min="10"
                value={recipe.caloriesPerServing}
                onChange={(e) =>
                  handleChange("caloriesPerServing", e.target.value)
                }
              />
            </div>
          </div>

          <div className={cls.Field}>
            <img src={lucide} alt="" />

            <div>
              <span>Serving</span>
              <select
                value={recipe.servings}
                onChange={(e) => handleChange("servings", e.target.value)}
              >
                <option value="" disabled>
                  Select servings
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>

          <div className={cls.Field}>
            <img src={materialChef} alt="" />

            <div>
              <span>Cuisine</span>
              <select
                value={recipe.cuisine}
                onChange={(e) => handleChange("cuisine", e.target.value)}
              >
                <option value="" disabled>
                  Select cuisine
                </option>
                <option value="Italian">Italian</option>
                <option value="USA">USA</option>
                <option value="Mexican">Mexican</option>
                <option value="Asian">Asian</option>
                <option value="Arabian">Arabian</option>
                <option value="Ukrainian">Ukrainian</option>
              </select>
            </div>
          </div>

          <div className={cls.Field}>
            <img src={mealTypeIcon} alt="" />

            <div>
              <span>Meal type</span>
              <select
                value={recipe.mealType}
                onChange={(e) => handleChange("mealType", e.target.value)}
              >
                <option value="" disabled>
                  Select meal type
                </option>
                <option value="Breakfast">Breakfast</option>
                <option value="Dinner">Dinner</option>
                <option value="Lunch">Lunch</option>
                <option value="Snack">Snack</option>
                <option value="Dessert">Dessert</option>
                <option value="Brunch">Brunch</option>
              </select>
            </div>
          </div>
        </div>
        {error && <p className={cls.Error}>{error}</p>}
        <button className={cls.CreateButton} type="submit">
          Create recipe
        </button>
      </form>
      <CreatedRecipeList />
    </div>
  );
};

export default RecipeForm;
