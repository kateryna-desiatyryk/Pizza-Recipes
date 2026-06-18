import { useEffect, useState } from "react";
import cls from "../RecipeList/RecipeList.module.css";
import axios from "axios";
import RecipeItem from "../../entities/Recipe/ui/RecipeItem/RecipeItem";

const RecipeList = () => {
  const [cookBook, setCookBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCooBook = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get("https://dummyjson.com/recipes");

      // console.log("RES DATA:", res.data);
      // console.log("RES :", res.data.recipes);
      setCookBook(res.data.recipes);
    } catch (err) {
      setError(err.message);
      console.log("Oшибка", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCooBook();
  }, []);

  if (loading) {
    return <div className={cls.loaderContainer}>🍲 Loading recipes...</div>;
  }
  if (error) return <p>Error!!! {error}</p>;

  return (
    <div className={cls.RecipeList}>
      <h2>Recipes</h2>
      {cookBook.map((item) => (
        <RecipeItem
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
          totalTime={item.prepTimeMinutes + item.cookTimeMinutes}
          caloriesPerServing={item.caloriesPerServing}
          servings={item.servings}
          cuisine={item.cuisine}
        />
      ))}
    </div>
  );
};

export default RecipeList;
