import { Children } from "react";
import { navCategoryItems } from "../../data/fakeData";
const PageNavItem = () => {
  return (
    <ul
      className="dropdown-menu dropdown-menu-light"
      aria-labelledby="navbarDarkDropdownMenuLink"
    >
      {navCategoryItems.map((item, i) => {
        return (
          <li>
            <a className="dropdown-item" href="#" key={i}>
              {item}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageNavItem;
