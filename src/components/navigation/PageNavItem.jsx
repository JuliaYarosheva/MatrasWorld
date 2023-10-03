import { Children, useId } from "react";
import { navCategoryItems } from "../../data/fakeData";
const PageNavItem = () => {
  return (
    <ul
      className="dropdown-menu dropdown-menu-light"
      aria-labelledby="navbarDarkDropdownMenuLink"
    >
      {navCategoryItems.map((item, i) => {
        const id = useId();
        return (
          <li key={id}>
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
