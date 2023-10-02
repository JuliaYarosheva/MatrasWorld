import styles from "./ArticleCard.module.scss";

const ArticleCard = ({ articles, col = 12 }) => {
  return (
    <>
      {articles.map((article, index) => {
        return (
          <div
            key={article.title + index}
            className={styles.articleCardContainer + ` col-${col}`}
          >
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
        );
      })}
    </>
  );
};

export default ArticleCard;
