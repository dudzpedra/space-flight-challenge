import { Box, Modal } from "@mui/material";
import { Article } from "../../utils/types";
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
        <DetailsCard article={article} handleClose={handleClose} />
      </Box>
    </Modal>
  );
};

export default DetailsModal;
