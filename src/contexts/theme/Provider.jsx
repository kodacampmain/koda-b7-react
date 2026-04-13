import { useState } from "react";
import ThemeContext from "./context";

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((oldTheme) => {
      if (oldTheme === "light") return "dark";
      return "light";
    });
  };
  const funcA = () => {
    return "Hello World";
  };
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        funcA,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
