import { Box, Button } from "@mui/material";
import { useEffect, useCallback } from "react";
import { getData } from "../../services/getData";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadMoreArticles, setAllArticles } from "../../store/actions/articles";
import { Article } from "../../utils/types";
import ArticleCard from "../ArticleCard";
import "./styles.sass";

const ArticlesList = () => {
  const dispatch = useAppDispatch();

  const articles = useAppSelector((state) =>
    state.articles.filteredArticles.length > 0
      ? state.articles.filteredArticles
      : state.articles.articlesList
  );

  const limit = useAppSelector((state) => state.articles.queryLimit);

  const getArticles = useCallback(async (lim: number) => {
    const data: Article[] = await getData(lim);
    dispatch(setAllArticles(data));
  }, [dispatch]);

  useEffect(() => {
    getArticles(limit);
  }, [limit, getArticles]);

  const handleLoad = () => {
    dispatch(loadMoreArticles())
  };

  return (
    <Box className="main-container">
      {articles &&
        articles.map((a: Article, index: number) => <ArticleCard index={index} key={a.id} article={a} />)}
      <Button onClick={handleLoad} variant="outlined" color="secondary">
        Load More
      </Button>
    </Box>
  );
};

export default ArticlesList;
