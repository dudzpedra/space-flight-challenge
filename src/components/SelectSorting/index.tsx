import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useSelect } from "../../hooks/use-select"
import { useAppDispatch } from "../../store"
import { sortArticlesNewest, sortArticlesOldest } from "../../store/actions/articles"

const SelectSorting = () => {
  const dispatch = useAppDispatch()

  const sorting = useSelect()

  if (sorting.value === 'newest') {
    dispatch(sortArticlesNewest())
  } else {
    dispatch(sortArticlesOldest())
  }

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="select-sorting">Sort by</InputLabel>
      <Select id="select-sorting" value={sorting.value} label='Sort by' onChange={sorting.onChange}>
        <MenuItem value='newest'>Newest</MenuItem>
        <MenuItem value='oldest'>Oldest</MenuItem>
      </Select>
    </FormControl>
  )
}

export default SelectSorting