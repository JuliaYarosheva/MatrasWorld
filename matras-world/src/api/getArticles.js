import { articleCards, asideArticleCards } from "../data/articles";

export const getArticles = async () => {
  const articles = await Promise.resolve([
    ...articleCards,
    ...asideArticleCards,
  ]);

  return { articles };
};
