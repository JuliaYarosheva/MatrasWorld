import {
  articleCardsPart1,
  articleCardsPart2,
  asideArticleCards,
} from "../data/articles";

export const getArticle = async ({ params }) => {
  const articles = await Promise.resolve([
    ...articleCardsPart1,
    ...articleCardsPart2,
    ...asideArticleCards,
  ]);

  const article = articles.find((item) => item.id === Number(params.articleId));

  return article ? article : null;
};
