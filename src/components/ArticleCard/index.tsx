import { Box } from "@mui/material";
import { Article } from "../../utils/types";
import ArticleAvatar from "../ArticleAvatar";
import ArticleInfo from "../ArticleInfo";
import "./styles.sass";

type ArticleProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticleProps) => {
  
  return (
    <Box className="card-container">
      <ArticleAvatar title={article.title} url={article.imageUrl} />
      <ArticleInfo article={article} />
    </Box>
  );
};

export default ArticleCard;
