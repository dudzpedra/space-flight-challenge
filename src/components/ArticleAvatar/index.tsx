import { Avatar, Box } from "@mui/material";

type ArticleAvatarProps = {
  title: string;
  url: string;
  isModal: boolean;
};

const ArticleAvatar = ({ title, url, isModal }: ArticleAvatarProps) => {
  return (
    <Box>
      <Avatar
        className={isModal ? 'details-avatar' : "article-avatar"}
        alt={title}
        src={url}
        variant='square'
      />
    </Box>
  );
};

export default ArticleAvatar