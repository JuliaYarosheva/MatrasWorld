import { useMatches } from "react-router-dom";

const Breadcrumbs = () => {
  let matches = useMatches();
  let crumbs = matches
    // first get rid of any matches that don't have handle and crumb
    .filter((match) => Boolean(match.handle?.crumb))
    // now map them into an array of elements, passing the loader
    // data to each one
    .map((match) => match.handle.crumb(match.data));

  return (
    <div className="col-6">
      <ul className="display-flex">
        {crumbs.map((crumb, index) => (
          <li style={{ fontSize: 13 + "px" }} key={index}>
            {crumb}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
