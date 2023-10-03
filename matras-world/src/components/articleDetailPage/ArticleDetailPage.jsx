import React, { useEffect, useMemo } from "react";
import { useParams, useRouteLoaderData, useNavigate } from "react-router-dom";

const ArticleDetailPage = () => {
  const { articles } = useRouteLoaderData("root");
  const { articleId } = useParams();
  const navigate = useNavigate();
  const article = useMemo(() => {
    return articles.find((item) => item.id === Number(articleId));
  }, [articles, articleId]);

  useEffect(() => {
    if (article === undefined) {
      navigate("/404");
    }
  }, [article]);

  return (
    article && (
      <div>
        <h1>ArticleDetailPage</h1> <div>{article.id}</div>
        <div>{article.title}</div>
        {article.text && <div>{article.text}</div>}
      </div>
    )
  );
};

export default ArticleDetailPage;
