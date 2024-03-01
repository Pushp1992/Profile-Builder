import React, { useState, Suspense } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "react-bootstrap/Modal";

const AboutMeComponent = React.lazy(() => import("../../Components/Section/AboutMe/AboutMeComponent"));
const IntroductionComponent = React.lazy(() => import("../../Components/Section/Intro/IntroductionComponent"));
const SkillSetComponent =  React.lazy(() => import("../../Components/Section/SkillSet/SkillSetComponent"));
const ProjectComponent =  React.lazy(() => import("../../Components/Section/Project/ProjectComponent"));
const ExperienceComponent =  React.lazy(() => import("../../Components/Section/Experience/ExperienceComponent"));
const BlogComponent =  React.lazy(() => import("../../Components/Section/Blog/BlogComponent"));


import "./style.css";

const ModalBox = ({
  introSectionData,
  skill,
  techStack,
  skillSetSectionData,
  data,
  heading,
  list,
  companyData,
  companyHeading,
  companyList,
  blogData,
  blogHeading,
  blogList
}) => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <div>
      <Button onClick={() => setLgShow(true)}>Preview</Button>

      <Modal
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Preview Mode
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container maxWidth="xl">
            <Suspense>
              <IntroductionComponent {...{ introSectionData }} />
            </Suspense>
            <Container fixed spacing={2}>
              <Box className="section-container">
                <Suspense>
                  <AboutMeComponent />
                </Suspense>
                <Suspense>
                  <SkillSetComponent
                    {...{ skill, techStack, skillSetSectionData }}
                  />
                </Suspense>
                <Suspense>
                  <ProjectComponent {...{ data, heading, list }} />
                </Suspense>
                <Suspense>
                  <ExperienceComponent
                    {...{ companyData, companyHeading, companyList }}
                  />
                </Suspense>
                <Suspense>
                  <BlogComponent {...{blogData, blogHeading, blogList}} />
                </Suspense>
              </Box>
            </Container>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalBox;
