import { useEffect } from "react";
import { useRouteError, useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  useEffect(() => {
    if (error.status === 404) {
      navigate("/404");
    }
  }, [error]);
  return (
    <div id="errorPage">
      {/* <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p> */}
    </div>
  );
}
