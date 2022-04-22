import { Article } from "../utils/types";

export const searchByTitle = (list: Article[], str: string) => {
  const newList = [...list].filter(a => a.title.toLowerCase().trim().includes(str.toLowerCase()))
  return newList
}