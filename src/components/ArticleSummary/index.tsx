import { Box, Typography } from "@mui/material";

type ArticleSummaryProps = {
  summary: string
  isModal: boolean
}

const ArticleSummary = ({ summary, isModal }: ArticleSummaryProps) => {
  return (
    <Box>
      <Typography className={isModal ? 'details-summary' : "article-summary"}>{summary}</Typography>
    </Box>
  );
};

export default ArticleSummary