import { Box, Typography } from "@mui/material";

type ArticleSummaryProps = {
  summary: string
}

const ArticleSummary = ({ summary }: ArticleSummaryProps) => {
  return (
    <Box>
      <Typography className="card-summary">{summary}</Typography>
    </Box>
  );
};

export default ArticleSummary