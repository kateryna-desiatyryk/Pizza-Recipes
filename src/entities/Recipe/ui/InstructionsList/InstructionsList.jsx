import React from "react";
import cls from "./InstructionsList.module.css";

const InstructionsList = ({ instructions }) => {
  return (
    <div className={cls.InstructionsListWrapper}>
      <h3>Instructions</h3>
      <div className={cls.InstructionsList}>
        {instructions.map((item, index) => (
          <div key={index} className={cls.Step}>
            <span className={cls.Circle}>{index + 1}</span>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructionsList;
