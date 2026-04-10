import { useContext } from "react";
import { NavLink } from "react-router";

import themeContext from "../contexts/theme/context.js";
/**
 * Navigation Component
 * @returns {JSX.Element}
 */
function Nav() {
  const themeCtx = useContext(themeContext);
  // console.log(themeCtx);
  return (
    <nav className={`flex ${themeCtx.theme === "light" ? "bg-orange-300" : "bg-orange-800"}`}>
      <ul className="mx-auto flex gap-1">
        <li className="text-xl font-bold cursor-pointer hover:text-white select-none">
          <NavLink
            to={"/"}
            className={({ isActive }) => {
              return isActive ? "text-red-600" : "text-black hover:text-white";
            }}
            end
          >
            Home
          </NavLink>
        </li>
        <li className="text-xl font-bold cursor-pointer hover:text-white select-none">
          <NavLink
            to={"/pokemon"}
            className={({ isActive }) => {
              return isActive ? "text-red-600" : "text-black hover:text-white";
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
    </nav>
  );
}

export default Nav;
