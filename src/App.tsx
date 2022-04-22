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
            <RocketLaunch className="rocket" />
          </Avatar>
          <Typography className="top-title" variant="h5">Space Flight News</Typography>
        </Box>
      </Box>
      <Box className="main-container">
        <ArticlesList />
      </Box>
    </Box>
  );
}

export default App;
