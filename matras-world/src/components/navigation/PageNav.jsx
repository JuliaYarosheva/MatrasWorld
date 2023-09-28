import { navCategories } from "../../data/fakeData";
import PageNavItem from "./PageNavItem";
import styles from "./PageNav.module.scss";

const PageNav = () => {
  return (
    <nav className={styles.navbar + " navbar navbar-expand"}>
      <div class="container-fluid">
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarNavDarkDropdown"
        >
          <ul className="navbar-nav">
            {navCategories.map((category) => {
              return (
                <li className={styles.navItem + " nav-item dropdown"}>
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
            <li className="nav-item">
              <a href="#" className="nav-link">
                Info
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default PageNav;
