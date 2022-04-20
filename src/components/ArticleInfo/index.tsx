import { Box, Button, Typography } from "@mui/material"
import { Article } from "../../types"
import DetailsModal from "../DetailsModal"
import { useState } from "react";

type ArticleInfoProps = {
  article: Article
}

const ArticleInfo = ({ article }: ArticleInfoProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box className="card-info">
        <Typography className="card-title" variant="body1">
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
  )
}

export default ArticleInfo