import { navCategories } from "../../data/fakeData";
import PageNavItem from "./PageNavItem";
import styles from "./PageNav.module.scss";
import { useId } from "react";

const PageNav = () => {
  return (
    <div className="site-layout--secondary site-layout--nav">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className={styles.navbar + " navbar navbar-expand"}>
              <div className="container-fluid container">
                <div
                  className="collapse navbar-collapse row"
                  id="navbarNavDarkDropdown"
                >
                  <ul className="navbar-nav justify-content-center">
                    {navCategories.map((category) => {
                      const id = useId();
                      return (
                        <li
                          key={id}
                          className={
                            styles.navItem +
                            " nav-item dropdown col-sm-1 col-lg-2"
                          }
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
                    <li
                      className={
                        styles.navItem + " nav-item dropdown col-sm-1 col-lg-2"
                      }
                    >
                      <a href="#" className="nav-link">
                        Info
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNav;
