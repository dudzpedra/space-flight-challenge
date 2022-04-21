import { Box } from "@mui/material";
import ArticleDate from "../ArticleDate";
import ArticleSite from "../ArticleSite";
import './styles.sass'

type ArticleSubtitleProps = {
  date: string
  site: string
}

const ArticleSubtitle = ({date, site}: ArticleSubtitleProps) => {
  return (
    <Box className="card-subtitle">
      <ArticleDate date={date} />
      <ArticleSite site={site} />
    </Box>
  );
};

export default ArticleSubtitle