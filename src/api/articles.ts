import { api } from "./api";
import { Category } from "../models/Category";
import { Article } from "../models/Article";
import moment from "moment";

export namespace ArticlesApi {
  export const listArticles = (categories: Category[]) => {
    return Promise.all(
      categories.map((category) => api.get(`/articles/${category}`))
    )
      .then((responses) =>
        responses.reduce<Article[]>(
          (articles, response) => [...articles, ...response.data.articles],
          []
        )
      )
      .then((articles) =>
        articles.map((article) => ({
          ...article,
          date: moment(article.date, "D. MMMM YYYY"),
        }))
      );
  };
}
