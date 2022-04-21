import { Box } from "@mui/material";
import { Article } from "../../utils/types";
import DetailsModal from "../DetailsModal";
import { useState } from "react";
import ArticleTitle from "../ArticleTitle";
import ArticleSubtitle from "../ArticleSubtitle";
import ArticleSummary from "../ArticleSummary";
import ArticleDetails from "../ArticleDetails";

type ArticleInfoProps = {
  article: Article;
};

const ArticleInfo = ({ article }: ArticleInfoProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box className="card-info">
      <ArticleTitle title={article.title} />
      <ArticleSubtitle date={article.publishedAt} site={article.newsSite} />
      <ArticleSummary summary={article.summary} />
      <ArticleDetails handleOpen={handleOpen} />
      <DetailsModal open={open} handleClose={handleClose} article={article} />
    </Box>
  );
};

export default ArticleInfo;
