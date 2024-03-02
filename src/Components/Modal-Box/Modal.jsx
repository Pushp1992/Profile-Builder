import React, { useState, Suspense } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Modal from "react-bootstrap/Modal";

const AboutMeComponent = React.lazy(() => import("../../Components/Section/AboutMe/AboutMeComponent"));
const IntroductionComponent = React.lazy(() => import("../../Components/Section/Intro/IntroductionComponent"));
const SkillSetComponent =  React.lazy(() => import("../../Components/Section/SkillSet/SkillSetComponent"));
const ProjectComponent =  React.lazy(() => import("../../Components/Section/Project/ProjectComponent"));
const ExperienceComponent =  React.lazy(() => import("../../Components/Section/Experience/ExperienceComponent"));
const BlogComponent =  React.lazy(() => import("../../Components/Section/Blog/BlogComponent"));
const CTAComponent =  React.lazy(() => import("../../Components/Section/CTA/CTAComponent"));

import "./style.css";

/**
 * 
 * @param {Object} introSectionData - Profile section intor data
 * @param {Object} skill - Skillset section skill data
 * @param {Object} techStack - Skillset section tech stack data
 * @param {Object} skillSetSectionData - Skill set section data
 * @param {Object} data - Project section data
 * @param {string} heading - Project section heading
 * @param {Object} companyData - Project section company data
 * @param {String} companyHeading - project section heading
 * @param {Array} companyList - Experience Section company list
 * @param {Object} blogData - Blog section data
 * @param {Object} blogHeading - Blog section heading
 * @param {Array} blogList - Blog section list
 * @param {Object} ctaData - Cta section data
 * 
 * @returns {HTMLElement} div
 */
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
  blogList,
  ctaData,
  editorState
}) => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <div className="modal-box-open-btn">
      <Button  variant="contained" color="success"  onClick={() => setLgShow(true)}>Preview</Button>

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
                {/* <Suspense>
                  <AboutMeComponent {...{editorState}} />
                </Suspense> */}
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
                <Suspense>
                  <CTAComponent {...{ctaData}} />
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
