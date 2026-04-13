import { useContext } from "react";
import { NavLink } from "react-router";

import themeContext from "../contexts/theme/context.js";
import themeReducerContext from "../contexts/themeReducer/context.js";
/**
 * Navigation Component
 * @returns {JSX.Element}
 */
function Nav() {
  const themeCtx = useContext(themeContext);
  const { state: themeState, dispatch: themeDispatch } = useContext(themeReducerContext);
  // console.log(themeCtx);
  return (
    <nav className={`flex ${themeCtx.theme === "light" ? "bg-orange-300" : "bg-orange-800"}`}>
      <ul className="mx-auto flex gap-1">
        <li className="text-xl font-bold cursor-pointer select-none">
          <NavLink
            to={"/"}
            className={({ isActive }) => {
              if (themeState.theme === "light") {
                return isActive ? "text-red-500" : "text-black hover:text-white";
              } else {
                return isActive ? "text-red-500" : "text-white hover:text-black";
              }
            }}
            end
          >
            Home
          </NavLink>
        </li>
        <li className="text-xl font-bold cursor-pointer select-none">
          <NavLink
            to={"/pokemon"}
            className={({ isActive }) => {
              if (themeState.theme === "light") {
                return isActive ? "text-red-500" : "text-black hover:text-white";
              } else {
                return isActive ? "text-red-500" : "text-white hover:text-black";
              }
            }}
            end
          >
            Pokemon
          </NavLink>
        </li>
      </ul>
      <button onClick={() => themeCtx.toggleTheme()} className="borderstd-black cursor-pointer p-1">
        Change Theme
      </button>
      <button onClick={() => themeDispatch(toggleActionCreator())} className="borderstd-black cursor-pointer p-1 ml-2">
        Ganti Tema
      </button>
      <button onClick={() => themeDispatch(toggleActionCreator())}>
        {themeState.theme === "light" ? "terang" : "gelap"}
      </button>
    </nav>
  );
}

function toggleActionCreator() {
  return {
    type: "toggle",
  };
}

export default Nav;
