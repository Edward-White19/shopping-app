import React, { createContext, useState, useContext } from "react";
import lightTheme from "../themes/lightTheme.json";
import darkTheme from "../themes/darkTheme.json";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Use state for { (boolean) isDarkTheme }.
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Toggle method for { (boolean) isDarkTheme }.
  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  // Theme object, containing the colours.
  const theme = (isDarkTheme) ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useAppTheme = () => useContext(ThemeContext);
