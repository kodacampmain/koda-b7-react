import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Provider as ReduxProvider } from "react-redux";

import "./globals.css";
import AppRouter from "./AppRouter.jsx";
import ThemeProvider from "./contexts/theme/Provider.jsx";
import ThemeReducerProvider from "./contexts/themeReducer/Provider.jsx";
import TodosProvider from "./contexts/todos/Provider.jsx";
import store from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <ReduxProvider store={store}>
    <TodosProvider>
      <ThemeReducerProvider>
        <ThemeProvider>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </ThemeProvider>
      </ThemeReducerProvider>
    </TodosProvider>
  </ReduxProvider>,
);
