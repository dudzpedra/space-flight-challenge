import { Box } from "@mui/material";
import { Article } from "../../utils/types";
import ArticleAvatar from "../ArticleAvatar";
import ArticleInfo from "../ArticleInfo";
import "./styles.sass";

type ArticleProps = {
  article: Article;
  index: number
};

const ArticleCard = ({ article, index }: ArticleProps) => {
  
  return (
    <Box className={index%2 === 0 ? 'card-even' : "card-odd"}>
      <ArticleAvatar title={article.title} url={article.imageUrl} isModal={false} />
      <ArticleInfo article={article} />
    </Box>
  );
};

export default ArticleCard;
