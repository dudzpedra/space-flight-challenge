import { Box, Typography } from "@mui/material";
import RocketLogo from "../RocketLogo";

const TopBox = () => {
  return (
    <Box>
      <RocketLogo />
      <Typography className="top-title" variant="h5">
        Space Flight News
      </Typography>
    </Box>
  );
};

export default TopBox;
