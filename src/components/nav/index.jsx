import { NavLink } from "react-router-dom";
import "./navigation.css";
function Nav() {
  return (
    <header>
      <nav>
        <ul className="navigation-menu">
          <li>
            <NavLink
              className={(isActive) =>
                isActive ? "activeStyle" : "inactiveStyle"
              }
              exact to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(isActive) =>
                isActive ? "activeStyle" : "inactiveStyle"
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(isActive) =>
                isActive ? "activeStyle" : "inactiveStyle"
              }
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Nav;
