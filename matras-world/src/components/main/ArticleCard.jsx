import { Link } from "react-router-dom";
import styles from "./ArticleCard.module.scss";

const ArticleCard = ({ articles, col = 12 }) => {
  return (
    <>
      {articles.map((article, index) => {
        return (
          <div className={` col-${col}`}>
            <Link key={article.id} to={`articles/${article.id}`}>
              <div className={styles.articleCardContainer}>
                <img
                  className={styles.articleCardImg}
                  src={article.img}
                  alt={article.title}
                />
                <div className={styles.articleTextWrapper}>
                  <h6 className={styles.articleCardTitle}>{article.title}</h6>
                  {article.text && (
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
