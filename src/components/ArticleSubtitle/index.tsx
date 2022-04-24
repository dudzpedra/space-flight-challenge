import { Box } from "@mui/material";
import ArticleDate from "../ArticleDate";
import ArticleSite from "../ArticleSite";

type ArticleSubtitleProps = {
  date: string
  site: string
  isModal: boolean
}

const ArticleSubtitle = ({date, site, isModal}: ArticleSubtitleProps) => {
  return (
    <Box className={isModal ? 'details-subtitle' : "article-subtitle"}>
      <ArticleDate date={date} isModal={false} />
      <ArticleSite site={site} />
    </Box>
  );
};

export default ArticleSubtitle