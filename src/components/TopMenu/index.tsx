import { Box } from "@mui/material";
import SearchArticles from "../SearchArticles";
import SelectSorting from "../SelectSorting";

const TopMenu = () => {
  return (
    <Box className="top-menu">
      <SearchArticles />
      <SelectSorting />
    </Box>
  );
};

export default TopMenu