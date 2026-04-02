import { NavLink } from "react-router";

/**
 * Navigation Component
 * @returns {JSX.Element}
 */
function Nav() {
  return (
    <nav className="flex bg-orange-300">
      <ul className="mx-auto flex gap-1">
        <li className="text-xl font-bold cursor-pointer hover:text-white select-none">
          <NavLink
            to={"/"}
            className={({ isActive }) => {
              return isActive ? "text-red-600" : "text-black hover:text-white";
            }}
          >
            Home
          </NavLink>
        </li>
        <li className="text-xl font-bold cursor-pointer hover:text-white select-none">
          <NavLink
            to={"/rm"}
            className={({ isActive }) => {
              return isActive ? "text-red-600" : "text-black hover:text-white";
            }}
          >
            RickMorty
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
