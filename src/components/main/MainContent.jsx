import ArticleCard from "./ArticleCard";
import PageSlider from "./PageSlider";
import {
  asideArticleCards,
  articleCardsPart1,
  articleCardsPart2,
  imageArticles,
} from "../../data/articles";
import styles from "./MainContent.module.scss";

const MainContent = () => {
  return (
    <main>
      <div className="site-layout--default site-layout--primary">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-9">
              <PageSlider />
            </div>
            <div className="col-sm-12 col-md-3">
              <ArticleCard articles={asideArticleCards} type="aside" />
            </div>
          </div>
        </div>
      </div>
      <div className="site-layout--default site-layout--primary">
        <div className="container">
          <div className="row">
            <ArticleCard col={3} articles={articleCardsPart1} type="regular" />
          </div>
        </div>
      </div>
      <div className="site-layout--default site-layout--secondary">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className={styles.sectionTitle}>Lorem ipsum dolor</h3>
            </div>
            <ArticleCard col={6} articles={imageArticles} type="image" />
          </div>
        </div>
      </div>
      <div className="site-layout--default site-layout--primary">
        <div className="container">
          <div className="row">
            <ArticleCard col={3} articles={articleCardsPart2} type="regular" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
