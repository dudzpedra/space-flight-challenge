export type Launches = {
  id: string
  provider: string
}

export type Events = {
  id: string
  provider: string
}

export interface Article {
  id: number
  title: string
  url: string
  imageUrl: string
  newsSite: string
  summary: string
  publishedAt: string
  launches: Launches[]
  events: Events[]
}