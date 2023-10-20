import React from "react";
import ThemeContext from "./ThemeContext";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};

export default ThemeToggleButton;
