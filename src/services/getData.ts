import axios from "axios"

export const getData = async () => {
  const response = await axios.get('https://api.spaceflightnewsapi.net/v3/articles')
  return response.data
}