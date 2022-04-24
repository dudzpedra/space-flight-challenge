import { Close } from "@mui/icons-material";
import { Box, Button, Link } from "@mui/material";
import { Article } from "../../utils/types";
import ArticleAvatar from "../ArticleAvatar";
import ArticleDate from "../ArticleDate";
import ArticleSummary from "../ArticleSummary";
import ArticleTitle from "../ArticleTitle";
import "./styles.sass";

type DetailsCardProps = {
  article: Article;
  handleClose: () => void
};

const DetailsCard = ({ article, handleClose }: DetailsCardProps) => {
  return (
    <Box className="details-container">
      <Button className="close-modal-btn" onClick={handleClose}>
        <Close />
      </Button>
      <Box className="details-main">
        <ArticleAvatar
          title={article.title}
          url={article.imageUrl}
          isModal={true}
        />
        <Box className="details-info">
          <ArticleTitle title={article.title} isModal={true} />
          <ArticleDate date={article.publishedAt} isModal={true} />
          <ArticleSummary summary={article.summary} isModal={true} />
        </Box>
      </Box>
      <Box className="details-link">
        <Link href={article.url} target="_blank" rel="noreferrer noopener">
          <Button className="details-btn" variant="contained" color="primary">
            Go to news site
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default DetailsCard;
