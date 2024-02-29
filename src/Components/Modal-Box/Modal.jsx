import React, { Suspense } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const AboutMeComponent = React.lazy(() => import("../../Components/Section/AboutMe/AboutMeComponent"));
const IntroductionComponent = React.lazy(() => import("../../Components/Section/Intro/IntroductionComponent"));
const SkillSetComponent =  React.lazy(() => import("../../Components/Section/SkillSet/SkillSetComponent"));

import EditPage from "../../Page/Edit-page/index";

import './style.css';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
//   width: "auto",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "flex-start",
};

const ModalBox = ({ introSectionData }) => {
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
        <Container maxWidth="xl">
          <Suspense>
            <IntroductionComponent {...{ introSectionData }} />
          </Suspense>
          <Container fixed spacing={2}>
            <Box
              className="section-container"
              sx={style}
            >
                {/* <Suspense>
                    <AboutMeComponent />
                </Suspense>
                <Suspense>
                    <SkillSetComponent />
                </Suspense> */}
            </Box>
          </Container>
        </Container>
      </Modal>
    </div>
  );
};

export default ModalBox;

// TODO: make sure Modal is responsive