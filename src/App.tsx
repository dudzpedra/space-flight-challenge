import { RocketLaunch } from "@mui/icons-material";
import { Avatar, Box, Typography } from "@mui/material";
import "./App.sass";
import ArticlesList from "./components/ArticlesList";
import SearchArticles from "./components/SearchArticles";
import SelectSorting from "./components/SelectSorting";

function App() {
  return (
    <Box className="app-container">
      <Box className="top-container">
        <Box className="top-menu">
          <SearchArticles />
          <SelectSorting />
        </Box>
        <Box>
          <Avatar className="avatar">
            <RocketLaunch sx={{ fontSize: 80 }} />
          </Avatar>
          <Typography className="top-title" variant="h4">Space Flight News</Typography>
        </Box>
      </Box>
      <Box className="main-container">
        <ArticlesList />
      </Box>
    </Box>
  );
}

export default App;
