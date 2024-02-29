import React, { Suspense } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const AboutMeComponent = React.lazy(() =>
  import("../../Components/Section/AboutMe/AboutMeComponent")
);
import EditPage from "../../Page/Edit-page/index";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalBox = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="contained"
        className="preview-page-btn"
        onClick={handleOpen}
      >
        Preview
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Suspense>
            {" "}
            <AboutMeComponent />
          </Suspense>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalBox;
