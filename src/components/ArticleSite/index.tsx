import { Box, Typography, useTheme } from "@mui/material";
type ArticleSiteProps = {
  site: string;
};
const ArticleSite = ({ site }: ArticleSiteProps) => {
  const { palette } = useTheme()

  return (
    <Box>
      <Typography
        className="article-site"
        sx={{ bgcolor: palette.info.main }}
      >
        {site}
      </Typography>
    </Box>
  );
};

export default ArticleSite;
