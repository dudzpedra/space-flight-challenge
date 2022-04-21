import { Box, Typography } from "@mui/material";
import './styles.sass'
type ArticleSummaryProps = {
  summary: string
}

const ArticleSummary = ({ summary }: ArticleSummaryProps) => {
  return (
    <Box className="article-summary">
      <Typography variant="body2">{summary}</Typography>
    </Box>
  );
};

export default ArticleSummary