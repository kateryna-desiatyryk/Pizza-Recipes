import cls from "./ThemeToggle.module.css";
import Sun from "../../assets/solar_sun-broken.svg";
import Moon from "../../assets/solar_moon-broken.svg";
import { useTheme } from "../../../app/providers/ThemeProvider";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={cls.ThemeToggle}>
      <span className={cls.title}>Theme</span>

      <div className={cls.content}>
        <span>
          <img src={Sun} alt="sun" />
        </span>

        <button
          className={`${cls.switch} ${theme === "dark" ? cls.dark : ""}`}
          onClick={toggleTheme}
          type="button"
        >
          <span className={cls.circle} />
        </button>

        <span>
          <img src={Moon} alt="moon" />
        </span>
      </div>
    </div>
  );
};

export default ThemeToggle;
