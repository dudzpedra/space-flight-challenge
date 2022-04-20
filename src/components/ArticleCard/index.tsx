import { Avatar, Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { Article } from "../../types";
import ArticleAvatar from "../ArticleAvatar";
import DetailsModal from "../DetailsModal";
import "./styles.sass";

type ArticleProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticleProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box className="card-container">
      <ArticleAvatar title={article.title} url={article.imageUrl} />
      <Box className="card-info">
        <Typography className="card-title" variant="h6">
          {article.title}
        </Typography>
        <Box className="card-subtitle">
          <Typography variant="caption">
            {new Date(article.publishedAt).toDateString()}
          </Typography>
          <Typography className="card-news-site">{article.newsSite}</Typography>
        </Box>
        <Typography variant="body2">{article.summary}</Typography>
        <Button onClick={handleOpen} className="card-btn" variant="contained">
          View More
        </Button>
        <DetailsModal open={open} handleClose={handleClose} article={article} />
      </Box>
    </Box>
  );
};

export default ArticleCard;
