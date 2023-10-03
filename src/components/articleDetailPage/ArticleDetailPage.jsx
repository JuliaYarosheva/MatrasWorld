import React, { useEffect, useMemo } from "react";
import { useParams, useRouteLoaderData, useNavigate } from "react-router-dom";
import styles from "./ArticleDetailPage.module.scss";

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
      <div className="site-layout--default site-layout--primary">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="container">
                <div className="row">
                  <div className={styles.articleDPwrapper}>
                    <div className="col-9">
                      <h1 className={styles.articleDPtitle}>{article.title}</h1>
                    </div>
                    <div className="col-9">
                      <img
                        className={styles.articleDPimg}
                        src={article.img}
                        alt={article.title}
                      />
                    </div>
                    <div className="col-9">
                      {article.text && (
                        <p className={styles.articleDPtext}>{article.text}</p>
                      )}
                    </div>
                    <div className="col-sm-6 col-md-2">
                      <button className={styles.articleDPbutton} type="button">
                        Take a test
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ArticleDetailPage;
