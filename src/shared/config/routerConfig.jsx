import HomePage from "../../pages/HomePage/HomePage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import RecipePage from "../../pages/RecipePage/RecipePage";
import RecipeDetails from "../../pages/RecipeDetailsPage/RecipeDetailsPage";
import CreateRecipePage from "../../pages/CreateRecipePage/CreateRecipePage";
import CategoriesPage from "../../pages/CategoriesPage/CategoriesPage";
import MealPlanPage from "../../pages/MealPlanPage/MealPlanPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";

export const AppRouter = {
  HOME: "home",
  RECIPES: "recipes",
  RECIPE_DETAIL: "recipe_detail",
  CREATE_RECIPE: "create_recipe",
  CATEGORIES: "categories",
  MEAL_PLAN: "meal_plan",
  PROFILE: "profile",
  NOT_FOUND: "not_found",
};

export const RouterPath = {
  [AppRouter.HOME]: "/",
  [AppRouter.RECIPES]: "/recipes",
  [AppRouter.RECIPE_DETAIL]: "/recipe/:id",
  [AppRouter.CREATE_RECIPE]: "/create_recipe",
  [AppRouter.CATEGORIES]: "/categories",
  [AppRouter.MEAL_PLAN]: "/meal_plan",
  [AppRouter.PROFILE]: "/profile",
  [AppRouter.NOT_FOUND]: "*",
};

export const routeConfig = {
  [AppRouter.HOME]: {
    path: RouterPath.home,
    element: <HomePage />,
  },
  [AppRouter.RECIPES]: {
    path: RouterPath.recipes,
    element: <RecipePage />,
  },

  [AppRouter.RECIPE_DETAIL]: {
    path: RouterPath.recipe_detail,
    element: <RecipeDetails />,
  },

  [AppRouter.CREATE_RECIPE]: {
    path: RouterPath.create_recipe,
    element: <CreateRecipePage />,
  },
  [AppRouter.CATEGORIES]: {
    path: RouterPath.categories,
    element: <CategoriesPage />,
  },
  [AppRouter.MEAL_PLAN]: {
    path: RouterPath.meal_plan,
    element: <MealPlanPage />,
  },

  // тут временно лежит RegisterPage
  [AppRouter.PROFILE]: {
    path: RouterPath.profile,
    element: <RegisterPage />,
  },

  [AppRouter.NOT_FOUND]: {
    path: RouterPath.not_found,
    element: <NotFoundPage />,
  },
};
