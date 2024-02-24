import React, {useState, Suspense} from 'react';
import {MenuPopUpButton} from '../../Components/MenuPopup/MenuPopup';

import Container from "@mui/material/Container";

import IntroductionComponent from "../../Components/Section/Intro/IntroductionComponent";
const AboutMeComponent =  React.lazy(() =>import("../../Components/Section/AboutMe/AboutMeComponent"));
const SkillSetComponent =  React.lazy(() =>import("../../Components/Section/SkillSet/SkillSetComponent"));
const ProjectComponent =  React.lazy(() =>import("../../Components/Section/Project/ProjectComponent"));
const ExperienceComponent =  React.lazy(() =>import("../../Components/Section/Experience/ExperienceComponent"));
const CTAComponent =  React.lazy(() =>import("../../Components/Section/CTA/CTAComponent"));

import {MenuPopUpContext} from '../context';

const EditPage = () => {
  const [showSection, setShowSection] = useState({
    aboutMe: false,
    skillSet: false,
    projects: false,
    experience: false,
    cta: false,
  });
  
  return (
    <Container maxWidth="xl">
      <IntroductionComponent/>
      <Suspense>
        {showSection.aboutMe && <AboutMeComponent />}
      </Suspense>
      <Suspense>
        {showSection.skillSet && <SkillSetComponent />}
      </Suspense>
      <Suspense>
        {showSection.projects && <ProjectComponent />}
      </Suspense>
     <Suspense>
      {showSection.experience &&  <ExperienceComponent />}
     </Suspense>
      <Suspense>
        {showSection.cta && <CTAComponent />}
      </Suspense>
      <MenuPopUpContext.Provider value={{showSection, setShowSection}}>
        <MenuPopUpButton />
      </MenuPopUpContext.Provider>
    </Container>
  );
};

export default EditPage;
