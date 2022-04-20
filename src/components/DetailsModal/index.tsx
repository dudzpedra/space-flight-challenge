import { Box, Modal } from "@mui/material";
import { Article } from "../../types";
import DetailsCard from "../DetailsCard";

type DetailsProps = {
  open: boolean;
  handleClose: () => void;
  article: Article;
};

const DetailsModal = ({ open, handleClose, article }: DetailsProps) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box>
        <DetailsCard article={article} />
      </Box>
    </Modal>
  );
};

export default DetailsModal;
