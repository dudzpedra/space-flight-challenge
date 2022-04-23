import { Search } from "@mui/icons-material";
import {
  Box,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { useSearch } from "../../hooks/use-search";
import "./styles.sass";

const SearchArticles = () => {
  const search = useSearch();

  return (
    <Box className="search-container">
      <FormControl>
        <InputLabel htmlFor="search-input">Search</InputLabel>
        <Input
          {...search}
          id="search-input"
          endAdornment={
            <InputAdornment position="end">
                <Search />
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
};

export default SearchArticles;
