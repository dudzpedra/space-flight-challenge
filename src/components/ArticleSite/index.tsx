import { Box, Typography, useTheme } from "@mui/material";
import './styles.sass'
type ArticleSiteProps = {
  site: string;
};
const ArticleSite = ({ site }: ArticleSiteProps) => {
  const { palette } = useTheme()

  return (
    <Box>
      <Typography
        className="card-news-site"
        sx={{ bgcolor: palette.info.main }}
      >
        {site}
      </Typography>
    </Box>
  );
};

export default ArticleSite;
