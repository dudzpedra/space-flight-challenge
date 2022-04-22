import { Box, Typography } from "@mui/material";
import TopMenu from "../../TopMenu";
import RocketLogo from "../RocketLogo";

const Header = () => {
  return (
    <Box className="top-container">
      <TopMenu />
      <Box>
        <RocketLogo />
        <Typography className="top-title" variant="h5">
          Space Flight News
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
