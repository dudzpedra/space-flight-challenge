import { Box } from "@mui/material";
import "./App.sass";
import ArticlesList from "./components/ArticlesList";
import Header from "./components/ui/Header";

function App() {
  return (
    <Box className="app-container">
      <Header />
      <ArticlesList />
    </Box>
  );
}

export default App;
