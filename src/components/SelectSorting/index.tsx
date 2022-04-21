import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect } from "react";
import { useSelect } from "../../hooks/use-select";
import { useAppDispatch } from "../../store";
import {
  sortArticlesNewest,
  sortArticlesOldest,
} from "../../store/actions/articles";

const SelectSorting = () => {
  const dispatch = useAppDispatch();

  const {value, onChange} = useSelect();

  useEffect(() => {
    if (value === "newest") {
      dispatch(sortArticlesNewest());
    } else {
      dispatch(sortArticlesOldest());
    }
  }, [dispatch, value]);

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="select-sorting">Sort by</InputLabel>
      <Select
        id="select-sorting"
        value={value}
        label="Sort by"
        onChange={onChange}
      >
        <MenuItem value="newest">Newest</MenuItem>
        <MenuItem value="oldest">Oldest</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectSorting;
