import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useState } from "react"

const SelectSorting = () => {
  const [sortOptions, setSortOptions] = useState('')

  const handleChange = ({ target }: any) => setSortOptions(target.value)
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="select-sorting">Sort by</InputLabel>
      <Select id="select-sorting" value={sortOptions} label='Sort by' onChange={handleChange}>
        <MenuItem value='newest'>Newest</MenuItem>
        <MenuItem value='oldest'>Oldest</MenuItem>
      </Select>
    </FormControl>
  )
}

export default SelectSorting