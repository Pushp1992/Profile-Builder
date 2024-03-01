import React, { useState, Suspense } from "react";
import { MenuPopUpButton } from "../../Components/MenuPopup/MenuPopup";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import IntroductionComponent from "../../Components/Section/Intro/IntroductionComponent";
const AboutMeComponent =  React.lazy(() => import("../../Components/Section/AboutMe/AboutMeComponent"));
const SkillSetComponent =  React.lazy(() => import("../../Components/Section/SkillSet/SkillSetComponent"));
const ProjectComponent =  React.lazy(() => import("../../Components/Section/Project/ProjectComponent"));
const ExperienceComponent =  React.lazy(() => import("../../Components/Section/Experience/ExperienceComponent"));
const BlogComponent =  React.lazy(() => import("../../Components/Section/Blog/BlogComponent"));
const CTAComponent =  React.lazy(() => import("../../Components/Section/CTA/CTAComponent"));
const ModalBox = React.lazy(() => import('../../Components/Modal-Box/Modal'));


import { MenuPopUpContext, IntroductionComponentContext } from "../context";

import "./style.css";

const EditPage = () => {
  const [showSection, setShowSection] = useState({
    aboutMe: false,
    skillSet: false,
    projects: false,
    experience: false,
    blog: false,
    cta: false,
  });

  const [introSectionData, setIntroSectionData] = useState({
    siteTitle: "",
    profilePhoto: null,
    profileTitle: "",
    profileSubTitle: "",
    profileName: "",
    profileEmail: "",
  });

  const [skill, setSkill] = useState("");
  const [techStack, setTechStack] = useState("");

  const [skillSetSectionData, setSkillSetSectionData] = useState({
    skillSetData: {
      title: "Skillsets",
      skillSetDesc: "",
      skillSetList: [],
    },
    techStackData: {
      title: "Stack",
      techStackDesc: "",
      techStackList: [],
    },
  });

  const data = {
    logo: null,
    projectTitle: "",
    projectLink: "",
    projectDesc: "",
  };

  const [heading, setHeading] = useState({
    text: "Projects",
    subText: "",
  });

  const [list, setList] = useState([data]);


  return (
    <Container maxWidth="xl">
      <IntroductionComponent {...{introSectionData, setIntroSectionData}} />
      <Container fixed spacing={2}>
        <Box
          className="section-container"
          sx={{
            width: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Suspense>{showSection.aboutMe && <AboutMeComponent />}</Suspense>
          <Suspense>{showSection.skillSet && <SkillSetComponent {...{skill, setSkill, techStack, setTechStack, skillSetSectionData, setSkillSetSectionData}} />}</Suspense>
          <Suspense>{showSection.projects && <ProjectComponent {...{data, heading, setHeading, list, setList}} />}</Suspense>
          <Suspense>
            {showSection.experience && <ExperienceComponent />}
          </Suspense>
          <Suspense>{showSection.blog && <BlogComponent />}</Suspense>
          <Suspense>{showSection.cta && <CTAComponent />}</Suspense>
        </Box>
        <MenuPopUpContext.Provider value={{ showSection, setShowSection }}>
          <MenuPopUpButton />
        </MenuPopUpContext.Provider>
        <ModalBox {...{introSectionData, skill, techStack, skillSetSectionData, data, heading, list}} />
      </Container>
    </Container>
  );
};

export default EditPage;
