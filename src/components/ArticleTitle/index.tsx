import { Box, Typography } from "@mui/material";

type ArticleTitleProps = {
  title: string
  isModal: boolean
}
const ArticleTitle = ({ title, isModal }: ArticleTitleProps) => {
  return (
    <Box>
      <Typography className={isModal ? 'details-title' : "article-title"}>
        {title}
      </Typography>
    </Box>
  );
};

export default ArticleTitle;
