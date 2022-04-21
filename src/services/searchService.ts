import { Article } from "../types";

export const searchByTitle = (list: Article[], str: string) => {
  const newList = [...list].filter(a => a.title.toLowerCase().includes(str))
  return newList
}