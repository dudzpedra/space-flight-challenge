import { Box, Typography } from "@mui/material";
import './styles.sass'

type ArticleDateProps = {
  date: string
}
const ArticleDate = ({ date }: ArticleDateProps) => {
  return (
    <Box>
      <Typography className="article-date">{new Date(date).toDateString()}</Typography>
    </Box>
  );
};

export default ArticleDate;
