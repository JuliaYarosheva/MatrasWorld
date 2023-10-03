import ArticleCard from "./ArticleCard";
import PageSlider from "./PageSlider";
import { asideArticleCards, articleCards } from "../../data/articles";

const MainContent = () => {
  return (
    <main>
      <div className="site-layout--default site-layout--primary">
        <div className="container">
          <div className="row h-25">
            <div className="col-9">
              <PageSlider />
            </div>
            <div className="col-3">
              <ArticleCard articles={asideArticleCards} />
            </div>
          </div>
        </div>
      </div>
      <div className="site-layout--default site-layout--primary">
        <div className="container">
          <div className="row">
            <ArticleCard col={3} articles={articleCards} />
          </div>
        </div>
      </div>
      <div className="site-layout--default site-layout--secondary">
        <div className="container">
          <div className="row"></div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
