import { Avatar, Box } from "@mui/material";

type ArticleAvatarProps = {
  title: string;
  url: string;
};

const ArticleAvatar = ({ title, url }: ArticleAvatarProps) => {
  return (
    <Box className="avatar-container">
      <Avatar
        className="card-avatar"
        alt={title}
        src={url}
      />
    </Box>
  );
};

export default ArticleAvatar