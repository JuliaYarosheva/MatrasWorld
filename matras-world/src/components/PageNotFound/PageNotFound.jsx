import { Link, useRouteError } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div id="pageNotFound">
      <h1>Oops!</h1>
      <p>Sorry, page not found.</p>
      <Link to="/">To main page</Link>
    </div>
  );
}
