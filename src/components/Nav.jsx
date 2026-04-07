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
    </nav>
  );
}

export default Nav;
