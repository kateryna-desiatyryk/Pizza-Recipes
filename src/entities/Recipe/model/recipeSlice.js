import { createSlice } from "@reduxjs/toolkit";

const savedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
const saveToLocalStorage = (items) => {
  localStorage.setItem("recipes", JSON.stringify(items));
};

const initialState = {
  items: savedRecipes,
};

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    addRecipe(state, action) {
      state.items.push(action.payload);

      saveToLocalStorage(state.items);
    },
  },
});

export const { addRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
