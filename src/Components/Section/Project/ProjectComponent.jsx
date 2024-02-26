import { useState } from "react";

import { TextField } from "../../TextField/TextField";
import { TextArea } from "../../TextArea/TextArea";
import { ImageUploadButton } from "../../ImageUploadButton/ImageUploadButton";

import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Unstable_Grid2";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import classNames from "classnames";

import "./style.css";

const ProjectComponent = () => {
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

  const handleInputChange = (event, index) => {
    event.preventDefault();

    let logoUrl;
    const { name, value } = event.target;

    if (name === "subText") {
      setHeading({ ...heading, [name]: value });
      return;
    }

    if (name === "logo") {
      logoUrl = URL.createObjectURL(event.target.files[0]);
    }

    const newList = [...list];
    newList[index][name] = name !== "logo" ? value : logoUrl;
    setList(newList);
  };

  const saveProjectData = (event) => {
    event.preventDefault();
    // Note: Final payload is coming as an object of keys instead array
    const result = { ...heading, ...list };
    console.log(result);
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
          <h4>{heading.text}</h4>
          <TextArea
            className="project"
            name="subText"
            placeholder="Add subtext here..."
            value={heading.subText}
            onChange={handleInputChange}
            rows="3"
            cols="auto"
          />
        </Grid>

        {list.map((projectData, index) => {
          return (
            <Grid xs={6} md={6} lg={6} key={index}>
              <div className="project-card">
                {projectData.logo === null ? (
                  <ImageUploadButton
                    onChange={(event) => handleInputChange(event, index)}
                  />
                ) : (
                  <Avatar alt="Travis Howard" src={projectData.logo} />
                )}

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
            <IconButton
              aria-label="add"
              name="addTechStack"
              onClick={addNewcard}
            >
              <AddIcon color="primary" />
            </IconButton>
            <div className="project-add-btn">Add new card</div>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProjectComponent;
