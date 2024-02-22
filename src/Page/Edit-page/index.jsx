import React, {Suspense} from 'react';

import Container from "@mui/material/Container";

import IntroductionComponent from "../../Components/Section/Intro/IntroductionComponent";
const AboutMeComponent =  React.lazy(() =>import("../../Components/Section/AboutMe/AboutMeComponent"));
const SkillSetComponent =  React.lazy(() =>import("../../Components/Section/SkillSet/SkillSetComponent"));
const ProjectComponent =  React.lazy(() =>import("../../Components/Section/Project/ProjectComponent"));
const ExperienceComponent =  React.lazy(() =>import("../../Components/Section/Experience/ExperienceComponent"));
const CTAComponent =  React.lazy(() =>import("../../Components/Section/CTA/CTAComponent"));

const EditPage = () => {
  return (
    <Container maxWidth="xl">
      <IntroductionComponent/>
      <AboutMeComponent />
      <SkillSetComponent />
      <ProjectComponent />
      <ExperienceComponent />
      <CTAComponent />
    </Container>
  );
};

export default EditPage;
