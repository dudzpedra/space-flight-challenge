import { Box, Button, Link } from "@mui/material";
import { Article } from "../../utils/types";
import ArticleAvatar from "../ArticleAvatar";
import ArticleDate from "../ArticleDate";
import ArticleSummary from "../ArticleSummary";
import ArticleTitle from "../ArticleTitle";
import "./styles.sass";

type DetailsCardProps = {
  article: Article;
};

const DetailsCard = ({ article }: DetailsCardProps) => {
  return (
    <Box className="details-container">
      <Box className="details-main">
        <Box className="details-avatar">
          <ArticleAvatar title={article.title} url={article.imageUrl} />
        </Box>
        <Box className="details-info">
          <ArticleTitle title={article.title} />
          <ArticleDate date={article.publishedAt} />
          <ArticleSummary summary={article.summary} />
        </Box>
      </Box>
      <Box className="details-btn">
        <Link href={article.url} target="_blank" rel="noreferrer noopener">
          <Button variant="contained" color="primary">
            Go to news site
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default DetailsCard;
