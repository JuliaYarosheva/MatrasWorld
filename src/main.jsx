import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import ErrorPage from "./components/erroPage/ErrorPage";
import ArticleDetailPage from "./components/articleDetailPage/ArticleDetailPage";
import MainContent from "./components/main/MainContent";
import { getArticles, getArticle } from "./api";
import PageNotFound from "./components/PageNotFound/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: getArticles,
    id: "root",
    handle: {
      crumb: () => <Link to="/">Home</Link>,
    },
    children: [
      {
        path: "/",
        element: <MainContent />,
      },
      {
        path: "articles/:articleId",
        element: <ArticleDetailPage />,
        loader: getArticle,
        handle: {
          crumb: (data) => {
            return (
              <Link to={`/articles/${data.id}`}>Article {data && data.id}</Link>
            );
          },
        },
      },
      {
        path: "/404",
        element: <PageNotFound />,
        handle: {
          crumb: (data) => {
            return <Link to="/404">404</Link>;
          },
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
