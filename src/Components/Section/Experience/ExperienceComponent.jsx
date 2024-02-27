import React, { useState } from "react";

import { TextField } from "../../TextField/TextField";
import { TextArea } from "../../TextArea/TextArea";
import { ImageUploadButton } from "../../ImageUploadButton/ImageUploadButton";

import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Unstable_Grid2";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import classNames from "classnames";

import "./style.css";

const ExperienceComponent = () => {
  const data = {
    logo: null,
    companyTitle: "",
    designation: "",
    companyLocation: "",
    tenure: "",
    companyDesc: "",
  };

  const [heading, setHeading] = useState({
    text: "Experience",
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

  const saveCompanyData = (event) => {
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
        <button onClick={saveCompanyData}>save</button>
      </Grid>

      <Grid
        container
        spacing={2}
        className={classNames(
          "child-section-container-body",
          "child-section-container-body--company"
        )}
      >
        <Grid xs={12} className="child-section-head">
          <h4>{heading.text}</h4>
          <TextArea
            className="company"
            name="subText"
            placeholder="Add subtext here..."
            value={heading.subText}
            onChange={handleInputChange}
            rows="3"
            cols="auto"
          />
        </Grid>

        {list.map((companyData, index) => {
          return (
            <div className="company-card" key={index}>
              <Grid container className="photo-title-designation">
                <Grid xs={3} md={3} lg={3}>
                  {companyData.logo === null ? (
                    <ImageUploadButton
                      onChange={(event) => handleInputChange(event, index)}
                    />
                  ) : (
                    <Avatar alt="Travis Howard" src={companyData.logo} />
                  )}
                </Grid>
                <Grid container>
                  <Grid xs={12} md={12} lg={12}>
                    <TextField
                      className="companyData-input-field"
                      name="companyTitle"
                      placeholder="Enter company title"
                      value={companyData.companyTitle}
                      onChange={(event) => handleInputChange(event, index)}
                    />
                  </Grid>
                  <Grid xs={12} md={12} lg={12}>
                    <TextField
                      className="companyData-input-field"
                      name="designation"
                      placeholder="Enter designation"
                      value={companyData.designation}
                      onChange={(event) => handleInputChange(event, index)}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid container className="location-timeline">
                <Grid xs={3} md={3} lg={3}>
                  <TextField
                    className="companyData-input-field"
                    name="companyLocation"
                    placeholder="+ Add location"
                    value={companyData.companyLocation}
                    onChange={(event) => handleInputChange(event, index)}
                  />
                </Grid>
                <Grid xs={6} md={6} lg={6}>
                  <TextField
                    className="companyData-input-field"
                    name="tenure"
                    placeholder="+ Add timeline"
                    value={companyData.tenure}
                    onChange={(event) => handleInputChange(event, index)}
                  />
                </Grid>
                <Grid xs={12} md={12} lg={12}>
                  <TextArea
                    className="company"
                    name="companyDesc"
                    placeholder="Add description"
                    value={companyData.companyDesc}
                    onChange={(event) => handleInputChange(event, index)}
                    rows="3"
                    cols="auto"
                  />
                </Grid>
              </Grid>
            </div>
          );
        })}

        <Grid xs={12} md={12} lg={12}>
          <div className="company-card-add-btn-container">
            <IconButton
              aria-label="add"
              name="addTechStack"
              onClick={addNewcard}
            >
              <AddIcon color="primary" fontSize="small" />
              <span className="btn-text">Add next</span>
            </IconButton>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ExperienceComponent;
