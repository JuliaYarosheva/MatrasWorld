import { Link } from "react-router-dom";
import styles from "./ArticleCard.module.scss";
import { useId } from "react";

const ArticleCard = ({ articles, col = 12, type }) => {
  return (
    <>
      {articles.map((article, index) => {
        const id = useId();
        return (
          <div key={id} className={`col-sm-12 col-lg-${col}`}>
            <Link key={article.id} to={`articles/${article.id}`}>
              <div
                className={
                  type === "image"
                    ? styles.articleCardContainerRelative
                    : styles.articleCardContainerRegular
                }
              >
                <img
                  className={styles.articleCardImg}
                  src={article.img}
                  alt={article.title}
                />
                <div className={styles.articleTextWrapper}>
                  <h6 className={styles.articleCardTitle}>{article.title}</h6>
                  {article.text && type === "regular" && (
                    <p className={styles.articleCardText}>{article.text}</p>
                  )}
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default ArticleCard;
