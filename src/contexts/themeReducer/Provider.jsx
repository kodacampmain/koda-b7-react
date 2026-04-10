import { useReducer } from "react";
import ThemeReducerContext from "./context.js";

const initialState = {
  theme: "light",
};
function ThemeReducerProvider({ children }) {
  const [state, dispatch] = useReducer((prevState, { type }) => {
    switch (type) {
      case "toggle":
        return {
          ...prevState,
          theme: prevState.theme === "light" ? "dark" : "light",
        };
      default:
        return prevState;
    }
  }, initialState);
  return <ThemeReducerContext.Provider value={{ state, dispatch }}>{children}</ThemeReducerContext.Provider>;
}

export default ThemeReducerProvider;
