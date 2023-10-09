import PageNavItem from "./PageNavItem";
import { useId } from "react";
import { navCategories } from "../../data/fakeData";

const NavMenuContent = ({ styles }) => {
  return (
    <ul className="navbar-nav justify-content-center">
      {navCategories.map((category) => {
        const id = useId();
        return (
          <li
            key={id}
            className={styles.navItem + " nav-item dropdown col-sm-1 col-lg-2"}
          >
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDarkDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {category}
            </a>
            <PageNavItem />
          </li>
        );
      })}
      <li className={styles.navItem + " nav-item dropdown col-sm-1 col-lg-2"}>
        <a href="#" className="nav-link">
          Info
        </a>
      </li>
    </ul>
  );
};

export default NavMenuContent;
