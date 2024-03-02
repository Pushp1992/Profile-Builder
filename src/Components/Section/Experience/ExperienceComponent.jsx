import React, { useState } from "react";

import { TextField } from "../../TextField/TextField";
import { TextArea } from "../../TextArea/TextArea";
import Button from "@mui/material/Button";
import { ImageUploadButton } from "../../ImageUploadButton/ImageUploadButton";

import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Unstable_Grid2";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import classNames from "classnames";

import "./style.css";

/**
 * ExperienceComponent
 * 
 * @param {Object} companyData - company data to display
 * @param {String} companyHeading - heading
 * @param {Function} setCompanyHeading - Functionb to bind company heading
 * @param {Array} companyList - List of company user worked with
 * @param {Function} setCompanyList - Function to bind all company togeather
 * @returns {HTMLElement}
 */
const ExperienceComponent = ({companyData, companyHeading, setCompanyHeading, companyList, setCompanyList}) => {

  const handleInputChange = (event, index) => {
    event.preventDefault();

    let logoUrl;
    const { name, value } = event.target;

    if (name === "subText") {
      setCompanyHeading({ ...companyHeading, [name]: value });
      return;
    }

    if (name === "logo") {
      logoUrl = URL.createObjectURL(event.target.files[0]);
    }

    const newList = [...companyList];
    newList[index][name] = name !== "logo" ? value : logoUrl;
    setCompanyList(newList);
  };

  const saveCompanyData = (event) => {
    event.preventDefault();
    // Note: Final payload is coming as an object of keys instead array
    const result = { ...companyHeading, ...companyList };
    console.log(result);
  };

  const addNewcard = (event) => {
    event.preventDefault();
    setCompanyList([...companyList, companyData]);
  };

  return (
    <Grid container spacing={2} className="child-section-container">
      <Grid xs={12} md={12} lg={12} className="child-section-actionBtn">
      <Button variant="text" className="child-section-actionBtn--cancel">
          cancel
        </Button>
        <Button
          variant="contained"
          size="small"
          className="child-section-actionBtn--save"
          onClick={saveCompanyData}
        >
          save
        </Button>
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
          <h4>{companyHeading.text}</h4>
          <TextArea
            className="company-subtext"
            name="subText"
            placeholder="Add subtext here..."
            value={companyHeading.subText}
            onChange={handleInputChange}
            rows="3"
            cols="auto"
          />
        </Grid>

        {companyList.map((companyData, index) => {
          return (
            <div className="company-card" key={index}>
              <Grid container className="photo-title-designation">
                <Grid xs={4} md={3} lg={3}>
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

              <Grid container spacing={3} className="location-timeline">
                <Grid xs={4} md={3} lg={3}>
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
