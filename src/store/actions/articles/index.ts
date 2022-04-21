import {
  filterArticles,
  loadMore,
  setArticles,
  sortArticlesByNewest,
  sortArticlesByOldest,
} from "../../reducers/articles";
import { Article } from "../../../utils/types";
import { AppDispatch } from "../..";

export const setAllArticles =
  (articles: Article[]) => (dispatch: AppDispatch) =>
    dispatch(setArticles(articles));

export const sortArticlesNewest = () => (dispatch: AppDispatch) =>
  dispatch(sortArticlesByNewest());

export const sortArticlesOldest = () => (dispatch: AppDispatch) =>
  dispatch(sortArticlesByOldest());

export const searchArticles = (str: string) => (dispatch: AppDispatch) =>
  dispatch(filterArticles(str));

export const loadMoreArticles = () => (dispatch: AppDispatch) =>
  dispatch(loadMore());
