import axios from "axios"

const baseUrl = 'https://api.spaceflightnewsapi.net/v3/articles'

export const getData = async (limit: number) => {
  const response = await axios.get(`${baseUrl}?_limit=${limit}`)
  if (limit > response.data.length) alert('There is no more articles to show...')
  return response.data
}