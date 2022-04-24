import { Box, Typography } from "@mui/material";
import './styles.sass'

type ArticleDateProps = {
  date: string
  isModal: boolean
}
const ArticleDate = ({ date, isModal }: ArticleDateProps) => {
  return (
    <Box>
      <Typography className={isModal ? 'details-date' : "article-date"}>{new Date(date).toDateString()}</Typography>
    </Box>
  );
};

export default ArticleDate;
