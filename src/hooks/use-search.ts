import { useState } from "react";
import { useAppDispatch } from "../store";
import { searchArticles } from "../store/actions/articles";

export const useSearch = () => {
  const [value, setValue] = useState("");

  const dispatch = useAppDispatch();

  const onChange = ({ target }: any) => {
    setValue(target.value);
    if (value) {
      dispatch(searchArticles(value));
    }
  };
  return {
    value,
    onChange,
  };
};
