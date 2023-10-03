import {
  articleCardsPart1,
  articleCardsPart2,
  asideArticleCards,
} from "../data/articles";

export const getArticles = async () => {
  const articles = await Promise.resolve([
    ...articleCardsPart1,
    ...articleCardsPart2,
    ...asideArticleCards,
  ]);

  return { articles };
};
