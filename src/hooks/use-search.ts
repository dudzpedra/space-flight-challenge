import { useState } from "react"

export const useSearch = () => {
  const [value, setValue] = useState('')
  const onChange = ({ target }: any) => setValue(target.value)
  return {
    value,
    onChange,
    setValue
  }
}