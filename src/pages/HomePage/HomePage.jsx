import cls from "./HomePage.module.css";
import RecipeList from "../../widgets/RecipeList/RecipeList";
import Sidebar from "../../widgets/Sidebar/Sidebar";
import RecipeDetails from "../RecipeDetailsPage/RecipeDetailsPage";

const HomePage = () => {
  return (
    <div className={cls.HomePage}>
      <div className={cls.WrapperSidebarRecipeList}>
        <Sidebar />
        <RecipeList />
      </div>
    </div>
  );
};

export default HomePage;
