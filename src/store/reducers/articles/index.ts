import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { searchByTitle } from "../../../services/searchService";
import { sortByNewest, sortByOldest } from "../../../services/sortService";
import { Article } from "../../../types";
import { RootState } from "../../index";

interface ArticleState {
  articlesList: Article[];
  filteredArticles: Article[];
  queryLimit: number
}

const initialState: ArticleState = {
  articlesList: [],
  filteredArticles: [],
  queryLimit: 3
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setArticles(state, action: PayloadAction<Article[]>) {
      state.articlesList = action.payload;
    },
    sortArticlesByNewest(state) {
      const sortedList = sortByNewest(state.articlesList);
      state.articlesList = sortedList;
    },
    sortArticlesByOldest(state) {
      const sortedList = sortByOldest(state.articlesList);
      state.articlesList = sortedList;
    },
    filterArticles(state, action: PayloadAction<string>) {
      if (action.payload !== '') {
        state.filteredArticles = searchByTitle(
          state.articlesList,
          action.payload
        );
      }
    },
    loadMore (state) {
      state.queryLimit += 3
    }
  },
});

export const {
  setArticles,
  sortArticlesByNewest,
  sortArticlesByOldest,
  filterArticles,
  loadMore
} = articlesSlice.actions;

export const selectArticles = (state: RootState) => state.articles.articlesList;

export default articlesSlice.reducer;
