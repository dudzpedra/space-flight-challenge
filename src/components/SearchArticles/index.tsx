import { Search } from "@mui/icons-material";
import {
  Box,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { useSearch } from "../../hooks/use-search";
import "./styles.sass";

const SearchArticles = () => {
  const search = useSearch();

  const handleSearch = (str: string) => {
    alert(str);
    search.setValue('')
  };

  return (
    <Box className="search-container">
      <FormControl>
        <InputLabel htmlFor="search-input">Search Articles</InputLabel>
        <Input
          value={search.value}
          onChange={search.onChange}
          id="search-input"
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={() => handleSearch(search.value)}>
                <Search />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
};

export default SearchArticles;
