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
  const data = {
    text: "Projects",
    subText: "",
    logo: null,
    projectTitle: "",
    projectLink: "",
    projectDesc: "",
  };

  const [list, setList] = useState([data]);

  const handleInputChange = (event, index) => {
    event.preventDefault();
    const { name, value } = event.target;

    const newList = [...list];
    newList[index][name] = value;
    setList(newList);
  };

  const saveProjectData = (event) => {
    event.preventDefault();
    console.log(list);
  };

  const addNewcard = (event) => {
    event.preventDefault();
    setList([...list, data]);
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
          <h4>heading</h4>
          <TextArea
            className="project"
            name="subText"
            placeholder="Add subtext here..."
            value="subheading"
            onChange={handleInputChange}
            rows="3"
            cols="auto"
          />
        </Grid>

        {list.map((projectData, index) => {
          return (
            <Grid xs={6} md={6} lg={6} key={index}>
              <div className="project-card">
                <TextField
                  className="projectData-input-field"
                  name="projectTitle"
                  placeholder="Enter project title"
                  value={projectData.projectTitle}
                  onChange={(event) => handleInputChange(event, index)}
                />
                {/* <div> */}
                <TextField
                  className="projectData-input-field"
                  name="projectLink"
                  placeholder="Add link"
                  value={projectData.projectLink}
                  onChange={(event) => handleInputChange(event, index)}
                />
                {/* </div> */}
                <TextArea
                  className="project"
                  name="projectDesc"
                  placeholder="Add description"
                  value={projectData.projectDesc}
                  onChange={(event) => handleInputChange(event, index)}
                  rows="3"
                  cols="auto"
                />
              </div>
            </Grid>
          );
        })}

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
