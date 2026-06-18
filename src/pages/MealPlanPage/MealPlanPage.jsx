import React from "react";
import cls from "./MealPlanPage.module.css";
import Sidebar from "../../widgets/Sidebar/Sidebar";
import MealPlanCell from "../../entities/MealPlan/ui/MealPlanCell";

const MealPlanPage = () => {
  return (
    <div className={cls.MealPlanPage}>
      <Sidebar />
      <MealPlanCell />
    </div>
  );
};

export default MealPlanPage;
