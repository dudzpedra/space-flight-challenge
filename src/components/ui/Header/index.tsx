import { Box } from "@mui/material";
import TopBox from "../TopBox";
import TopMenu from "../../ui/TopMenu";

const Header = () => {
  return (
    <Box className="top-container">
      <TopMenu />
      <TopBox />
    </Box>
  );
};

export default Header;
