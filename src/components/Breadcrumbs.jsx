import { useMatches } from "react-router-dom";
import styles from "./Breadcrumbs.module.scss";

const Breadcrumbs = () => {
  let matches = useMatches();
  let crumbs = matches
    // first get rid of any matches that don't have handle and crumb
    .filter((match) => Boolean(match.handle?.crumb))
    // now map them into an array of elements, passing the loader
    // data to each one
    .map((match) => match.handle.crumb(match.data));

  return (
    <div className="col-sm-12 col-lg-6 display-flex align-items-center">
      <ul className={styles.breadcrumbsWrapper}>
        {crumbs.map((crumb, index) => {
          return (
            <li
              className={
                crumbs.length > 1 && index == crumbs.length - 1
                  ? styles.breadcrumbsItemActive
                  : styles.breadcrumbsItem
              }
              key={index}
            >
              {index !== 0 && <span>&#32;&#47;&#32;</span>}
              {crumb}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
