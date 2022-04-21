import { Box, Typography } from "@mui/material";

type ArticleTitleProps = {
  title: string
}
const ArticleTitle = ({ title }: ArticleTitleProps) => {
  return (
    <Box>
      <Typography className="card-title" variant="h6">
        {title}
      </Typography>
    </Box>
  );
};

export default ArticleTitle;
