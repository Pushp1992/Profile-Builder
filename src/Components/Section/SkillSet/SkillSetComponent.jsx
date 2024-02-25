import { useState } from "react";

import { TextField } from "../../TextField/TextField";
import { TextArea } from "../../TextArea/TextArea";

import Grid from "@mui/material/Unstable_Grid2";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import classNames from "classnames";

import "./style.css";

const SkillSetComponent = () => {
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

  const handleInputChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;

    if (name === "skill") {
      setSkill(value);
      return;
    } else if (name === "techStack") {
      setTechStack(value);
      return;
    }

    if (name === "skillSetDesc") {
      setSkillSetSectionData({
        ...skillSetSectionData,
        skillSetData: { ...skillSetSectionData.skillSetData, [name]: value },
      });
    }

    if (name === "techStackDesc") {
      setSkillSetSectionData({
        ...skillSetSectionData,
        techStackData: { ...skillSetSectionData.techStackData, [name]: value },
      });
    }
  };

  const addSkillAndTech = (event) => {
    event.preventDefault();

    const { name } = event.currentTarget;
    if (name === "addSkill") {
      setSkillSetSectionData({
        ...skillSetSectionData,
        ...skillSetSectionData.skillSetData.skillSetList.push(skill),
      });
      setSkill("");
    }

    if (name === "addTechStack") {
      setSkillSetSectionData({
        ...skillSetSectionData,
        ...skillSetSectionData.techStackData.techStackList.push(techStack),
      });
      setTechStack("");
    }
  };

  const saveSkillSetInformation = (event) => {
    event.preventDefault();
  };

  return (
    <Grid container spacing={2} className="child-section-container">
      <Grid xs={12} className="child-section-actionBtn">
        <button>cancel</button>
        <button onClick={saveSkillSetInformation}>save</button>
      </Grid>
      <div
        className={classNames(
          "child-section-container-body",
          "child-section-container-body--skillset"
        )}
      >
        <Grid xs={6} md={6} lg={6}>
          <div className="skillset-card">
            <h4>{skillSetSectionData.skillSetData.title || ""}</h4>
            <TextArea
              className="skillset"
              name="skillSetDesc"
              placeholder="Write description here ..."
              value={skillSetSectionData.skillSetDesc}
              onChange={handleInputChange}
              rows="3"
              cols="auto"
            />
            <div>
              <TextField
                className="skillset-input-field"
                name="skill"
                placeholder="Enter skillset"
                value={skill}
                onChange={handleInputChange}
              />
              <IconButton
                aria-label="add"
                name="addSkill"
                onClick={addSkillAndTech}
              >
                <AddIcon color="primary" />
              </IconButton>
            </div>
            <Stack spacing={1}>
              {skillSetSectionData.skillSetData.skillSetList.length > 0 &&
                skillSetSectionData.skillSetData.skillSetList.map(
                  (item, index) => {
                    return <span key={index}>{item}</span>;
                  }
                )}
            </Stack>
          </div>
        </Grid>
        <Grid xs={6} md={6} lg={6}>
          <div className="skillset-card">
            <h4>{skillSetSectionData.techStackData.title || ""}</h4>
            <TextArea
              className="techstack"
              name="techStackDesc"
              placeholder="Write description here ..."
              value={skillSetSectionData.techStackDesc}
              onChange={handleInputChange}
              rows="3"
              cols="auto"
            />
            <div>
              <TextField
                className="skillset-input-field"
                name="techStack"
                placeholder="Enter tech stack"
                value={techStack}
                onChange={handleInputChange}
              />
              <IconButton
                aria-label="add"
                name="addTechStack"
                onClick={addSkillAndTech}
              >
                <AddIcon color="primary" />
              </IconButton>
            </div>
            <Stack spacing={1}>
              {skillSetSectionData.techStackData.techStackList.length > 0 &&
                skillSetSectionData.techStackData.techStackList.map(
                  (item, index) => {
                    return <span key={index}>{item}</span>;
                  }
                )}
            </Stack>
          </div>
        </Grid>
      </div>
    </Grid>
  );
};

export default SkillSetComponent;
