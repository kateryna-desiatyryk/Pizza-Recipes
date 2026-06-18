import React, { createContext, useContext, useState } from "react";

const ThemeCTX = createContext();
export const useTheme = () => useContext(ThemeCTX);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("ligth");

  const toggleTheme = () => {
    const nexTheme = theme === "ligth" ? "dark" : "ligth";
    document.documentElement.dataset.theme = nexTheme;
    setTheme(nexTheme);
  };

  return (
    <ThemeCTX.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeCTX.Provider>
  );
};

export default ThemeProvider;
