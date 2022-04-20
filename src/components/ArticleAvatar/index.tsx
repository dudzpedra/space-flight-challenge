import { Avatar, Box } from "@mui/material";
import './styles.sass'

type ArticleAvatarProps = {
  title: string;
  url: string;
};

const ArticleAvatar = ({ title, url }: ArticleAvatarProps) => {
  return (
    <Box>
      <Avatar
        className="card-avatar"
        alt={title}
        src={url}
      />
    </Box>
  );
};

export default ArticleAvatar