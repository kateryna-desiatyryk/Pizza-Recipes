import React, { useEffect, useState } from "react";
import cls from "./CategoriesPage.module.css";
import Sidebar from "../../widgets/Sidebar/Sidebar";
import CuisineItem from "../../entities/Cuisine/ui/CuisineItem";
import axios from "axios";
import MealTypeItem from "../../entities/MealType/ui/MealTypeItem";

import allMealType from "../../shared/assets/all-meal-type.svg";
import breakfast from "../../shared/assets/breakfast.svg";
import lunch from "../../shared/assets/lunch.svg";
import dinner from "../../shared/assets/dinner.svg";
import sideDish from "../../shared/assets/side-dish.svg";
import appetizer from "../../shared/assets/appetizer.svg";
import dessert from "../../shared/assets/dessert.svg";
import snack from "../../shared/assets/snack.svg";
import snacks from "../../shared/assets/snacks.png";
import beverage from "../../shared/assets/beverage.png";

const CategoriesPage = () => {
  const [mealType, setMealType] = useState([]);
  const [cuisine, setCuisine] = useState([]);
  // состояние выбраной кухни
  const [selectedMealType, setSelectedMealType] = useState("all");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCuisine = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get("https://dummyjson.com/recipes");

      setMealType(res.data.recipes);
      setCuisine(res.data.recipes);
    } catch (err) {
      setError(err.message);
      console.log("Oшибка", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCuisine();
  }, []);

  // Убираем повторы mealType.
  // mealType в API приходит массивом, например ["Dinner"].
  // flatMap достаёт все значения из этих массивов в один общий массив.
  // Set оставляет только уникальные значения.
  const uniqueMealType = [
    ...new Set(mealType.flatMap((item) => item.mealType)),
  ];

  // Объект-соответствие:
  // слева — название mealType, которое приходит из API,
  // справа — наша импортированная картинк
  const mealTypeImages = {
    Dinner: dinner,
    Lunch: lunch,
    Dessert: dessert,
    Snack: snack,
    Breakfast: breakfast,
    Snacks: snacks,
    Beverage: beverage,
    "Side Dish": sideDish,
    Appetizer: appetizer,
    "All meal type": allMealType,
  };

  // Создаём готовый массив карточек mealType.
  // Первую карточку All meal type добавляем вручную.
  // Остальные карточки создаём из uniqueMealType.
  // title — что показываем на экране.
  // value — значение, по которому будем фильтровать.
  // image — картинка, которую берём из mealTypeImages.
  const mealTypeItems = [
    {
      title: "All meal type",
      value: "all",
      image: allMealType,
    },
    ...uniqueMealType.map((item) => ({
      title: item,
      value: item,
      image: mealTypeImages[item],
    })),
  ];

  // Фильтруем рецепты по выбранному mealType.
  // Если выбран all — оставляем все рецепты.
  // Если выбран Dinner/Lunch/... — оставляем только те рецепты,
  // у которых mealType содержит выбранное значение.
  const filteredCuisine =
    selectedMealType === "all"
      ? cuisine
      : cuisine.filter((item) => item.mealType.includes(selectedMealType));

  // Из отфильтрованных рецептов собираем уникальные кухни.
  // acc — аккумулятор, то есть новый массив, который мы собираем.
  // Если такая кухня уже есть — увеличиваем recipesCount.
  // Если такой кухни ещё нет — добавляем её первый раз
  const uniqueCuisine = filteredCuisine.reduce((acc, item) => {
    const existingCuisine = acc.find( // найденная кухня
      (cuisineItem) => cuisineItem.cuisine === item.cuisine,
    );

    if (existingCuisine) {
      existingCuisine.recipesCount += 1;
    } else {
      acc.push({
        cuisine: item.cuisine,
        image: item.image,
        recipesCount: 1,
      });
    }

    return acc;
  }, []);

  //===================
  if (loading) {
    return <div className={cls.loaderContainer}>🍲 Loading cuisine...</div>;
  }
  if (error) return <p>Error!!! {error}</p>;
  //===================

  return (
    <div className={cls.CategoriesPage}>
      <Sidebar />
      <div className={cls.MealTypesCuisineWrapper}>
        <div className={cls.Title}>
          <h1>Categories</h1>
        </div>

        <div className={cls.MealType}>
          <h2>Meal types</h2>
          <div className={cls.MealTypeWrapper}>
            {mealTypeItems.map((item) => (
              // Выводим карточки mealType.
              // При клике записываем выбранный value в selectedMealType.
              // После этого filteredCuisine пересчитывается автоматически.
              <MealTypeItem
                key={item.value}
                item={item}
                onClick={() => setSelectedMealType(item.value)}
              />
            ))}
          </div>
        </div>

        <div className={cls.CuisineList}>
          <h2>Cuisine</h2>
          <div className={cls.CuisineListWrapper}>
            {uniqueCuisine.map((item) => (
              // Выводим уже отфильтрованные и уникальные кухни.
              <CuisineItem key={item.cuisine} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
