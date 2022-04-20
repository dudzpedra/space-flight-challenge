import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getData } from "../../services/getData";
import { Article } from "../../types";
import ArticleCard from "../ArticleCard";
import "./styles.sass";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    const data = await getData();
    console.log(data);
    
    setArticles(data)
  };

  useEffect(() => {
    getArticles()
  }, []);

  return (
    <Box className="list-container">
      {articles && articles.map((a: Article) => (
        <ArticleCard key={a.id} article={a} />
      ))}
    </Box>
  );
};

export default ArticlesList;
