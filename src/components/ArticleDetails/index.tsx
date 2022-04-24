import { Box, Button } from "@mui/material";

type ArticleDetailsProps = {
  handleOpen: () => void
}
const ArticleDetails = ({ handleOpen }: ArticleDetailsProps) => {
  return (
    <Box>
      <Button
        onClick={handleOpen}
        className="article-btn"
        variant="contained"
        color="secondary"
      >
        View More
      </Button>
    </Box>
  );
};

export default ArticleDetails;
