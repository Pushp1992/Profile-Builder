import { useState } from "react";

import { TextField } from "../../TextField/TextField";
import { TextArea } from "../../TextArea/TextArea";

import Grid from "@mui/material/Unstable_Grid2";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import classNames from "classnames";

import "./style.css";
import { CardGiftcardRounded, WysiwygSharp } from "@mui/icons-material";

const ProjectComponent = () => {
  const [projectData, setProjectData] = useState({
    text: "Projects",
    subText: "",
    logo: null,
    projectTitle: "",
    projectLink: "",
    projectDesc: "",
  });

  const handleInputChange = (event) => {
    event.preventDefault();
    console.log("*************");
    const { name, value } = event.target;
    setProjectData({ ...projectData, [name]: value });
  };

  const saveProjectData = (event) => {
    event.preventDefault();
    console.log(projectData);
  };

  const Card = () => {
    return (
      <Grid xs={6} md={6} lg={6}>
        <div className="project-card">
          <TextField
            className="projectData-input-field"
            name="projectTitle"
            placeholder="Enter project title"
            value={projectData.projectTitle}
            onChange={handleInputChange}
          />
          {/* <div> */}
          <TextField
            className="projectData-input-field"
            name="projectLink"
            placeholder="Add link"
            value={projectData.projectLink}
            onChange={handleInputChange}
          />
          {/* </div> */}
          <TextArea
            className="project"
            name="projectDesc"
            placeholder="Add description"
            value={projectData.projectDesc}
            onChange={handleInputChange}
            rows="3"
            cols="auto"
          />
        </div>
      </Grid>
    );
  };

  const [projectList, setProjectList] = useState([Card]);

  const addNewcard = (event) => {
    event.preventDefault();
    setProjectList([...projectList, Card]);
  };

  return (
    <Grid container spacing={2} className="child-section-container">
      <Grid xs={12} className="child-section-actionBtn">
        <button>cancel</button>
        <button onClick={saveProjectData}>save</button>
      </Grid>

      <Grid
        container
        spacing={2}
        className={classNames(
          "child-section-container-body",
          "child-section-container-body--project"
        )}
      >
        <Grid xs={12} className="child-section-head">
          <h4>{projectData.text}</h4>
          <TextArea
            className="project"
            name="subText"
            placeholder="Add subtext here..."
            value={projectData.subText}
            onChange={handleInputChange}
            rows="3"
            cols="auto"
          />
        </Grid>

        {
        projectList.map((item, index) => {
            return(
                <Card key={index} />
            )
        })
        }

        <Grid xs={6} md={6} lg={6}>
          <div className="project-card">
            <button onClick={addNewcard}>Add more +</button>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProjectComponent;


// we have to find out WysiwygSharp,
// to dynamically add data to the card