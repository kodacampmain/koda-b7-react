import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import "./globals.css";
import AppRouter from "./AppRouter.jsx";
import ThemeProvider from "./contexts/theme/Provider.jsx";
import ThemeReducerProvider from "./contexts/themeReducer/Provider.jsx";
import TodosProvider from "./contexts/todos/Provider.jsx";

createRoot(document.getElementById("root")).render(
  <TodosProvider>
    <ThemeReducerProvider>
      <ThemeProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ThemeProvider>
    </ThemeReducerProvider>
  </TodosProvider>,
);
