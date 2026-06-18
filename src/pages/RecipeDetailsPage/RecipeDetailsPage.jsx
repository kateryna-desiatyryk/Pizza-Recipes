import React, { useEffect, useState } from "react";
import cls from "./RecipeDetailsPage.module.css";

import axios from "axios";
import RecipeInfo from "../../entities/Recipe/ui/RecipeInfo/RecipeInfo";
import IngredientsList from "../../entities/Recipe/ui/IngredientsList/IngredientsList";
import InstructionsList from "../../entities/Recipe/ui/InstructionsList/InstructionsList";
import { Link, useParams } from "react-router-dom";
import { RouterPath } from "../../shared/config/routerConfig";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipesDetails, setRerecipesDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRecipesDetails = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get(`https://dummyjson.com/recipes/${id}`);

      setRerecipesDetails(res.data);
    } catch (err) {
      setError(err.message);
      console.log("Ошибка", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipesDetails();
  }, []);

  if (loading) {
    return <div className={cls.loaderContainer}>🍲 Loading recipe...</div>;
  }
  if (error) return <p>Error!!! {error}</p>;

  return (
    <div className={cls.RecipeDetails}>
      <Link to={RouterPath.recipes} className={cls.RecipeDetailsLink}>
        ← Back to Recipes
      </Link>
      <div className={cls.TopWrapper}>
        <RecipeInfo
          image={recipesDetails.image}
          name={recipesDetails.name}
          prepTimeMinutes={recipesDetails.prepTimeMinutes}
          cookTimeMinutes={recipesDetails.cookTimeMinutes}
          caloriesPerServing={recipesDetails.caloriesPerServing}
          servings={recipesDetails.servings}
          cuisine={recipesDetails.cuisine}
          mealType={recipesDetails.mealType}
          difficulty={recipesDetails.difficulty}
          tags={recipesDetails.tags}
          rating={recipesDetails.rating}
          reviewCount={recipesDetails.reviewCount}
        />
        <div className={cls.BottomWrapper}>
          <IngredientsList ingredients={recipesDetails.ingredients} />
          <InstructionsList instructions={recipesDetails.instructions} />
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
