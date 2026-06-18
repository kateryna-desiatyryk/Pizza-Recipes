import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "../../entities/Recipe/model/recipeSlice";

export const store = configureStore({
  reducer: {
    recipes: recipeReducer,
  },
});
