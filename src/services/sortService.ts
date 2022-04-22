import { Article } from "../utils/types";

export const sortByNewest = (list: Article[]) =>
  [...list].sort((a, b) =>
    new Date(a.publishedAt).getTime() > new Date(b.publishedAt).getTime() ? -1 : 1
  );

  export const sortByOldest = (list: Article[]) =>
  [...list].sort((a, b) =>
    new Date(a.publishedAt).getTime() > new Date(b.publishedAt).getTime() ? 1 : -1
  );
