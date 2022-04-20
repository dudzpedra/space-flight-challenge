import { Box } from "@mui/material"
import { Article } from "../../types"
import './styles.sass'

type DetailsCardProps = {
  article: Article
}

const DetailsCard = ({article}: DetailsCardProps) => {
  return (
    <Box className="details-container">
      {article.title}
    </Box>
  )
}

export default DetailsCard