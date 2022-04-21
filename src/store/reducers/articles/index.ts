import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { searchByTitle } from "../../../services/searchService";
import { sortByNewest, sortByOldest } from "../../../services/sortService";
import { Article, ArticleState } from "../../../utils/types";

const initialState: ArticleState = {
  articlesList: [],
  filteredArticles: [],
  queryLimit: 10,
  amount: 10
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
      state.queryLimit += state.amount
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

export default articlesSlice.reducer;
